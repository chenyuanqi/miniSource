define([
	'jquery',
	'constUtil',
	'enumUtil',
	'jqueryCookie',
	'jqueryMobileDialog'
], function ($, constUtil, enumUtil) {
	var wap ={};
	//设置内容为超链接的选择弹出框
	wap.setLinkSimpledialog = function(options) {
		var dialogForce = options.df || false;
		$('#' + options.id).click(function() {
			$('#' + options.conId).simpledialog2({
				mode: 'blank',
				headerText: options.text,
				headerClose: true,
				blankContent: true,
				dialogForce: dialogForce
			});
		});
	};
	//默认设置区域
	wap.setCurrentCity = function() {
		//获取cookie
		var area = $.cookie(constUtil.area_cookie);
		//从数据字典中查找
		area = enumUtil.enum_city[area];
		if(area) {
			$('#areaOpenDialog').text(area);
		}
	};
	return wap;
});