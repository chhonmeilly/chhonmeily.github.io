$(document).ready(function(){
	$('#carousel-top, #carousel-example-generic-1').carousel();
	$('.search-box').hide();
	$('.search-icon').on('click', function(e){
		e.preventDefault();
		$('.search-box').toggle(function(){
			$('.search-box input[type="text"]').focus();
		});
		$('#top-content-home').toggleClass('animate-down');
	});
	$(window).on('scroll', function(){
		if($(window).scrollTop() >= 50){
			$('.header').addClass('navbar-fixed-top');
			$('.header').fadeIn('slow').css({"box-shadow":"0px 5px 20px rgba(0,0,0,0.2)"})
			$('.top-header-bar').hide();
		}else{
			$('.header').removeClass('navbar-fixed-top');
			$('.top-header-bar').show();
		}
	});
	$('#carousel-top .carousel-inner').swiperight(function(){
		$(this).parent().carousel('prev');
	});
	$('#carousel-top .carousel-inner').swipeleft(function(){
		$(this).parent().carousel('next');
	});
});


