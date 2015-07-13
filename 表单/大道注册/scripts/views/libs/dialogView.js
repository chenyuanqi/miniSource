define([
	'jquery',
	'constUtil',
	'dialogPlus'
], function ($, constUtil, dialog) {
	var layer ={};
	layer.setPrivateMessage = function() {//私信弹出层
		$('a[name=btn_send_msg]').click(function() {
			window.dialog = dialog;
			var sendid = $(this).attr('sendid');
			var uname = $(this).attr('uname');
			dialog({
				url: constUtil.absUrl(constUtil.webMessageSend),
				title: '发私信',
				padding: 10,
				height: 250,
				width: 510,
				data: {sendid:sendid, uname:uname}
			}).showModal();
			return false;
		});
	};
	function _match(btn, url, title) {
		var date = $(btn).attr('date');
		var account = $(btn).attr('account');
		var param = '?account='+account+'&date='+date;
		dialog({
			url: constUtil.absUrl(url) + param,
			title: date + title,
			padding: 10,
			height: 400,
			width: 800,
			scrolling: 'yes'
			//data: {date:date, account:account}
		}).showModal();
	}
	layer.showTradeDialog = function() {//成交与委托记录弹出层
		$('#settlement_list').delegate('a[name=btn_trade]', 'click', function() {
			_match(this, constUtil.webMatchTrades, '成交记录');
			return false;
		}).delegate('a[name=btn_order]', 'click', function() {
			_match(this, constUtil.webMatchOrders, '委托记录');
			return false;
		});
	};
	function _trans(btn, url, title) {
		var date = $(btn).attr('date');
		var account = $(btn).attr('account');
		var param = '?account='+account;
		dialog({
			url: constUtil.absUrl(url) + param,
			title: title,
			padding: 10,
			height: 400,
			width: 1000,
			scrolling: 'yes'
			//data: {date:date, account:account}
		}).showModal();
	}
	layer.showMatchTransDialog = function() {//赛事普通与乐透弹出层
		$('#rank_more').delegate('a[name=lotto_more]', 'click', function() {
			_trans(this, constUtil.webMatchLotto, '乐透期权历史记录');
			return false;
		}).delegate('a[name=normal_more]', 'click', function() {
			_trans(this, constUtil.webMatchNormal, '普通期权历史记录');
			return false;
		});
	};
	return layer;
});