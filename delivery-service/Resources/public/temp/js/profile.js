var profile = (function(){
	"use strict";

	function validatePassword () {

		$('.change-password-form').submit(function(e){
			$('.change-password-form input[required]').each(function(){
				var allValue = $(this).val();
				var newPassWord = $('#inputNewPassword').val();
				var confirmPassWord = $('#inputPasswordAgain').val();
				if(allValue == '' || allValue == null) {
					$('.message-area .alert-danger').show();
					e.preventDefault();
				}else if ( newPassWord !== confirmPassWord ) {
					$('.message-area .alert-danger').empty().text("Please fill in your new password again.").show();
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