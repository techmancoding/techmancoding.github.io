$(document).ready(function(){
	var $container = $('#blogs-container');
	var counter = 0;
	
	for(var key in BlogsJSON){	
		var blog = BlogsJSON[key];
		var isEven = (counter % 2 == 0);
		var relativePath = $('resources').attr('path');
		addBlogToContainer($container, blog, relativePath, isEven);
		counter++;	
	}
});



function addBlogToContainer($container, blog, relativePath, isEven){

	var blogContent = '';		
	var blogContainerClass = isEven ? 'blog-bg-vertical' : 'blog-bg-horizontal';
	var blogMainTitleClass = isEven ? 'blog-main-title-one' : 'blog-main-title-two';
	var blogSubTitleClass = isEven ? 'blog-sub-title-one' : 'blog-sub-title-two';
	var blogSummaryClass = isEven ? 'blog-summary-one' : 'blog-summary-two';
		
	blogContent += '<div class="blog-container ' + blogContainerClass + '">';
	blogContent += '<a href="' + blog.href + '" class="anchor-text-decoration-none">'
	blogContent += '<div class="' + blogMainTitleClass + '">' + blog.mainTitle + '</div>';
	blogContent += '<div class="' + blogSubTitleClass + '">' + blog.subTitle + '</div>';
	blogContent += '<div class="' + blogSummaryClass + '">' + blog.summary + '</div>';
	blogContent += '<div class="blog-img-container"><img src="' + relativePath + '' + blog.imagePath + '" class="blog-img"/></div>';		
	blogContent += '</a>'
		
	var tagsArray = blog.tags;
	if(tagsArray.length > 0){
		blogContent += '<div class="blog-tags-container">';
		for(var i=0; i<tagsArray.length; i++){
			var blogTag = tagsArray[i]; // the name of the tag is the name of the tag class in the CSS file
			var tagHref = '';
			if(BlogsTagsJSON.hasOwnProperty(blogTag)){
				tagHref = BlogsTagsJSON[blogTag];
			}
			blogContent += '<a href="' + tagHref + '" class="anchor-text-decoration-none"><div class="blog-tag ' + blogTag + '"></div></a>';
		}
		blogContent += '</div>'; 
	}			
	blogContent += '</div>'; 
			
	$container.append(blogContent);		
}