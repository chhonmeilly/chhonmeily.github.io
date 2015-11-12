(function($){

	var deliveryRequest = {

		init: function() {

			deliveryRequest.validateForm();
			deliveryRequest.formInteraction();
		
		},

		validateForm: function() {

			$('.alert').hide();
			
			$('#information-form').submit(function(){
				
				var error = 0;
				var senderCity = $('.sender-city option:selected').val();
				var receiverCity = $('.receiver-city option:selected').val();
				var itemToDeliver = $('.items-to-deliver option:selected').val();
				var itemWeight = $('.items-weight option:selected').val();
				var transportMethod = $('.transport-method option:selected').val();
				var deliverDate = $('.deliver-date option:selected').val();
				var deliverPrice = $('.deliver-price option:selected').val();
				var uploadFile = $('.upload-file').val();
				var showAlert = $('.information .alert-danger').show();
				
				if(
					senderCity == '' 
					&& receiverCity == '' 
					&& itemToDeliver == '' 
					&& itemWeight == '' 
					&& transportMethod == '' 
					&& deliverDate == '' 
					&& deliverPrice == '' 
					|| uploadFile == ''
				) {
					showAlert;
					error = 1;
				}
				
				if (error == 0) {
					return true;
				} else {
					return false;
				}

			});

			$('.add-new-address').submit(function(){
				
				var error = 0;
				var newCity = $('.add-new-address .select-city option:selected').val();
				var newAddress = $('.add-new-address .select-district option:selected').val();
				var locationName = $('#input-location').val();
				var inputAddress = $('#input-address').val();
				var inputNumber = $('#input-phone-number').val();
				var showAlert = $('.add-new-address .alert-danger').show();

				if(
					newCity == '' 
					&& newAddress == '' 
					|| locationName == '' 
					&& inputAddress == '' 
					&& inputNumber == ''
				) {
					showAlert;
					error = 1;
				}

				if(error == 0) {
					return true;
				} else {
					return false;
				}

			});

			$('.add-new-destination').submit(function(){
				
				var error = 0;
				var newCity = $('.add-new-destination .select-city option:selected').val();
				var newAddress = $('.add-new-destination .select-district option:selected').val();
				var locationName = $('.add-new-destination #input-location').val();
				var inputAddress = $('.add-new-destination #input-address').val();
				var inputNumber = $('.add-new-destination #input-phone-number').val();
				var showAlert = $('.add-new-destination .alert-danger').show();

				if(
					newCity == '' 
					&& newAddress == '' 
					|| locationName == '' 
					&& inputAddress == '' 
					&& inputNumber == ''
				) {
					showAlert;
					error = 1;
				}

				if(error == 0) {
					return true;
				} else {
					return false;
				}

			});


		
		},

		formInteraction: function() {
			
			$('.btn-add-new-address').click(function(){
				$('#add-new-address-modal').modal('toggle');
				$('#add-new-address-modal').css({'padding-right':'0'});
				$('.add-new-address').show();
			});

			$('.upload-file').change(function(){

				if (typeof (FileReader) != "undefined") {
 
					var imageHolder = $(this).siblings(".btn-upload");
					console.log(imageHolder);
					imageHolder.empty();
		 
					var reader = new FileReader();
					console.log(reader);
					reader.onload = function (e) {
						$("<img />", {
							"src": e.target.result,
							"class": "image-preview",
							"width": 120
						}).appendTo(imageHolder);
					}
					imageHolder.show();
					var file = $(this)[0].files[0];
					if (file === undefined) {
						$("<img />", {
							"src": "../../public/temp/css/images/upload-folder-icon.png",
							"class": "image-preview",
							"width": 100
						}).appendTo(imageHolder);
					} else {
						reader.readAsDataURL($(this)[0].files[0]);
					}
				} else {
					alert("This browser does not support FileReader.");
				}
			});
			
			$('.btn-add-new-destination').click(function(){
				$('#add-new-destination-modal').modal('toggle');
				$('#add-new-destination-modal').css({'padding-right':'0'});
				$('.add-new-destination').show();
			});

		}
	}

	$(document).ready(function(){
		deliveryRequest.init();
		$('.add-new-address').hide();
	});

})(jQuery);