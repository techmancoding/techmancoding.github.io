
$(document).ready(function(){

	var $nav = $('nav');
		
	var path = $('resources').attr('path');
	var anchorsArray = $('navmenu').attr('anchors').split(';');
	
	$nav.append('<div><a href="/"><img src="' + path + '/img/logo.png" class="nav-logo"/></a></div>');
	$nav.append('<div id="menu-button" class="disable-select">&#9776;</div>');
	$nav.append('<div id="menu-container" style="display:none;"></div>');
	
	var $menu = $('#menu-container');
	
	for(var i=0; i<anchorsArray.length; i++){
		var anchor = anchorsArray[i].replace('[','').replace(']','').split(',');
		var aHref = anchor[0];
		var aText = anchor[1];
		$menu.append('<a href="' + aHref + '"><div class="menu-item-container">' + aText +'</div></a>');
	}
	
	$menu.append('<div style="clear:both;"></div>');

	$('#menu-button').on('click', function(){
		$menu.toggle();
	});
});