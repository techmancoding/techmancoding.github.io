$(document).ready(function(){

	var anchorsObject = {
		'home' : {
			'href' : '/',
			'text' : 'Home',
		},
		'tutorials' : {
			'href' : '/tutorials',
			'text' : 'Tutorials',
			'submenu' : {
				'html5': {
					'href' : '/tutorials/tags/html5-tutorials',
					'text' : 'HTML5'
				},
				'css3': {
					'href' : '/tutorials/tags/css3-tutorials',
					'text' : 'CSS3'
				},
				'javascript': {
					'href' : '/tutorials/tags/javascript-tutorials',
					'text' : 'Javascript'
				}
			}
		},
		'empty-template' :{
			'href' : '/tutorials/empty-template',
			'text' : 'empty'
		},
		'section5' :{
			'href' : '/#section-five',
			'text' : 'five section'
		}
	};

	var $nav = $('nav');	
	var relativePath = $('resources').attr('path');
	var pageKey = $('resources').attr('pagekey'); // need to be the same as the key on anchorsObject
	$nav.append('<div><a href="/"><img src="' + relativePath + '/img/logo.png" class="nav-logo"/></a></div>');
	$nav.append('<div id="menu-button" class="disable-select">&#9776;</div>'); // 	&#9784;   	&#9763;   	&#9762;
	$nav.append('<div id="menu-container" style="display:none;"></div>');   // 	&#5121;.     	&#5123;
	var $menu = $('#menu-container');
	var $menuButton = $('#menu-button');
	var counter = 0;
	
	for(var key in anchorsObject){
		var menuItem = anchorsObject[key];
		var menuItemSelected = (key == pageKey) ? 'menu-item-selected' : '';
				
		if(!menuItem.submenu){		
			$menu.append('<a href="' + menuItem.href + '"><div class="menu-item-container ' + menuItemSelected + '">' + menuItem.text +'</div></a>');
		}
		else{ // menu item contains sub menu
			var subMenuId = 'sub-menu-id-' + counter;
			var subMenuButtonId = 'sub-menu-button-id-' + counter;
			var subMenu = '<div id="' + subMenuId + '" class="sub-menu-container" style="display:none;">';
			for(var subKey in menuItem.submenu){
				var subMenuItem = menuItem.submenu[subKey];
				subMenu += '<a href="' + subMenuItem.href + '"><div class="sub-menu-item-container ' + menuItemSelected + '">' + subMenuItem.text +'</div></a>';
			}
			subMenu += '</div>';
			$menu.append('<a href="' + menuItem.href + '"><div class="menu-item-container-with-sub-button ' + menuItemSelected + '">' + menuItem.text +'</div></a><div id="' + subMenuButtonId + '" class="sub-menu-button"><div class="disable-select">&#9763;</div></div>');
			$menu.append(subMenu);
			var $subMenu = $('#' + subMenuId);
			var $subMenuButton = $('#' + subMenuButtonId);
			$subMenu.append('<div style="clear:both;"></div>');
			$subMenuButton.on('click', function(){
				$subMenu.toggle();
			});
		}
		counter++;		
		//$menu.append('<a href="' + menuItem.href + '"><div class="menu-item-container ' + menuItemSelected + '">' + menuItem.text +'</div></a>');
	}

	$menuButton.on('click', function(){
		$menu.toggle();
	});
});