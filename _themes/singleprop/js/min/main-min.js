$(document).ready(function(){var e=$(".nav-toggle"),i=$(".nav-items");e.on("click",function(){i.toggleClass("open")}),$(".nav-items a").on("click",function(){i.removeClass("open")});var n=$(".details-toggle"),a=$(".additional-details .inner");n.on("click",function(e){e.preventDefault(),a.toggleClass("open")});var t=$(".contact-close"),s=$(".contact-wrap"),o=$(".contact-open");o.on("click",function(e){e.preventDefault(),s.addClass("open")}),t.on("click",function(){s.removeClass("open")});var c=$(".location");c.mouseover(function(){$(".section.location iframe").css("pointer-events","auto")}),c.mouseleave(function(){$(".section.location iframe").css("pointer-events","none")}),$(".accordion-tabs-minimal").each(function(){$(this).children("li").first().children("a").addClass("is-active").next().addClass("is-open")}),$(".accordion-tabs-minimal").on("click","li > a.tab-link",function(e){if($(this).hasClass("is-active"))e.preventDefault();else{e.preventDefault();var i=$(this).closest(".accordion-tabs-minimal");i.find(".is-open").removeClass("is-open"),$(this).next().toggleClass("is-open"),i.find(".is-active").removeClass("is-active"),$(this).addClass("is-active")}})}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top-80},1e3),!1}})}),$(function(){$(".gallery-wrap").slick({adaptiveHeight:!0,centerMode:!0,variableWidth:!0,speed:1e3,easing:"swing",prevArrow:'<div class="slider-nav slick-prev"><i class="fa fa-chevron-left"></i></div>',nextArrow:'<div class="slider-nav slick-next"><i class="fa fa-chevron-right"></i></div>',dots:!0,lazyLoad:"progressive"})}),$(function(){$(".video iframe").contents().find(".title").hide()});