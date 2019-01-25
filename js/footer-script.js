$(document).ready(function(){

	var relativePath = $('resources').attr('path');
		
	var $footer = $('footer');
	$footer.append('<div class="footer-text">TechMan Coding &#xA9; 2019</div>');
	$footer.append('<div class="footer-text">Contact info</div>');
	//$footer.append('<div><img src="' + relativePath + '/img/logo.png" class="footer-logo"/></div>');	
	
	$footer.append('<div id="footer-menu-container"></div>');
	var $menu = $('#footer-menu-container');
	
	for(var key in MenuItemsJSON){
		var menuItem = MenuItemsJSON[key];
		$menu.append('<a href="' + menuItem.href + '"><div class="footer-menu-item">' + menuItem.text + '</div></a>');
		
		if(menuItem.submenu){				
			for(var subKey in menuItem.submenu){
				var subMenuItem = menuItem.submenu[subKey];
				$menu.append('<a href="' + subMenuItem.href + '"><div class="footer-sub-menu-item">' + subMenuItem.text + '</div></a>');
			}		
		}		
	}
});