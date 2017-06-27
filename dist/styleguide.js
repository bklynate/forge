!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],t);else{var n=t("object"==typeof exports?require(void 0):e.jQuery);for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";n(57),n(59),n(61),n(62),n(63),n(64)},32:function(t,n){t.exports=e},57:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var a=n(32),s=i(a),o=n(58),d=i(o),l=window.Modernizr,r=!1,u=null,c=(0,s["default"])(document),f=(0,s["default"])(".chrome"),p=null,h=(0,s["default"])("<a href='#' class='js-close-modal js-modal-generated modal-close-button -alt'>skip</a>"),m=(0,s["default"])("<a href='#' class='js-close-modal js-modal-generated modal-close-button'>&#215;</a>"),v=null,g=!1,y=function(){return null!==v},x=function(e,t,n){switch(t){case"skip":e.prepend(h),h.on("click",function(e){e.preventDefault(),(0,s["default"])(n).submit()}),g=!1;break;case"false":case"0":g=!1;break;case"closeButtonOnly":e.prepend(m),g=!1;break;default:e.prepend(m),g=!0}},b=function(e,t){if(t=t||{},t.animated="boolean"!=typeof t.animated||t.animated,t.closeButton="undefined"!=typeof t.closeButton?t.closeButton:e.attr("data-modal-close"),t.skipForm="undefined"!=typeof t.skipForm?t.skipForm:e.attr("data-modal-skip-form"),0===e.length)return!1;if(!r)return u={$el:e,options:t},!1;var n="-"+c.scrollTop()+"px";x(e,t.closeButton,t.skipForm),y()?(v.hide(),e.show()):(f.css("top",n),f.addClass("has-modal"),p.css("display","block"),t.animated&&l.cssanimations&&p.addClass("animated-open"),e.css("display","block")),setTimeout(function(){c.scrollTop(0)},50),d["default"].publish("Modal:Open",e),v=e},k=function(e){p.css("display","none"),p.removeClass("animated-close"),v&&(v.css("display","none"),v.find(".js-modal-generated").remove()),f.removeClass("has-modal"),f.removeClass("animated-close"),f.css("top",""),c.scrollTop(e),v=null},C=function(e){e=e||{},e.animated="undefined"==typeof e.animated||e.animated;var t=parseInt(f.css("top"))*-1;window.location.hash==="#"+v.attr("id")&&(window.location.hash="/"),e.animated&&l.cssanimations?(f.addClass("animated-close"),p.addClass("animated-close"),p.one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){k(t)})):k(t),d["default"].publish("Modal:Close",v)},w=function(e){e.preventDefault();var t=(0,s["default"])(this).data("modal-href");b((0,s["default"])(t))},j=function(e){e.target===this&&((0,s["default"])(this).hasClass("js-close-modal")||g)&&(e.preventDefault(),C())};c.ready(function(){var e=(0,s["default"])("body");p=(0,s["default"])("<div class='modal-container'></div>"),e.append(p),(0,s["default"])("[data-modal]").each(function(){(0,s["default"])(this).appendTo(p),(0,s["default"])(this).attr("hidden",!0)});var t=window.location.hash;t&&"#/"!==t&&(0,s["default"])(t)&&"undefined"!=typeof(0,s["default"])(t).data("modal")&&b((0,s["default"])(t)),r=!0,null!==u&&b(u.$el,u.options),e.on("click","[data-modal-href]",w),e.on("click",".modal-container",j),e.on("click",".js-close-modal",j)}),e.exports={isOpen:y,open:b,close:C,Events:d["default"]}},58:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={},i=-1,a=function(e,t){return!!n[e]&&(setTimeout(function(){for(var i=n[e],a=i?i.length:0;a--;)i[a].func(e,t)},0),!0)},s=function(e,t){n[e]||(n[e]=[]);var a=(++i).toString();return n[e].push({token:a,func:t}),a},o=function(e){for(var t in n)if(n[t])for(var i=0,a=n[t].length;i<a;i++)if(n[t][i].token===e)return n[t].splice(i,1),e;return!1};t["default"]={publish:a,subscribe:s,unsubscribe:o}},59:function(e,t,n){"use strict";var i=function(e){return e&&e.__esModule?e["default"]:e},a=i(n(32)),s=i(n(60)),o=[],d=function(e){var t=e.prop("tagName");return"INPUT"===t||"SELECT"===t||"TEXTAREA"===t},l=function(e,t){var n,i=a("label[for='"+e.attr("id")+"']"),o=i.find(".validation"),l=o.find(".validation__message"),r=i.height();return e.removeClass("has-success has-error has-warning shake"),l.removeClass("has-success has-error has-warning"),t.success===!0?(e.addClass("has-success"),l.addClass("has-success")):(e.addClass("has-error"),l.addClass("has-error"),d(e)&&e.addClass("shake"),s.publish("Validation:InlineError",i.attr("for"))),t.message&&l.text(t.message),t.suggestion&&(l.html(Drupal.t("Did you mean")+" "+t.suggestion.full+"? <a href='#' data-suggestion='"+t.suggestion.full+"'class='js-mailcheck-fix'>"+Drupal.t("Fix it!")+"</a>"),s.publish("Validation:Suggestion",t.suggestion.domain)),n=l.height(),n>r?i.css("height",n+"px"):i.css("height",""),o.addClass("is-showing-message"),a(".js-mailcheck-fix").on("click",function(e){e.preventDefault();var t=a("#"+a(this).closest("label").attr("for"));t.val(a(this).data("suggestion")),t.trigger("blur"),s.publish("Validation:SuggestionUsed",a(this).text())}),e.on("focus",function(){e.removeClass("has-warning has-error has-success shake"),o.removeClass("is-showing-message"),i.css("height","")}),t.success},r=function(e){var t=function(t,n,i){return e.apply(this,arguments)};return t.toString=function(){return e.toString()},t}(function(e,t,n){t="undefined"!=typeof t&&t,n="undefined"!=typeof n?n:function(e,t){l(e,t)};var i=e.data("validate"),s=e.data("validate-trigger");if(s&&r(a(s)),o[i])if(d(e)){var u=e.val();if(t||""!==u)if("match"===i){var c=a(e.data("validate-match")).val();o[i].fn(u,c,function(t){n(e,t)})}else o[i].fn(u,function(t){n(e,t)})}else if("match"===i){var f=a(e.data("validate-match"));o[i].fn(e,f,function(t){n(e,t)})}else o[i].fn(e,function(t){n(e,t)})}),u=function(e){if(0===e.find(".validation").length){var t=a("<div class='validation'></div>");t.append("<div class='validation__label'>"+e.html()+"</div>"),t.append("<div class='validation__message'></div>"),e.html(t)}},c=function(e){e.each(function(){var e=a(this);u(a("label[for='"+e.attr("id")+"']")),e.on("blur",function(t){t.preventDefault(),r(e)})})},f=function(e,t){if(o[e])throw"A validation function with that name has already been registered";o[e]=t},p=function(e,t){var n={fn:t};f(e,n)},h=function(e){var t=e.find(":submit");t.attr("disabled",!0),t.addClass("is-loading")},m=function(e){var t=e.find(":submit");t.attr("disabled",!1),t.removeClass("is-loading is-disabled")};a("body").on("submit","form",function(e,t){var n=a(this),i=n.find("[data-validate]");if(h(n),i=i.map(function(){var e=a(this);if("undefined"!=typeof e.attr("data-validate-required")||""!==e.val())return e}),0===i.length)return!0;if(t===!0)return!0;e.preventDefault();var o=0,d=0,u=!1;return i.each(function(){r(a(this),!0,function(e,t){o++,l(e,t),t.success&&d++,u||t.success!==!1||(u=!0,a("html,body").animate({scrollTop:e.offset().top-32},200)),o===i.length&&(d===i.length?(s.publish("Validation:Submitted",n.attr("id")),n.trigger("submit",!0)):(s.publish("Validation:SubmitError",n.attr("id")),m(n)))})}),!1}),p("match",function(e,t,n){return n(e===t&&""!==e?{success:!0,message:Drupal.t("Looks good!")}:{success:!1,message:Drupal.t("That doesn't match.")})}),a(function(){c(a("body").find("[data-validate]"))}),e.exports={prepareFields:c,registerValidation:f,registerValidationFunction:p,validateField:r,showValidationMessage:l,Validations:o,Events:s}},60:function(e,t){"use strict";var n={},i=-1,a=function(e,t){return!!n[e]&&(setTimeout(function(){for(var i=n[e],a=i?i.length:0;a--;)i[a].func(e,t)},0),!0)},s=function(e,t){n[e]||(n[e]=[]);var a=(++i).toString();return n[e].push({token:a,func:t}),a},o=function(e){for(var t in n)if(n[t])for(var i=0,a=n[t].length;i<a;i++)if(n[t][i].token===e)return n[t].splice(i,1),e;return!1};e.exports={publish:a,subscribe:s,unsubscribe:o}},61:function(e,t,n){var i,a,s;!function(o){a=[n(32)],i=o,s="function"==typeof i?i.apply(t,a):i,!(void 0!==s&&(e.exports=s))}(function(e){function t(e,t,n){var i=e+":",a=document.createElement("test"),s=a.style;return n?s.cssText=i+t:s.cssText=i+["-webkit-","-moz-","-ms-","-o-",""].join(t+";"+i)+t+";",s[e].indexOf(t)!==-1}function n(e){return parseInt(e,10)||0}var i=window,a=0,s={classes:{plugin:"fixedsticky",active:"fixedsticky-on",inactive:"fixedsticky-off",clone:"fixedsticky-dummy",withoutFixedFixed:"fixedsticky-withoutfixedfixed"},keys:{offset:"fixedStickyOffset",position:"fixedStickyPosition",id:"fixedStickyId"},tests:{sticky:t("position","sticky"),fixed:t("position","fixed",!0)},getScrollTop:function(){var e="pageYOffset",t="scrollTop";return i?e in i?i[e]:i.document.documentElement[t]:i.document.body[t]},bypass:function(){return s.tests.sticky&&!s.optOut||!s.tests.fixed||i.FixedFixed&&!e(i.document.documentElement).hasClass("fixed-supported")},update:function(t){function i(){var e=f+d;return c<e&&e+u<=y+x}function a(){return c+(u||0)>f+m-l&&f+m-l>=y+(u||0)}if(t.offsetWidth){var o,d,l,r=e(t),u=r.outerHeight(),c=r.data(s.keys.offset),f=s.getScrollTop(),p=r.is("."+s.classes.active),h=function(e){r[e?"addClass":"removeClass"](s.classes.active)[e?"removeClass":"addClass"](s.classes.inactive)},m=e(window).height(),v=r.data(s.keys.position),g=r.parent(),y=g.offset().top,x=g.outerHeight();void 0===c&&(c=r.offset().top,r.data(s.keys.offset,c),r.after(e("<div>").addClass(s.classes.clone).height(u))),v||(o="auto"!==r.css("top")||"auto"!==r.css("bottom"),o||r.css("position","fixed"),v={top:"auto"!==r.css("top"),bottom:"auto"!==r.css("bottom")},o||r.css("position",""),r.data(s.keys.position,v)),d=n(r.css("top")),l=n(r.css("bottom")),v.top&&i()||v.bottom&&a()?p||h(!0):p&&h(!1)}},destroy:function(t){var n=e(t);return s.bypass()?n:n.each(function(){var t=e(this),n=t.data(s.keys.id);e(i).unbind(".fixedsticky"+n),t.removeData([s.keys.offset,s.keys.position,s.keys.id]).removeClass(s.classes.active).removeClass(s.classes.inactive).next("."+s.classes.clone).remove()})},init:function(t){var n=e(t);return s.bypass()?n:n.each(function(){var t=this,o=a++;e(this).data(s.keys.id,o),e(i).bind("scroll.fixedsticky"+o,function(){s.update(t)}).trigger("scroll.fixedsticky"+o),e(i).bind("resize.fixedsticky"+o,function(){n.is("."+s.classes.active)&&s.update(t)})})}};i.FixedSticky=s,e.fn.fixedsticky=function(e){if("function"==typeof s[e])return s[e].call(s,this);if("object"!=typeof e&&e)throw new Error("Method `"+e+"` does not exist on jQuery.fixedsticky");return s.init.call(s,this)},i.FixedFixed||e(i.document.documentElement).addClass(s.classes.withoutFixedFixed)})},62:function(e,t){},63:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var a=n(32),s=i(a);(function(){function e(){var e,t,i,a,s,o,d,l,r,u,c;i=new RegExp("(\\:"+n.join("|\\:")+")","g");try{for(u=document.styleSheets,d=0,l=u.length;d<l;d++)if(o=u[d],o.href.indexOf(document.domain)>=0)for(t=[],c=o.cssRules,e=0,r=c.length;e<r;e++)s=c[e],s.type===CSSRule.STYLE_RULE&&i.test(s.selectorText)&&(a=function(e,t){return e.replace(/\:/g,".pseudo-class-")},this.insertRule(s.cssText.replace(i,a))),i.lastIndex=0}catch(f){}}function t(e,t){return e.indexOf(t)!==-1}var n;n=["hover","enabled","disabled","active","visited","focus","target","checked","empty","first-of-type","last-of-type","first-child","last-child"],e.prototype.insertRule=function(e){var t,n;return t=document.getElementsByTagName("head")[0],n=document.createElement("style"),n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n)},new e,(0,s["default"])(document).ready(function(){(0,s["default"])(".styleguide-example").each(function(){var e=(0,s["default"])(this).find(".styleguide-html"),t=(0,s["default"])("<p class='styleguide-markuplink'><a href='#'>Show Markup</a></p>");t.on("click",function(t){t.preventDefault(),e.slideToggle(),(0,s["default"])(this).fadeOut()}),e.length&&(e.hide(),(0,s["default"])(this).append(t))})}),(0,s["default"])(document).ready(function(){(0,s["default"])(".js-styleguide-animation-preview").on("click",function(e){e.preventDefault();var t=(0,s["default"])(this).attr("data-class");(0,s["default"])(this).toggleClass(t),(0,s["default"])(this).one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){(0,s["default"])(this).removeClass(t)})})}),(0,s["default"])(document).ready(function(){(0,s["default"])(".js-styleguide-navigation").addClass("is-hidden"),(0,s["default"])(".js-styleguide-navigation-toggle").on("click",function(e){e.preventDefault(),(0,s["default"])(".js-styleguide-navigation").toggleClass("is-hidden")})}),(0,s["default"])(document).ready(function(){function e(){var e=(0,s["default"])(".js-styleguide-navigation li"),t=e.filter(".is-expanded:not(.is-hidden)").first(),n=t.find(".is-expanded:not(.is-hidden)");n.length&&(t=n),t.find("a").first().trigger("click")}(0,s["default"])(document).on("keydown",function(e){e.target===document.body&&84===e.keyCode&&(e.preventDefault(),(0,s["default"])(".js-styleguide-filter").focus())}),(0,s["default"])(".js-styleguide-filter").on("keydown",function(t){13===t.keyCode&&(t.preventDefault(),e())}),(0,s["default"])(".js-styleguide-filter").on("input",function(){var e=(0,s["default"])(this).val().toLowerCase(),n=(0,s["default"])(".js-styleguide-navigation li");return""===e?void n.removeClass("is-expanded").removeClass("is-hidden"):void n.each(function(){var n=(0,s["default"])(this).text().toLowerCase();t(n,e)?((0,s["default"])(this).addClass("is-expanded"),(0,s["default"])(this).removeClass("is-hidden")):(0,s["default"])(this).addClass("is-hidden")})})})}).call(void 0)},64:function(e,t){"use strict";!function(e){function t(e){var t=e.find(".js-color-label"),i=e.data("hex"),a=n(i);t.text()===i?t.text("rgb("+a.r+", "+a.g+", "+a.b+")"):t.text(i)}function n(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(e,t,n,i){return t+t+n+n+i+i});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}e(document).ready(function(){e(".color-tile").each(function(){e(this).css("background-color",e(this).data("hex")),t(e(this))}),e(".color-tile").on("dblclick",function(n){n.preventDefault(),e(".color-tile").each(function(){t(e(this))})})})}(jQuery)}})});