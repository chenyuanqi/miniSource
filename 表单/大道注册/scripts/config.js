// Author: Pwstrick <pwstrick@163.com>
// Filename: config.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
var require = {
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    jquery: '../../libs/jquery/jquery',
    jqueryCookie: '../../libs/jquery/jquery.cookie',
	jqueryMobile: '../../libs/jquery/jquery.mobile',
	jqueryEasing: '../../libs/jquery/jquery.easing',
    jqueryScrollLoading: '../../libs/jquery/jquery.scrollLoading',
	jqueryKinSlideshow: '../../libs/jquery/jquery.KinSlideshow',
	jqueryMarquee: '../../libs/jquery/jquery.marquee',
    jqueryIEMarquee: '../../libs/jquery/jquery.ie.marquee',
	jqueryZclip: '../../libs/zclip/jquery.zclip',
	jqueryQQFace: '../../libs/qqFace/jquery.qqFace',
	jqueryInputTips: '../../libs/jquery/jquery.inputTips',
	jqueryAjaxfileupload: '../../libs/jquery/jquery.ajaxfileupload',
	jqueryMailAutoComplete: '../../libs/jquery/jquery.mailAutoComplete',
	datepair: '../../libs/datepair/jquery.datepair',
	timepicker: '../../libs/datepair/jquery.timepicker',
	datepicker: '../../libs/datepair/bootstrap-datepicker',
	jcrop: '../../libs/jcrop/jquery.jcrop',
	avatarCutter: '../../libs/jcrop/avatarCutter',
	purl: '../../libs/purl/purl',
	umeditor: '../../libs/umeditor/umeditor',
	umeditorConfig: '../../libs/umeditor/umeditor.config',
	mustache: '../../libs/mustache/mustache',
	backbone: '../../libs/backbone/backbone',
	underscore: '../../libs/underscore/underscore',
	kindeditor: '../../libs/kindeditor/kindeditor',
	kindeditorZh: '../../libs/kindeditor/lang/zh_CN',
	iscroll: '../../libs/iscroll/iscroll',
	masonry: '../../libs/masonry/jquery.masonry',
	camera: '../../libs/camera/camera',
	spin: '../../libs/spin/spin',
	md5: '../../libs/md5/md5',
	echarts:'../../libs/echarts/echarts-original',//TODO
	'echarts/chart/bar' : '../../libs/echarts/echarts-original',
    'echarts/chart/line': '../../libs/echarts/echarts-original',
    templates: '../../../templates',
    indexView: '../../views/index/indexView',
	scrollView: '../../views/libs/scrollView',
	purlView: '../../views/libs/purlView',
	dialogView: '../../views/libs/dialogView',
	avatarView: '../../views/libs/avatarView',
	shortcutView: '../../views/util/shortcutView',
	pageView: '../../views/util/pageView',
	jqueryMobileDialog: '../../libs/dialog/dialog',
	artDialog: '../../libs/artDialog/dialog',
	dialogPopup: '../../libs/artDialog/popup',
	dialogConfig: '../../libs/artDialog/dialog-config',
	dialogPlus: '../../libs/artDialog/dialog-plus',
	dialogDrag: '../../libs/artDialog/drag',
	enumUtil: '../../util/enum',
    constUtil: '../../util/const',
	stringUtil: '../../util/string',
	pageUtil: '../../util/page',
	objectUtil: '../../util/object',
	regexUtil: '../../util/regex',
	inputUtil: '../../util/input',
	circleValidate: '../../util/circleValidate',
	messageValidate: '../../util/messageValidate',
	userValidate: '../../util/userValidate',
	userWebView: '../../views/user/webView'
  },
  // packages: [
        // {
            // name: 'echarts',
            // location: '../../libs/echarts',      
            // main: 'echarts'
        // },
        // {
            // name: 'zrender',
            // location: '../../libs/zrender', // zrender与echarts在同一级目录
            // main: 'zrender'
        // }
  // ],
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
	'camera': {
            deps: ['jquery', 'jqueryMobile', 'jqueryEasing']
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
			deps: ['jquery', 'jqueryMobile']
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
};