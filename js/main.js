$(document).ready(function() {
	// Burger
    
    $('.jsDropMenu').click(function() {
    	$(this).toggleClass('active');
    	$('#myDropdown').toggleClass('show');
    });
     // Validation 
      $('.jsValidate').feelform({
      	validateOnTheFly: true,
		clearAfterSubmit: true,
		notificationType: 'message',
		errorMessages: {
			email: function() {return "please enter a valide email.";}
		}
	});

    // WOW
    new WOW().init();
    ///wwww
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dotsEach:true,
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
  });
});