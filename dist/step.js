"use strict";!function(){function t(){if(e())i();else{var t=$(c).find(".input:invalid").first().parent();n(t)}}function e(){return document.querySelector(c).checkValidity()}function n(t){$(".step.active").removeClass("active"),t.addClass("active"),t.find(".input").focus();var e=2*t.index(".step")+1,n=$(".path-step:nth-child("+e+")");a(n)}function a(t){$(".path-step.active").removeClass("active"),t.addClass("active")}function i(){var t=$(c);$.ajax({url:t.attr("action"),method:"POST",data:t.formObject(),dataType:"json",success:function(){t.slideUp(),$("#info-contacto").html("Enviamos tu mensaje, pronto nos pondremos en contacto contigo")}})}var c="#contact-form";$(".step textarea").on("keydown",function(t){13==t.keyCode&&(t.preventDefault(),$(t.target).blur())}),$(".path-step").on("click",function(t){var e=$(t.target);a(e);var i=e.index(".path-step")+1,c=$(".step:nth-child("+i+")");n(c)}),$(c).find(".input").on("change",function(a){var i=$(a.target),c=i.parent().next(".step"),o=e();!o&&c.length>0?n(c):t()})}();