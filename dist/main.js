"use strict";!function(){function n(){$("#description").addClass("fixed").removeClass("absolute"),$("#navegation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")}function t(){$("#description").removeClass("fixed").addClass("absolute"),$("#navegation").slideDown("fast"),$("#sticky-navigation").slideUp("fast")}function i(n){console.log(n.fomrObject()),$.ajax({url:n.attr("action"),method:"POST",data:form.fomrObject(),dataType:"json"})}function e(){var n=$("#description"),t=n.height();return $(window).scrollTop()>$(window).height()-2*t}var s=!1,a=0,o=$("[data-name='img-counter']").attr("content");$("#contact_form").on("submit",function(n){return n.preventDefault(),i($(this)),!1}),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),setInterval(function(){a<o?a++:a=0,$("#gallery .inner").css({left:"-"+100*a+"%"})},4e3),$(window).scroll(function(){var i=e();i&&!s&&(s=!0,n()),!i&&s&&(s=!1,t())})}();