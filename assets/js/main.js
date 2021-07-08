/*
Author       : Deepak
Template Name: SAFFOLA
Version      : 1.0
*/

(function($) {
	'use strict';
	
	jQuery(document).ready(function(){
	
		/* PRELOADER JS*/
			$(window).load(function() { 
				$('.loader_wrap').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/* END PRELOADER JS*/
	
		/* START MENU JS */
			$('a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

	
			// $(window).scroll(function() {
			//   if ($(this).scrollTop() >0) {
			// 	$('.menu-top').addClass('menu-shrink');
			//   } else {
			// 	$('.menu-top').removeClass('menu-shrink');
			//   }
			// });
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/* END MENU JS */
	
		/* START STICKY MENU JS */
			$('a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

	
			// $(window).scroll(function() {
			//   if ($(this).scrollTop() > 100) {
			// 	$('.menu-top').addClass('sticky_menu');
			//   } else {
			// 	$('.menu-top').removeClass('sticky_menu');
			//   }
			// });
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/* END STICKY MENU JS */
		
		/* START SCROLL TO */
			$(window).on('scroll',function(){
			if($(this).scrollTop() > 1000){
				$('.scroll_top').removeClass('not-visible');
			}
			else{
				$('.scroll_top').addClass('not-visible');
			}
			});
			$('.scroll_top').on('click',function (event){
				$('html,body').animate({
					scrollTop:0
				},200);
			});
		/* END SCROLL TO */
		
		/* START MAIN-SLIDER JS */
			// Main slider
			$('.slider_active').owlCarousel({
				loop:true,
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				smartSpeed:450,
				autoplay:true,
				autoplayTimeout:6000,
				mouseDrag:false,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})	
		/* END MAIN-SLIDER JS */
		
		/*START MIXITUP JS*/
		
			$('.portfolio_item_area').mixItUp();
				
		/*END MIXITUP JS*/
		
		/* START LIGHTBOX */
		
			lightbox.option({
			  'resizeDuration': 200,
			  'wrapAround': true
			});
		
		/* END LIGHTBOX JS */
		
		/* START SCROLL-TOP JS */
		
			$(window).scroll(function () {
				if ($(this).scrollTop() > 200) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			});
			
			$('.scrollup').click(function () {
				$("html, body").animate({
					scrollTop:0
				},600);
				return false;
			});		
		
		/* START SCROLL-TOP JS */
		
		/*START COUNDOWN JS*/
			$('#counterup').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 3000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
		/*END COUNDOWN JS */


		
		/* START TESTIMONIAL JS */
			 $("#testimonial-slider").owlCarousel({
				autoplay : true,
				nav:true,
				navText: false,
				dots: true,
				items:2,
				pagination: true,
				autoPlay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					1000:{
						items:2
					}
				}
			});
	}); 
		/* END TESTIMONIAL JS */


 
 		// 
// hide all contents accept from the first div
 $('.tabContent .divtext:not(:first)').toggle();

    // hide the previous button
    $('.previous').hide();

    $('.tabs li').click(function () {

    	if ($(this).is(':last-child')) {
    		$('.next').hide();
    	} else {
    		$('.next').show();
    	}

    	if ($(this).is(':first-child')) {
    		$('.previous').hide();
    	} else {
    		$('.previous').show();
    	}

    	var position = $(this).position();
    	var corresponding = $(this).data("id");

        // scroll to clicked tab with a little gap left to show previous tabs
        scroll = $('.tabs').scrollLeft();
        $('.tabs').animate({
        	'scrollLeft': scroll + position.left - 30
        }, 200);

        // hide all content divs
        $('.tabContent .divtext').hide();

        // show content of corresponding tab
        $('div.' + corresponding).toggle();

        // remove active class from currently not active tabs
        $('.tabs li').removeClass('active');

        // add active class to clicked tab
        $(this).addClass('active');
    });

    $('div a').click(function(e){
    	e.preventDefault();
    	$('li.active').next('li').trigger('click');
    });
    $('.next').click(function(e){
    	e.preventDefault();
    	$('li.active').next('li').trigger('click');
    });
    $('.previous').click(function(e){
    	e.preventDefault();
    	$('li.active').prev('li').trigger('click');
    });


    // onclick
    $(".ribtn-1").click(function() {
    	$('.ri-2').css('display','block');
    	$('.ri-1').css('opacity','0');
    });
    $(".ribtn-2").click(function() {
    	$('.ri-2').css('display','none');
    	$('.ri-1').css('opacity','1');
    });

    $(".ribtn-11").click(function() {
    	$('.ri-21').css('display','block');
    	$('.ri-11').css('opacity','0');
    });
    $(".ribtn-21").click(function() {
    	$('.ri-21').css('display','none');
    	$('.ri-11').css('opacity','1');
    });

    $(".ribtn-12").click(function() {
    	$('.ri-22').css('display','block');
    	$('.ri-12').css('opacity','0');
    });
    $(".ribtn-22").click(function() {
    	$('.ri-22').css('display','none');
    	$('.ri-12').css('opacity','1');
    });

    $(".vn_click").click(function() {
    	 $("#vn-info").slideToggle(1000);
    });
		$(".vn_click1").click(function() {
    	 $("#vn-info1").slideToggle(1000);
    });

document.getElementById('menu-toggle').addEventListener(
  'click',
  function() {
    this.classList.toggle('menu-toggle-active');

    var element = document.getElementById("navbar-default-f");
   element.classList.toggle("navbar-default-full");

  }
);



		
	/*  Stellar for background scrolling  */
		(function () {

			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			 
			} else {
				$(window).stellar({
					horizontalScrolling: false,
					responsive: true
				});
			}

		}());
	/* End Stellar for background scrolling  */		
	
	/* Youtube Video  */		
	
	$('#player').mb_YTPlayer();
		
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
})(jQuery);