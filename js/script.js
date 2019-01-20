
$(document).ready(function(){
	$('#menu-button').on('click', function(){
		//alert('you clicked on menu - you need to implement this !!!');
		$('#menu-container').toggle();
	});
	
	var $root = $('html, body');	
	$('a[href^="#"]').click(function() {
		var href = $.attr(this, 'href');	
		$root.animate({
			scrollTop: $(href).offset().top
		}, 5000, function () {
			window.location.hash = href;
		});	
		return false;
	});
});