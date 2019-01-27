$(document).ready(function(){

	var $nav = $('nav');	
	var relativePath = $('resources').attr('path');
	var pageKey = $('resources').attr('pagekey'); // need to be the same as the key on MenuItemsJSON
	$nav.append('<div><a href="/"><img src="' + relativePath + '/img/logo.png" class="nav-logo"/></a></div>');
	$nav.append('<div id="menu-button" class="disable-select">&#9776;</div>'); // 	&#9784;   	&#9763;   	&#9762;
	$nav.append('<div id="menu-container" style="display:none;"></div>');   // 	&#5121;.     	&#5123;
	var $menu = $('#menu-container');
	var $menuButton = $('#menu-button');
	var counter = 0;
	
	for(var key in MenuItemsJSON){
		var menuItem = MenuItemsJSON[key];
		var menuItemSelected = (key == pageKey) ? 'menu-item-selected' : '';
				
		if(!menuItem.submenu){		
			$menu.append('<a href="' + menuItem.href + '"><div class="menu-item-container ' + menuItemSelected + '">' + menuItem.text +'</div></a>');
		}
		else{ // menu item contains sub menu
			var isCurrentPageInSubMenu = false;
			var subMenuId = 'sub-menu-id-' + counter;
			var subMenuButtonId = 'sub-menu-button-id-' + counter;
			
			for(var subK in menuItem.submenu){
				if(subK == pageKey){
					isCurrentPageInSubMenu = true;
					break;
				}
			}
			
			var subMenu = '<div id="' + subMenuId + '" class="sub-menu-container">';		
			for(var subKey in menuItem.submenu){
				var subMenuItem = menuItem.submenu[subKey];
				var subMenuItemSelected = (subKey == pageKey) ? 'sub-menu-item-selected' : '';
				subMenu += '<a href="' + subMenuItem.href + '"><div class="sub-menu-item-container ' + subMenuItemSelected + '">' + subMenuItem.text +'</div></a>';
			}
			subMenu += '</div>';
			
			$menu.append('<a href="' + menuItem.href + '"><div class="menu-item-container-with-sub-button ' + menuItemSelected + '">' + menuItem.text +'</div></a><div id="' + subMenuButtonId + '" class="sub-menu-button ' + menuItemSelected + '"><div class="sub-menu-button-icon disable-select">&#9763;</div></div>');
			$menu.append(subMenu);
			
			var $subMenu = $('#' + subMenuId);
			var $subMenuButton = $('#' + subMenuButtonId);
			var $subMenuIcon = $subMenuButton.find('.sub-menu-button-icon');
	
			if(!isCurrentPageInSubMenu){
				$subMenu.css({'display':'none'});
			}
			else{
				translateSubMenuIcon($subMenuIcon);
			}
			
			$subMenuButton.on('click', function(){
				translateSubMenuIcon($subMenuIcon);
				$subMenu.toggle();
			});
		}
		counter++;		
	}

	$menuButton.on('click', function(){
		$menu.toggle();
	});
});

function translateSubMenuIcon($icon){
	var iconClass = 'sub-menu-button-icon-translate';
	if(!$icon.hasClass(iconClass)){
		$icon.addClass(iconClass);
	}
	else{
		$icon.removeClass(iconClass);
	}
}