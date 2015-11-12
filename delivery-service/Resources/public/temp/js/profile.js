var profile = (function(){
	"use strict";

	function validatePassword () {

		$('.change-password-form').submit(function(e){
			$('.change-password-form input[required]').each(function(){
				var allValue = $(this).val();
				if(allValue == '' || allValue == null) {
					$('.message-area .alert-danger').show();
					e.preventDefault();
				}
			});
		});

	}

	return {
		validatePassword: validatePassword
	};

})(); 

$(document).ready(function(){
	profile.validatePassword();
});