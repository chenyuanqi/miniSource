define(['regexUtil'], function(regexUtil) {
	var message = {};
	message.checkEmail = function(str) {
		if(!regexUtil.checkEmail(str)) {
			return '请输入正确的邮件格式';
		}
		return false;
	};
	message.checkPwd = function(str) {
		if(str.length < 6 || str.length > 20) {
			return '密码长度为6-16个字符';
		}
		if(regexUtil.checkContainSpaces(str)) {
			return '密码不能包含空格';
		}
		return false;
	};
	message.checkRePwd = function(pwd1, pwd2) {
		if(pwd1 !== pwd2) {
			return '两次密码输入不一致';
		}
		return false;
	};
	return message;
});