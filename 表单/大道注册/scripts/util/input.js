define([
	'jquery',
	'userValidate',
	'constUtil',
	'regexUtil',
	'jqueryMailAutoComplete'
],function($, validate, constUtil, regexUtil) {
	var input = {};
	//扩展变量
	function _extend(options) {
		var defaults = {  
			len: 0,
			limit: 0,//当超过limit的时候显示不同颜色 
			digitalId: '',  
			inputId: '',
			errorId: '',//各个输入框的错误提示信息
			normal: '#404040',
			warnning: '#ff0000',
			fontSize: '1em'
		};
		//放置default被覆盖
		return $.extend(defaults, options);
	}
	//长度限制先决条件
	function _checkLimit(options) {
		if(!options.inputId || !options.digitalId) {
			return false;
		}
		if(options.len <= 0)
			return false;
		return true;
	}
	//检查字符长度
	function _textLimit(options, value) {
		var length = value.length;
		var color = options.normal;
		var remind = options.len - length;
		if(remind > 0 && remind <= options.limit) {
			color = options.warnning;
		}
		if(remind < 0) {
			var txt = $('#' + options.inputId);
			txt.val(value.substr(0, options.len));
			remind = 0;
		}
		
		$('#' + options.digitalId).html(remind).css({"color": color, "font-size": options.fontSize});
	}
	//抽象出的keyup事件
	function _comKeyup(fun, options) {
		options = _extend(options);
        var can = _checkLimit(options);
		if(!can) return;
		//console.log([].slice.call(arguments, 2));
		var args = [].slice.call(arguments, 1);
		fun.apply(this, args);
	}
	//普通输入框规则
	input.text = function(options) {
		var fun = function(options) {
			$('#'+options.inputId).bind('keyup', function() {
				_textLimit(options, $(this).val());
			});
		}
		_comKeyup(fun, options)
	};
	//邮箱输入框规则
	input.email = function(options) {
		var fun = function(options) {
			var field = $("#"+options.inputId);
			field.mailAutoComplete({
				boxClass: "out_box", //外部box样式
				listClass: "list_box", //默认的列表样式
				focusClass: "focus_box", //列表选样式中
				markCalss: "mark_box", //高亮样式
				autoClass: false,
				textHint: true, //提示文字自动隐藏
				keyup: function() {
					_textLimit(options, field.val());
				}
			});
		}
		_comKeyup(fun, options)
	};
	//输入框的各种验证
	function _checkInput(options) {
		if(!options.inputId || !options.errorId) {
			return false;
		}
		return true;
	}
	//通用Ajax处理
	function _checkAjax(url, options, params) {
		$.post(constUtil.absUrl(url), params, function(json) {
			var input = $("#"+options.inputId);
			var error = $("#"+options.errorId);
			//JSON处理
			constUtil.showJsonPrompt(json, function(data, input, error, con) {
				if(con.isJsonSuccess(data)) {
					_showCorrect(error, input);
				}else {
					_showError(error, input, data.msg);
				}
			})(input, error, constUtil);
		});
	}
	function _showCorrect(error, input) {
		if(!error.hasClass('error') && error.html()!=error.attr('title')) {
			//在显示密码强度提示的时候不应该被覆盖
		}else {
			error.html(error.attr('title')).removeClass('error');
		}
		
		input.nextAll().remove().end().after('<font class="ico_correct"></font>');
	}
	function _showError(error, input, failure) {
		error.html(failure).addClass('error');
		input.nextAll().remove().end().after('<font class="ico_error"></font>');
	}
	function _comKeyup(fun, options) {
		options = _extend(options);
        var can = _checkLimit(options);
		if(!can) return;
		var args = [].slice.call(arguments, 1);
		fun.apply(this, args);
	}
	function _comBlur(fun, options) {
		options = _extend(options);
		var can = _checkInput(options);
		if(!can) return;
		var args = [].slice.call(arguments, 1);
		fun.apply(this, args);
	}
	function _showBlurMessage(failure, field, error) {
		if(failure) {//将错误信息填入到提示中
			_showError(error, field, failure);
		}else {//格式正确，将正确信息填入到提示中
			_showCorrect(error, field);
		}
	}
	//邮箱格式规则
	input.emailFormat = function(options, isAjax) {
		var fun = function(options, isAjax) {
			var email = $("#"+options.inputId);
			var error = $("#"+options.errorId);
			email.bind('blur', function() {
				var value = $.trim(email.val());
				if(!value) {
					return;
				}
				var failure = validate.checkEmail(value);
				_showBlurMessage(failure, email, error);
				if(isAjax && !error.hasClass('error')) {//是否做Ajax重复验证
					_checkAjax(constUtil.ajaxCheckEmail, options, {email: value});
				}
			});
		}
		_comBlur(fun, options, isAjax);
	};
	//密码输入框规则
	input.password = function(options) {
		var fun = function(options) {
			var field = $("#"+options.inputId);
			var error = $("#"+options.errorId);
			field.bind('keyup', function() {
				var value = field.val();
				_textLimit(options, value);
				var next = field.parent().next();
				next.children().removeClass().end().children('font').html('');//删除class
				error.removeClass('error');
				//强度规则
				if(regexUtil.checkPwdStrong(value)) {
					next.children('span').addClass('strong').end().children('font').addClass('strong_word').html('强');
					error.html('密码强度好，请记牢');
				}else if(regexUtil.checkPwdMedium(value)) {
					next.children('span:lt(2)').addClass('medium').end().children('font').addClass('medium_word').html('中等');
					error.html('复杂度还行，还可再加强一下');
				}else if(regexUtil.checkPwdPoor(value)) {
					next.children('span:first').addClass('poor').end().children('font').addClass('poor_word').html('弱');
					error.html('相同字符密码易被破解，请用多组合的密码');
				}else {
					error.html(error.attr('title'));
				}
			});
		}
		_comKeyup(fun, options);
	}
	input.passwordFormat = function(options) {
		var fun = function(options) {
			var field = $("#"+options.inputId);
			var error = $("#"+options.errorId);
			field.bind('blur', function() {
				var value = field.val();
				if(!value) {
					return;
				}
				
				var failure = validate.checkPwd(value);
				_showBlurMessage(failure, field, error);
			});
		}
		_comBlur(fun, options);
	}
	//确认密码输入验证
	input.rePasswordFormat = function(options) {
		var fun = function(options) {
			var field = $("#"+options.inputId);
			var error = $("#"+options.errorId);
			field.bind('blur', function() {
				var value1 = $('input[name=pwd]:first').val();
				var value2 = $('input[name=pwd]:last').val();
				if(!value2) {
					return;
				}
				var failure = validate.checkRePwd(value1, value2);
				_showBlurMessage(failure, field, error);
			});
		}
		_comBlur(fun, options);
	}
	return input;
});