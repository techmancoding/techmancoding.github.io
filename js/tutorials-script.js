$(document).ready(function(){
	var $tagsContainer = $('.tutorials-tags-container');	
	if($tagsContainer && $tagsContainer.length > 0){
		for(var tag in BlogsTagsJSON){
			var tagHref = BlogsTagsJSON[tag];
			$tagsContainer.append('<a href="' + tagHref + '" class="anchor-text-decoration-none"><div class="blog-tag ' + tag + '"></div></a>');
		}	
		$tagsContainer.append('<div style="clear:both;"></div>');
	}
	
	$container = $('#tutorials-filter-container');
	if($container && $container.length > 0){
		var tagFilter = $container.attr('tagfilter');		
		var counter = 0;		
		for(var key in BlogsJSON){	
			var blog = BlogsJSON[key];
			if($.inArray(tagFilter, blog.tags) !== -1){
				var isEven = (counter % 2 == 0);
				var relativePath = $('resources').attr('path');
				addBlogToContainer($container, blog, relativePath, isEven);
				counter++;	
			}
		}
	}
	
});