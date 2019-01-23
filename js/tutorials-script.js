$(document).ready(function(){
	var $tagsContainer = $('.tutorials-tags-container');	
	if($tagsContainer && $tagsContainer.length > 0){
		for(var tag in BlogsTagsJSON){
			var tagHref = BlogsTagsJSON[tag];
			$tagsContainer.append('<a href="' + tagHref + '" class="anchor-text-decoration-none"><div class="blog-tag ' + tag + '"></div></a>');
		}	
		$tagsContainer.append('<div style="clear:both;"></div>');
	}
	
	var $filterTutorials = $('#tutorials-filter-container');
	if($filterTutorials && $filterTutorials.length > 0){
		var tagFilter = $filterTutorials.attr('tagfilter');
		
		alert(tagFilter);
	}
	
});