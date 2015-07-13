define([
	'jquery',
	'jqueryScrollLoading'
], function() {
	var scroll = {
		imgScrollLoading : function() {
			//异步载入图像
			var img = arguments[0] || ".asyn";
			$(img).scrollLoading();
		},
		imgAndPlayNavScrollLoading : function() {
			
			//线路详细页面 异步载入图像与导航定位
			var img = arguments[0] || ".asyn";
			var ranges = [];
			var liLength = $('#playIntroduceNav li').length - 1;//排除讨论
			//计算当前属于哪个导航模块
			$('#playIntroduceNav li').each(function(row) {
				var dt = $(this).parent().siblings('dl').children('dt').eq(row);
				if(row < liLength) {
					t = dt.offset().top;
				}else {
					//活动讨论位置与其他地方不同
					t = $(this).parent().parent().next().offset().top;
				}
				ranges.push(t);
				//$(this).addClass('cur').siblings('li').removeClass('cur');
			});
			//console.log(ranges);
			var nav = function() {
				var play = $('#playIntroduceNav');
				var top = play.parent().offset().top - 30;
				//当前的scrollTop
				var now = $('body').scrollTop();
				if(now == 0)
					now = $('html').scrollTop();
				//console.log('now ' + now);
				//console.log('top ' + top);
				//alert(now);
				if(now > top) {
					play.addClass('detail_play_nav_fixed');
				}else {
					play.removeClass('detail_play_nav_fixed');
				}
				var length = ranges.length;
				now += 80;
				for(var i = 0; i < length; i++) {
					if(now >= ranges[i] && i == length - 1) {
						$('#playIntroduceNav li').eq(i).addClass('cur').siblings('li').removeClass('cur');
						break;
					}else if(now >= ranges[i] && now <= ranges[i+1]) {
						$('#playIntroduceNav li').eq(i).addClass('cur').siblings('li').removeClass('cur');
						break;
					}
				}
			};
			$(img).scrollLoading({
				eventObjects: nav
			});
		},
		imgAndTeamNavScrollLoading : function() {
			//团队详细页面 异步载入图像与导航定位
			var img = arguments[0] || ".asyn";
			var ranges = [];
			var liLength = $('#playIntroduceNav li').length;//排除讨论
			//计算当前属于哪个导航模块
			$('#playIntroduceNav li').each(function(row) {
				var dt = $(this).parent().siblings('dl').children('dt').eq(row);
				t = dt.offset().top;
				ranges.push(t);
				//$(this).addClass('cur').siblings('li').removeClass('cur');
			});
			//console.log(ranges);
			var nav = function() {
				var play = $('#playIntroduceNav');
				var top = play.next().offset().top - 80;
				//当前的scrollTop
				var now = $('body').scrollTop();
				if(now == 0)
					now = $('html').scrollTop();
				//console.log('now ' + now);
				//console.log('top ' + top);
				if(now > top) {
					play.addClass('detail_play_nav_fixed');
				}else {
					play.removeClass('detail_play_nav_fixed');
				}
				var length = ranges.length;
				now += 100;
				for(var i = 0; i < length; i++) {
					if(now >= ranges[i] && i == length - 1) {
						$('#playIntroduceNav li').eq(i).addClass('cur').siblings('li').removeClass('cur');
						break;
					}else if(now >= ranges[i] && now <= ranges[i+1]) {
						$('#playIntroduceNav li').eq(i).addClass('cur').siblings('li').removeClass('cur');
						break;
					}
				}
			};
			$(img).scrollLoading({
				eventObjects: nav
			});
		}
	};
	return scroll;
});