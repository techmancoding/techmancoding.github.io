$(document).ready(function(){
	var $flipFront = $('.flip-front');
	var $flipBack = $('.flip-back');
		
	$flipFront.on('click', function(){
		var flipFrontColor = $(this).css('background-color');
		var flipBackColor = $flipBack.css('background-color');	
		$(this).css({'background-color':flipBackColor});
		$flipBack.css({'background-color': flipFrontColor});
	});
	$flipBack.on('click', function(){
		var flipBackColor = $(this).css('background-color');
		var flipFrontColor = $flipFront.css('background-color');	
		$(this).css({'background-color':flipFrontColor});
		$flipFront.css({'background-color': flipBackColor});
	});
});