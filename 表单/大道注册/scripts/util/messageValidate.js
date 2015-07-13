define(function() {
	var message = {};
	message.checkPrivateCont = function(str) {
		if(!str) {
			return '请输入私信内容';
		}
		if(str.length > 200) {
			return '私信内容字数不能超过200';
		}
		return '';
	};
	return message;
});