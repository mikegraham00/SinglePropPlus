$(window).on("scroll",function(){0===$(window).scrollTop()?$("body").removeClass("scrolled"):$("body").addClass("scrolled")}),$(document).ready(function(){var e=$(".nav-toggle"),n=$(".nav-items");e.on("click",function(){n.toggleClass("open")}),$(".nav-items a").on("click",function(){n.removeClass("open")});var i=$(".details-toggle"),a=$(".additional-details .inner");i.on("click",function(e){e.preventDefault(),a.toggleClass("open")});var o=$(".contact-close"),t=$(".contact-wrap");$(".contact-open").on("click",function(e){e.preventDefault(),t.addClass("open")}),o.on("click",function(){t.removeClass("open")});var s=$(".location");s.mouseover(function(){$(".section.location iframe").css("pointer-events","auto")}),s.mouseleave(function(){$(".section.location iframe").css("pointer-events","none")}),$(".accordion-tabs-minimal").each(function(){$(this).children("li").first().children("a").addClass("is-active").next().addClass("is-open")}),$(".accordion-tabs-minimal").on("click","li > a.tab-link",function(e){if($(this).hasClass("is-active"))e.preventDefault();else{e.preventDefault();var n=$(this).closest(".accordion-tabs-minimal");n.find(".is-open").removeClass("is-open"),$(this).next().toggleClass("is-open"),n.find(".is-active").removeClass("is-active"),$(this).addClass("is-active")}})}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top-80},1e3),!1}})}),$(function(){$(".gallery-wrap").slick({adaptiveHeight:!0,centerMode:!0,variableWidth:!0,speed:500,easing:"swing",prevArrow:'<div class="slider-nav slick-prev"><i class="fa fa-chevron-left"></i></div>',nextArrow:'<div class="slider-nav slick-next"><i class="fa fa-chevron-right"></i></div>',dots:!1,lazyLoad:"ondemand"})}),$(function(){$(".video iframe").contents().find(".title").hide()});