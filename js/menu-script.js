
$(document).ready(function(){

	var anchorsObject = {
		'home' : {
			'href' : '/',
			'text' : 'Home',
		},
		'tutorials' : {
			'href' : '/tutorials',
			'text' : 'Tutorials',
		},
		'empty-template' :{
			'href' : '/tutorials/empty-template',
			'text' : 'empty'
		},
		'section5' :{
			'href' : '/#section-five',
			'text' : 'five section'
		}
	}

	var $nav = $('nav');	
	var relativePath = $('resources').attr('path');
	var pageKey = $('resources').attr('pagekey'); // need to be the same as the key on anchorsObject
	$nav.append('<div><a href="/"><img src="' + relativePath + '/img/logo.png" class="nav-logo"/></a></div>');
	$nav.append('<div id="menu-button" class="disable-select">&#9776;</div>'); // 	&#9784;   	&#9763;   	&#9762;
	$nav.append('<div id="menu-container" style="display:none;"></div>');   // 	&#5121;.     	&#5123;
	var $menu = $('#menu-container');
	var $button = $('#menu-button');
	
	for(var key in anchorsObject){
		var anchor = anchorsObject[key];
		var menuItemSelected = (key == pageKey) ? 'menu-item-selected' : '';		
		$menu.append('<a href="' + anchor.href + '"><div class="menu-item-container ' + menuItemSelected + '">' + anchor.text +'</div></a>');
	}

	$button.on('click', function(){
		$menu.toggle();
	});
});