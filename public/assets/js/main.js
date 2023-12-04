!(function ($) {
	"use strict";
	// Toggle .header-scrolled class to #header when page is scrolled
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#header').addClass('header-scrolled');
			$('#topbar').addClass('topbar-scrolled');
		} else {
			$('#header').removeClass('header-scrolled');
			$('#topbar').removeClass('topbar-scrolled');
		}
	});

	if ($(window).scrollTop() > 100) {
		$('#header').addClass('header-scrolled');
		$('#topbar').addClass('topbar-scrolled');
	}
	
	/**
   * Fires the scrollto function on click to links .scrollto
   */
	 let selectScrollto = document.querySelectorAll('.scrollto');
	 selectScrollto.forEach(el => el.addEventListener('click', function(event) {
	   if (document.querySelector(this.hash)) {
		 event.preventDefault();
   
		 let mobileNavActive = document.querySelector('.mobile-nav-active');
		 if (mobileNavActive) {
		   mobileNavActive.classList.remove('mobile-nav-active');
   
		   let navbarToggle = document.querySelector('.mobile-nav-toggle');
		   navbarToggle.classList.toggle('bi-list');
		   navbarToggle.classList.toggle('bi-x');
		 }
		 scrollto(this.hash);
	   }
	 }));
   
	 /**
	  * Scroll with ofset on page load with hash links in the url
	  */
	 window.addEventListener('load', () => {
	   if (window.location.hash) {
		 if (document.querySelector(window.location.hash)) {
		   scrollto(window.location.hash);
		 }
	   }
	 });
   
	 /**
	  * Mobile nav toggle
	  */
	 const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
	 if (mobileNavToogle) {
	   mobileNavToogle.addEventListener('click', function(event) {
		 event.preventDefault();
   
		 document.querySelector('body').classList.toggle('mobile-nav-active');
   
		 this.classList.toggle('bi-list');
		 this.classList.toggle('bi-x');
	   });
	 }
   
	 /**
	  * Toggle mobile nav dropdowns
	  */
	 const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
   
	 navDropdowns.forEach(el => {
	   el.addEventListener('click', function(event) {
		 if (document.querySelector('.mobile-nav-active')) {
		   event.preventDefault();
		   this.classList.toggle('active');
		   this.nextElementSibling.classList.toggle('dropdown-active');
   
		   let dropDownIndicator = this.querySelector('.dropdown-indicator');
		   dropDownIndicator.classList.toggle('bi-chevron-up');
		   dropDownIndicator.classList.toggle('bi-chevron-down');
		 }
	   })
	 });
   


	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});

	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});

})

(jQuery);
(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function () {
		$('.featured-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 30,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 5,
			navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 2
				},
				1000: {
					items: 5
				}
			}
		});

	};
	carousel();

})(jQuery);

