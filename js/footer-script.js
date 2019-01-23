$(document).ready(function(){

	var path = $('resources').attr('path');
	
	var $footer = $('footer');
	$footer.append('<div class="footer-text">TechMan Coding &#xA9; 2019</div>');
	$footer.append('<div class="footer-text">Contact info</div>');
	$footer.append('<div><img src="' + path + '/img/logo.png" class="footer-logo"/></div>');	
});
