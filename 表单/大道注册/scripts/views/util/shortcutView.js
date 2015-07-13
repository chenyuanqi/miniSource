define([
	'jquery',
	'constUtil',
	'dialogPlus'
], function ($, constUtil, dialog) {
	var shortcut = {
		allNeed: function() {//都需要的方法
			this.navHover();
		},
		getLogin: function() {
			var _this = this;
			//判断是否已经登录
			require( ['mustache'], function(Mustache) {
				var url = constUtil.domain + constUtil.shortCutUser;
				var template = constUtil.domain + constUtil.template + 'util/shortcut.html';
				$.get(url, {type: "login", random: Math.random()}, function(data) {
					//promise模式
					$.ajax(template, {dataType: 'html'}).done(function(defer) {
						if(!data) return;
						//console.log($.parseJSON(data));
						var html = Mustache.to_html(defer, $.parseJSON(data));
						$("#shortcut_user").html(html);
						_this.setMycenter();
						//console.log(html);
					});
				});
			});
		},
		navHover: function() { //导航栏移入移出
			$('#nav_banner').delegate('dd', 'hover', function(event) {
				var nav = $(this).parent().parent().next();
				//console.log(nav.html());
				if(event.type == 'mouseenter') {
					$(this).addClass('cur');
					if($(this).children('p').length > 0) {
						$(this).children('p').slideDown(100);
						var top = nav.offset().top;
						var left = nav.offset().left;
						nav.next().slideDown(100).css({top:top, left:left});
					}
				}else{
					$(this).removeClass('cur');
					$(this).children('p').fadeOut();
					nav.next().fadeOut();
				}
			});
		}
	};
	return shortcut;
});