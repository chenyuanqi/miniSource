define([
  'userWebView',
  'shortcutView'
], function(register, shortcut) {
  var initialize = function() {
	  register.check();
	  register.setRegister();
	  shortcut.allNeed();
  };
  return { 
    initialize: initialize
  };
});
