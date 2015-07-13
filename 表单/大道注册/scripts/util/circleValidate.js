define(function() {
	var circle = {};
	circle.checkTitle = function(str) {
		if(!str) {
			return '请输入圈子名称';
		}
		if(str.length > 20) {
			return '圈子名称已超过限定字数';
		}
		return '';
	};
	circle.checkPlate = function(parent, child) {
		if(!(+parent)) {
			return '请选择类型';
		}
		// if(child && !(+child)) {
			// return '请选择讨论区';
		// }
		return '';
	};
	circle.checkDes = function(des) {
		if(des && des.length > 100) {
			return '圈子介绍字数不能超过100';
		}
		return '';
	};
	circle.checkApplyRemark = function(remark) {
		if(remark && remark.length > 50) {
			return '圈子申请备注字数不能超过50';
		}
		return '';
	};
	circle.checkRefuseRemark = function(remark) {
		if(remark && remark.length > 50) {
			return '拒绝理由字数不能超过50';
		}
		return '';
	};
	return circle;
});