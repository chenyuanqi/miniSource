define([
	'jquery',
	'constUtil',
	'userValidate',
	'inputUtil',
	'md5'
	//'jqueryInputTips'
], function($, constUtil, validate, inputUtil) {
	var register = {};
	register.check = function() {
		inputUtil.email({len:40, limit:30, digitalId:'txtEmailDigit',  inputId:'txtEmail'});
		inputUtil.emailFormat({errorId:'errorEmail',  inputId:'txtEmail'}, true);
		inputUtil.password({len:20, limit:12, digitalId:'txtPwdDigit',  inputId:'txtPwd', errorId:'errorPwd'});
		inputUtil.passwordFormat({errorId:'errorPwd',  inputId:'txtPwd'});
		inputUtil.text({len:20, limit:12, digitalId:'txtRePwdDigit',  inputId:'txtRePwd'});
		inputUtil.rePasswordFormat({errorId:'errorRePwd',  inputId:'txtRePwd'});
		$('#cbProtocol').click(function() {//协议特效
			var btn = $('#btnRegister');
			var width = btn.width();
			var height = btn.height();
			var left = btn.offset().left;
			var top = btn.offset().top;
			if($(this).is(':checked')) {
				$('#protocolLayer').remove();
			}else {
				$('body').append('<div id="protocolLayer"></div>');
				$('#protocolLayer').css({'left':left, 'top':top, 'width':width, 'height':height}).addClass('layer1');
			}
		});
	};
	function _valid(failure, error, field) {
		if(failure) {
			error.html(failure).addClass('error');
			field.nextAll().remove().end().after('<font class="ico_prompt"></font><font class="ico_prompt_word">这里有错误</font>');
			return false;
		}
		return true;
	}
	function _showPrompt(failure, errorId, inputId) {
		var correct =  _valid(failure, $('#'+ errorId), $('#'+inputId));
		if(!correct) {
			return false;
		}
		return true;
	}
	register.setRegister = function() { //注册
		//协议内容特效
		require(['dialogPlus'], function(dialog) {
			$('#btnProtocol').click(function() {
				dialog({
						url: constUtil.absUrl(constUtil.webProtocol),
						title: '服务条款',
						padding: 10,
						height: 530,
						width: 500,
						scrolling: 'yes'
				}).showModal();
				return false;
			});
		});
		
		$('#btnRegister').click(function() {
			var email = $.trim($('#txtEmail').val());
			var pwd = $('#txtPwd').val();
			var repwd = $('#txtRePwd').val();
			var isAgree = $('#cbProtocol').is(':checked');
			$('#perror').html('');
			if(!_showPrompt(validate.checkEmail(email), 'errorEmail', 'txtEmail')) {
				return false;
			}
			if(!_showPrompt(validate.checkPwd(pwd),'errorPwd', 'txtPwd')) {
				return false;
			}
			if(!_showPrompt(validate.checkRePwd(pwd, repwd),'errorRePwd', 'txtRePwd')) {
				return false;
			}
			
			var btn = this;
			constUtil.showAjaxLoading(btn);
			var input = {email: email, pwd: pwd};
			$(btn).nextAll('font').remove();
			$.post(constUtil.absUrl(constUtil.ajaxUserRegister), input, function(json) {
				//JSON处理
				constUtil.showJsonPrompt(json, function(data, con) {
					if(con.isJsonSuccess(data)) {
						//TODO 登录到上一页 现在是直接返回首页
						//location.href = con.absUrl(con.webUserReActive +'?nick='+encodeURIComponent(nick));
						$(btn).after('<font class="ico_correct"></font>');
					}else {
						$('#perror').html(data.msg);
					}
				})(constUtil, btn);
			});
			return false;
		});
	};
	
	return register;
});