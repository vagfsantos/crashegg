$(document).ready(function(){

	function scrollMenu(){
		$('nav.egg-menu ul li a').on('click', function(){
			var selectID = $(this).attr('href');
			
			$('html, body').animate({
				scrollTop: $(selectID).offset().top
			}, 1000);
			
			return false;
		});
	}

	scrollMenu();


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