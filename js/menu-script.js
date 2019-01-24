
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
	$nav.append('<div><a href="/"><img src="' + relativePath + '/img/logo.png" class="nav-logo"/></a></div>');
	$nav.append('<div id="menu-button" class="disable-select">&#9776;</div>'); // 	&#9784;   	&#9763;   	&#9762;
	$nav.append('<div id="menu-container" style="display:none;"></div>');   // 	&#5121;.     	&#5123;
	var $menu = $('#menu-container');
	var $button = $('#menu-button');
	
	for(var key in anchorsObject){
		var anchor = anchorsObject[key];		
		var anchorSelected = ''; // TODO !!!
		$menu.append('<a href="' + anchor.href + '"><div class="menu-item-container">' + anchor.text +'</div></a>');
	}

	$button.on('click', function(){
		$menu.toggle();
	});
	/*var $nav = $('nav');
		
	var relativePath = $('resources').attr('path');
	var anchorsArray = $('navmenu').attr('anchors').split(';');
	
	$nav.append('<div><a href="/"><img src="' + relativePath + '/img/logo.png" class="nav-logo"/></a></div>');
	$nav.append('<div id="menu-button" class="disable-select">&#9776;</div>'); // 	&#9784;   	&#9763;   	&#9762;
	$nav.append('<div id="menu-container" style="display:none;"></div>');   // 	&#5121;.     	&#5123;
	
	var $menu = $('#menu-container');
	
	for(var i=0; i<anchorsArray.length; i++){
		var anchor = anchorsArray[i].replace('[','').replace(']','').split(',');
		var aHref = anchor[0];
		var aText = anchor[1];
		var aShadow = anchor[2];
		$menu.append('<a href="' + aHref + '"><div class="menu-item-container ' + aShadow + '">' + aText +'</div></a>');
	}

	$('#menu-button').on('click', function(){
		$menu.toggle();
	});*/
});