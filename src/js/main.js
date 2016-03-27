$(document).ready(function(){
	// Scroll navigation
	(function scrollMenu(){
		$('nav.egg-menu ul li a').on('click', function(){
			var selectID = $(this).attr('href');

			$('html, body').animate({
				scrollTop: $(selectID).offset().top
			}, 1000);

			return false;
		});
	})();

	// Pop up portfolio
	(function togglePopUp(){
		$('.egg-group-portfolio ul > li > a').on('click', function(){
			$(this).parent().find('.egg-fixed').addClass('active');
			return false;
		});
		$('.egg-close').on('click', function(){
			$('.egg-fixed').removeClass('active');
		});
	})();

	// slider maain
	(function makeSlider(){
		$('#egg-banner-main ul').bxSlider({
			'mode': 'fade',
			'randomStart': true,
			'pager': false,
			'controls': true
		});

		$('.egg-slider-portfolio').bxSlider({
			'mode': 'fade',
			'randomStart': true,
			'pager': false,
			'controls': true
		});

		$('.bx-prev').addClass('icon-arrow-left');
		$('.bx-next').addClass('icon-arrow-right');
	})();

	// calling wow.js
	wow = new WOW({
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       300,          // default
		mobile:       true,       // default
		live:         true        // default
   	});

   	wow.init();

});
