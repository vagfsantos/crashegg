$(document).ready(function(){

	(function scrollMenu(){
		$('nav.egg-menu ul li a').on('click', function(){
			var selectID = $(this).attr('href');

			$('html, body').animate({
				scrollTop: $(selectID).offset().top
			}, 1000);

			return false;
		});
	})();

	(function togglePopUp(){
		$('.egg-group-portfolio ul > li > a').on('click', function(){
			$(this).parent().find('.egg-fixed').addClass('active').fadeIn(700);
			return false;
		});
		$('.egg-close').on('click', function(){
			$('.egg-fixed').fadeOut(700);
		});
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
