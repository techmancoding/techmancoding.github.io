$(document).ready(function(){

	var relativePath = $('resources').attr('path');
	
	var $footer = $('footer');
	$footer.append('<div class="footer-text">TechMan Coding &#xA9; 2019</div>');
	$footer.append('<div class="footer-text">Contact info</div>');
	$footer.append('<div><img src="' + relativePath + '/img/logo.png" class="footer-logo"/></div>');	
});