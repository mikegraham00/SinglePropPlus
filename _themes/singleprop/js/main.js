




$(document).ready(function() {

	//mobile nav
	var toggler = $('.nav-toggle');
	var navwrap = $('.nav-items');
	toggler.on('click', function(){
		navwrap.toggleClass('open');
	});

	$('.nav-items a').on('click', function(){
		navwrap.removeClass('open');
	});

	var detToggler = $('.details-toggle');
	var detSection = $('.additional-details .inner');
	detToggler.on('click', function(e){
		e.preventDefault();
		detSection.toggleClass('open');
	});

	//contact form
	var contClose = $('.contact-close');
	var contWrap = $('.contact-wrap');
	var contOpen = $('.contact-open');
	
	contOpen.on('click', function(e){
		e.preventDefault();
		contWrap.addClass('open');
	});
	contClose.on('click', function(){
		contWrap.removeClass('open');
	});

	//google map interaction
	var mapHolder = $('.location');
	mapHolder.mouseover(function(){
		$('.section.location iframe').css('pointer-events', 'auto');
	});
	mapHolder.mouseleave(function() {
	  $('.section.location iframe').css("pointer-events", "none"); 
	});

	//accordion tabs
	$('.accordion-tabs-minimal').each(function() {
	    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open');
	  });
	  $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
	    if (!$(this).hasClass('is-active')) {
	      event.preventDefault();
	      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
	      accordionTabs.find('.is-open').removeClass('is-open');

	      $(this).next().toggleClass('is-open');
	      accordionTabs.find('.is-active').removeClass('is-active');
	      $(this).addClass('is-active');
	    } else {
	      event.preventDefault();
	    }
  	});

});

//smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 80
        }, 1000);
        return false;
      }
    }
  });
});

$(function() {
	$('.gallery-wrap').slick({
		adaptiveHeight: true,
	    centerMode: true,
	    variableWidth: true,
        speed: 1000,
        easing: 'swing',
        prevArrow: '<div class="slider-nav slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slider-nav slick-next"><i class="fa fa-chevron-right"></i></div>',
        dots: true,
        lazyLoad: 'progressive'
	});
	
});

//style video iframe

$(function(){
	$('.video iframe').contents().find('.title').hide();
});
