jQuery(document).ready(function($) {
	
	$.validator.addMethod('checkDomain', function (value) { 
		return /^([\w-.]+@(?!gmail)(?!outlook)(?!hotmail)(?!yahoo)(?!yandex)([\w-]+.)+[\w-]{2,4})?$/.test(value);
	}, 'please use your corporate email address.email with domain (gmail,outlook,hotmail,yahoo,yandex)are not allowed.');
	
	
	$.validator.addMethod('filesize', function (value, element, param) {
	 // param = size (in bytes) 
    // element = element to validate (<input>)
    // value = value of the element (file name)	
	// File size must be less than {0}
		return this.optional(element) || (element.files[0].size <= param)
	}, 'File size must be less than 2MB');

	$.validator.addMethod('captcha',
					function(value) {
					$result = ( parseInt($('#num1').val()) + parseInt($('#num2').val()) == parseInt($('#captcha').val()) ) ;
						$('#spambot').fadeOut('fast');
						return $result;
					},
					'Incorrect value, please try again.'
	);
	
		
    //$('.alert-success').delay(2500).fadeOut(10000);
    $('.alert-danger').delay(2500).fadeOut(10000);
	// We use the jQuery validate plugin to validate required params on submit
	$("#divi-contact-form").validate({
		rules: {
			"c_fname" : {
				required: true,
				maxlength : 20
			},
			"c_lname" : {
				required: true,
				maxlength : 20
			},
			"c_email" : {
				required: true,
				checkDomain: true,
				email : true
			},
			"c_company" : {
				required: true,
				maxlength : 50
			},
			"c_phonenumber" : {
				required: true,
				number : true,
				maxlength: 16,
			    minlength: 8
			},
			"c_message" : {
				required: true,
				maxlength: 1000,
			    minlength: 20
			},
			c_file1  : {  
					extension: "jpeg|jpg|png|plain|pdf|x-log|log|json|xml|gzip|zip|x-rar|docx|xlsx|doc|xls|license|l4j" ,
					filesize: 2097152
			},
			c_file2  : {  
					extension: "jpeg|png|jpg|plain|pdf|x-log|log|json|xml|gzip|zip|x-rar|docx|xlsx|doc|xls|license|l4j" ,
					filesize: 2097152
			},
			c_file3  : {  
					extension: "jpeg|png|jpg|plain|pdf|x-log|log|json|xml|gzip|zip|x-rar|docx|xlsx|doc|xls|license|l4j" ,
					filesize: 2097152
			},
			captcha: {
				required: true,
				captcha: true
			}
		},
		messages: {
       
        	c_email: { remote: "This email address is already registered." }
   		 }
	});
	
});

var _validFileExtensions = ['.jpeg', '.jpg','.png', '.plain', '.pdf', '.x-log', '.log', '.json', '.xml', '.gzip', '.zip', '.x-rar','.docx', '.xlsx', '.doc', '.xls', '.license','.l4j'];    
function ValidateSingleInput(oInput) {
		if (oInput.type == "file") {
			var sFileName = oInput.value;
			 if (sFileName.length > 0) {
				var blnValid = false;
				for (var j = 0; j < _validFileExtensions.length; j++) {
					var sCurExtension = _validFileExtensions[j];
					if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
						blnValid = true;
						break;
					}
				}
				 
				if (!blnValid) {
					alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
					oInput.value = "";
					return false;
				}
			}
		}
		return true;
}