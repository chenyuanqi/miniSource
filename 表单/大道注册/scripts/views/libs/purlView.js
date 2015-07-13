define([
	'purl',
	'underscore'
], function(purl, _) {
	var urlObject = {};
	urlObject.joinUrl = function(target, currentUrl) { //根据传入的键值对 组成新URL
		var url = !!currentUrl ? decodeURIComponent(currentUrl) : decodeURIComponent(location.href);//解码
		url = purl(url);
		var path = url.attr('path');
		var params = url.param();
		params = _.extend(params, target);
		var newArrs = [];
		_.each(params, function(value, key) {
			newArrs.push(key + '=' + value);
		});
		return path + '?' + newArrs.join('&');
	};
	urlObject.getParamsValue = function(attr, currentUrl) { //根据URL获取参数
		var url = !!currentUrl ? decodeURIComponent(currentUrl) : decodeURIComponent(location.href);//解码
		url = purl(url);
		return url.param(attr);
	};
	return urlObject;
});