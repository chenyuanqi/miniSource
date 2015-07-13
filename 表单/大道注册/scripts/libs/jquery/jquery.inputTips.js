(function($) {  
        $.fn.inputTips = function(options) {  
            var defaults = {  
                defaultValue: "",  
                focusColor: "#000000",  
                blurColor: "#c2c2c2",  
                fontSize: "1em"  
            }
            var options = $.extend(defaults, options);  
            this.each(function() {  
                var thisSearch = $(this);  
                thisSearch.focus(function() {  
                    if (thisSearch.val() == options.defaultValue) {  
                        thisSearch.css("color", options.focusColor);  
                        thisSearch.val("");  
                    }  
                }).blur(function() {  
                if ( thisSearch.val() === undefined || thisSearch.val() == '') {  
                        thisSearch.css("color", options.blurColor);  
                        thisSearch.val(options.defaultValue);  
                    }  
                }).css({ "color": options.blurColor, "font-size": options.fontSize });  
                if (thisSearch.val() == 'undefined' || thisSearch.val() == "") {  
                    thisSearch.val(options.defaultValue);  
                } else if (thisSearch.val() != options.defaultValue) {  
                    thisSearch.css("color", options.focusColor);  
                }  
            });  
        };  
})(jQuery);  