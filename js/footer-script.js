$(document).ready(function(){

	var relativePath = $('resources').attr('path');
		
	var $footer = $('footer');
	$footer.append('<div class="footer-text">TechMan Coding &#xA9; 2019</div>');
	$footer.append('<div class="footer-text">Contact info</div>');
	//$footer.append('<div><img src="' + relativePath + '/img/logo.png" class="footer-logo"/></div>');	
	
	$footer.append('<div id="footer-menu-container"></div>');
	var $menu = $('#footer-menu-container');
	$menu.append('<ul');
	for(var key in MenuItemsJSON){
		var menuItem = MenuItemsJSON[key];
		var listItem = '<li><a href="' + menuItem.href + '" class="footer-menu-item">' + menuItem.text + '</a>';
		
		if(menuItem.submenu){
			listItem += '<ul>';				
			for(var subKey in menuItem.submenu){
				var subMenuItem = menuItem.submenu[subKey];
				listItem += '<li><a href="' + subMenuItem.href + '" class="footer-sub-menu-item">' + subMenuItem.text + '</a></li>';
			}		
			listItem += '</ul>';
			listItem += '</li>';
		}	
			
		if(!menuItem.submenu){
			listItem += '</li>';
		}
		
		$menu.append(listItem);
	}
	$menu.append('<ul');
});