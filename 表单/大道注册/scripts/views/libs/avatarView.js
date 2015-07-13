define([
	'jquery',
	'constUtil',
	'jqueryAjaxfileupload',
	'jcrop',
	'avatarCutter'
], function($, constUtil) {
	var avatar = {};
	//获取文件大小
	function getFileSize(fileId) {
		var byteSize = 0;
		//console.log($("#" + fileName).val());
		if($("#" + fileId)[0].files) {
			byteSize  = $("#" + fileId)[0].files[0].size;
		}
		//else {
			//var file = document.getElementById(fileName);
			//var img = new Image();
			//file.select();
			//alert(document.selection.createRange().text);
			//img.src = file.value;
			//img.style.display="none";
			//alert(img.readyState);return 0;
			//if(img.readyState=="complete"){//已经load完毕，直接打印文件大小
			//	alert(img.fileSize);//ie获取文件大小
			//}else {
			//	img.onreadystatechange=function(){
			//		if(img.readyState=='complete')//当图片load完毕
			//			alert(img.fileSize);//ie获取文件大小
			//	}
			//}
			//byteSize = img.fileSize;
			//byteSize = img.fileSize;
		//}
		byteSize = Math.ceil(byteSize / 1024); //KB
		return byteSize;//KB
	}
	function ajaxFileUpload(btn, fileId, url, purviews) { //根据传入的键值对 组成新URL
		constUtil.showAjaxLoading(btn);
		$.ajaxFileUpload({
					url: url, //用于文件上传的服务器端请求地址
                    secureuri: false, //一般设置为false
                    fileElementId: fileId, //文件上传空间的id属性  <input type="file" id="file" name="file" />
                    dataType: 'json', //返回值类型 一般设置为json
                    success: function (data, status)  //服务器成功响应处理函数
                    {
						constUtil.stopAjaxLoading();
						//var json = eval('(' + data + ')');
                        //alert(data);
                        $("#picture_original>img").attr({src: data.src, width: data.width, height: data.height});
						$('#imgsrc').val(data.path);
						//alert(data.msg);

						//同时启动裁剪操作，触发裁剪框显示，让用户选择图片区域
						var cutter = new jQuery.UtrialAvatarCutter({
								//主图片所在容器ID
								content : "picture_original",
								//缩略图配置,ID:所在容器ID;width,height:缩略图大小
								purviews : purviews,
								//选择器默认大小
								selector : {width:200,height:200},
								showCoords : function(c) { //当裁剪框变动时，将左上角相对图片的X坐标与Y坐标 宽度以及高度
									$("#x1").val(c.x);
									$("#y1").val(c.y);
									$("#cw").val(c.w);
									$("#ch").val(c.h);
								},
								cropattrs : {boxWidth: 350, boxHeight: 350}
							}
						);
                        cutter.reload(data.src);
						$(btn).hide();
						$('#btnCrop').show();
					},
                    error: function (data, status, e)//服务器响应失败处理函数
                    {
						constUtil.stopAjaxLoading();
                        alert(e);
                    }
		});
	}
	avatar.setCrop = function(url, params) { //设置裁剪按钮
		$('#btnCrop').click(function() {
			var btn = this;
			var file = $("#upAvatar").val();
			var datas = {x: $('#x1').val(), y: $('#y1').val(), w: $('#cw').val(), h: $('#ch').val(), src: $('#imgsrc').val(), uid:$('#hfUid').val()};
			if(params) {
				datas = $.extend(datas, params);
			}
			constUtil.showAjaxLoading(btn);
			$.getJSON(url, datas, function(data) {
				constUtil.stopAjaxLoading();
				alert(data.msg);
				if(constUtil.isJsonSuccess(data)) {
					location.reload();
				}
			});
			return false;
		});
	};
	avatar.setFileInput = function(fileId) {
		$(document).on('change', '#' + fileId, function() {
			$(this).siblings('span').html($(this).val());
			$(this).parent().siblings('a').show();
		});
	};
	avatar.setUpload = function(fileId, url, purviews) { //设置上传按钮
		$("#btnUpload").click(function () {
				var allowImgageType = ['jpg', 'jpeg', 'png', 'gif'];
				var file = $("#" + fileId).val();
				//alert(file.length);
				//alert(byteSize)
				//console.log($("#file1"));return;
				//获取后缀
                if (file.length > 0) {
					//获取大小
					var byteSize = getFileSize(fileId);
					if(byteSize > 2048) {
						alert("上传的附件文件不能超过2M");
						return false;
					}
					var pos = file.lastIndexOf(".");
					//截取点之后的字符串
					var ext = file.substring(pos + 1).toLowerCase();
					//console.log(ext);
					if($.inArray(ext, allowImgageType) != -1) {
						ajaxFileUpload(this, fileId, url, purviews);
					}else {
						alert("请选择jpg,jpeg,png,gif类型的图片");
					}
                } else {
                    alert("请选择jpg,jpeg,png,gif类型的图片");
                }
				return false;
        });
	};
	return avatar;
});