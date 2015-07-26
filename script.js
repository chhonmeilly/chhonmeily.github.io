/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(window).ready(function(){
	$('#carousel-example-generic, #carousel-example-generic-1').carousel();
	$("#middle-text").fadeOut();
	$('.passion').fadeOut();
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$("#middle-text").fadeIn("slow");
			$('.passion').fadeIn("slow");
		}
	});
});
	

