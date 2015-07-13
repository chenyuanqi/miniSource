({
    appDir: './',
    baseUrl: './',
	dir: '../optimize',
	optimizeCss: 'standard',
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		jquery: 'libs/jquery/jquery',
		jqueryMobile: 'libs/jquery/jquery.mobile',
		jqueryCookie: 'libs/jquery/jquery.cookie',
		jqueryScrollLoading: 'libs/jquery/jquery.scrollLoading',
		jqueryKinSlideshow: 'libs/jquery/jquery.KinSlideshow',
		jqueryMarquee: 'libs/jquery/jquery.marquee',
		jqueryEasing: 'libs/jquery/jquery.easing',
        jqueryIEMarquee: 'libs/jquery/jquery.ie.marquee',
		jqueryZclip: 'libs/zclip/jquery.zclip',
		jcrop: 'libs/jcrop/jquery.jcrop',
		avatarCutter: 'libs/jcrop/avatarCutter',
		jqueryQQFace: 'libs/qqFace/jquery.qqFace',
		jqueryInputTips: 'libs/jquery/jquery.inputTips',
		jqueryAjaxfileupload: 'libs/jquery/jquery.ajaxfileupload',
		jqueryMailAutoComplete: 'libs/jquery/jquery.mailAutoComplete',
		datepair: 'libs/datepair/jquery.datepair',
		timepicker: 'libs/datepair/jquery.timepicker',
		datepicker: 'libs/datepair/bootstrap-datepicker',
		mustache: 'libs/mustache/mustache',
		iscroll: 'libs/iscroll/iscroll',
		underscore: 'libs/underscore/underscore',
		kindeditor: 'libs/kindeditor/kindeditor',
		kindeditorZh: 'libs/kindeditor/lang/zh_CN',
		masonry: 'libs/masonry/jquery.masonry',
		jqueryMobileDialog: 'libs/dialog/dialog',
		camera: 'libs/camera/camera',
		spin: 'libs/spin/spin',
		md5: 'libs/md5/md5',
		echarts:'../../libs/echarts/echarts-original',//TODO
		'echarts/chart/bar' : '../../libs/echarts/echarts-original',
		'echarts/chart/line': '../../libs/echarts/echarts-original',
		artDialog: 'libs/artDialog/dialog',
		dialogPopup: 'libs/artDialog/popup',
		dialogConfig: 'libs/artDialog/dialog-config',
		dialogPlus: 'libs/artDialog/dialog-plus',
		dialogDrag: 'libs/artDialog/drag',
		purl: 'libs/purl/purl',
		umeditor: 'libs/umeditor/umeditor',
		umeditorConfig: 'libs/umeditor/umeditor.config',
		backbone: 'libs/backbone/backbone',
		enumUtil: 'util/enum',
		constUtil: 'util/const',
		stringUtil: 'util/string',
		pageUtil: 'util/page',
		objectUtil: 'util/object',
		regexUtil: 'util/regex',
		inputUtil: 'util/input',
		circleValidate: 'util/circleValidate',
		messageValidate: 'util/messageValidate',
		userValidate: 'util/userValidate',
		indexView: 'views/index/indexView',
		shortcutView: 'views/util/shortcutView',
		wapDialogView: 'views/libs/wapDialogView',
		dialogView: 'views/libs/dialogView',
		avatarView: 'views/libs/avatarView',
		pageView: 'views/util/pageView',
		scrollView: 'views/libs/scrollView',
		purlView: 'views/libs/purlView',
		userWebView: 'views/user/webView'
	},
    modules: [
		{name: 'app/user_register/main'}
    ],
	fileExclusionRegExp: /^(r|build|jasmine|optimize)\.{0,1}(js|bat){0,1}$/,
	shim: {
		'backbone': {
				//These script dependencies should be loaded before loading
				//backbone.js
				deps: ['underscore', 'jquery'],
				//Once loaded, use the global 'Backbone' as the
				//module value.
				exports: 'Backbone'
		},
		'underscore': {
            exports: '_'
		},
		// 'kindeditor': {
            // exports: 'KE'
		// },
		'kindeditorZh': {
            deps: ['kindeditor']
		},
		'jqueryCookie': {
				deps: ['jquery']
		},
		'jqueryEasing': {
            deps: ['jquery']
		},
		'jqueryAjaxfileupload': {
            deps: ['jquery']
		},
		'masonry': {
            deps: ['jquery']
		},
		'jqueryScrollLoading': {
				deps: ['jquery']
		},
		'jqueryKinSlideshow': {
				deps: ['jquery']
		},
		'jqueryMarquee': {
				deps: ['jquery']
		},
		'camera': {
            deps: ['jquery', 'jqueryMobile', 'jqueryEasing']
		},
        'jqueryIEMarquee': {
                deps: ['jquery']
        },
		'jqueryZclip': {
            deps: ['jquery']
		},
		'jcrop': {
            deps: ['jquery']
		},
		'avatarCutter': {
            deps: ['jquery', 'jcrop']
		},
		'jqueryQQFace': {
            deps: ['jquery']
		},
		'jqueryInputTips': {
            deps: ['jquery']
		},
		'purl': {
				deps: ['jquery']
		},
		'jqueryMobile': {
				deps: ['jquery']
		},
		'jqueryMobileDialog': {
				deps: ['jquery']
		},
		'artDialog': {  
			deps: ["jquery", "dialogPopup", "dialogConfig"]  
		},
		'dialogPlus': {  
			deps: ["artDialog"]  
		},
		'scrollView': {
			deps: ['jqueryScrollLoading']
		},
		'umeditor': {
			deps: ['jquery']
		},
		'umeditorConfig': {
			deps: ['umeditor']
		},
		'datepicker': {
			deps: ['jquery']
		},
		'jqueryMailAutoComplete': {
			deps: ['jquery']
		}
	}
})
