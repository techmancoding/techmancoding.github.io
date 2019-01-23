
var BlogsJSON = {
	'html5': {
		'mainTitle':'HTML5 Tutorial',
		'subTitle':'Learn HTML5 for modern web design',
		'summary':'HTML5 is the latest version of HTML language (Hyper Text Markup Language). in this course we will learn the basic of HTML5.',
		'imagePath':'./img/html5-logo.png',
		'tags':['tag-html5'],
		'href' : '/tutorials/html5',
	},	
	'css3': {
		'mainTitle':'CSS3 Tutorial',
		'subTitle':'Learn CSS3 for modern web design',
		'summary':'CSS3 is the latest version of CSS language (Cascading Style Sheets). in this course we will learn how to apply CSS3 to your website HTML and make your site look awesome.',
		'imagePath':'./img/css3-logo.png',
		'tags':['tag-css3', 'tag-html5'],
		'href' : '/',
	},
	'javascript':{
		'mainTitle':'Javascript Tutorial',
		'subTitle':'javascript ES5',
		'summary':'JavaScript language can make your site better. in this course we will learn how to implement JavaScript language to make your website more dynamic.',
		'imagePath':'./img/js-logo.png',
		'tags':['tag-js']
	}	
}

$(document).ready(function(){
	var $container = $('#blogs-container');
	var counter = 0;
	
	for(var key in BlogsJSON){
	
		var blog = BlogsJSON[key];
		var blogContent = '';
		var isEven = (counter % 2 == 0);
		
		var blogContainerClass = isEven ? 'blog-bg-vertical' : 'blog-bg-horizontal';
		var blogMainTitleClass = isEven ? 'blog-main-title-one' : 'blog-main-title-two';
		var blogSubTitleClass = isEven ? 'blog-sub-title-one' : 'blog-sub-title-two';
		var blogSummaryClass = isEven ? 'blog-summary-one' : 'blog-summary-two';
		
		blogContent += '<div class="blog-container ' + blogContainerClass + '">';
		blogContent += '<a href="/' + blog.href + '" class="blog-anchor">'
		blogContent += '<div class="' + blogMainTitleClass + '">' + blog.mainTitle + '</div>';
		blogContent += '<div class="' + blogSubTitleClass + '">' + blog.subTitle + '</div>';
		blogContent += '<div class="' + blogSummaryClass + '">' + blog.summary + '</div>';
		blogContent += '<div class="blog-img-container"><img src="' + blog.imagePath + '" class="blog-img"/></div>';		
		blogContent += '</a>'
		
		var tagsArray = blog.tags;
		if(tagsArray.length > 0){
			blogContent += '<div class="blog-tags-container">';
			for(var i=0; i<tagsArray.length; i++){
				var blogTag = tagsArray[i]; // the name of the tag is the name of the tag class in the CSS file
				blogContent += '<div class="blog-tag ' + blogTag + '"></div>';
			}
			blogContent += '</div>'; // blog-tags-container close tag
		}
			
		blogContent += '</div>'; // blog-container close tag
			
		counter++;
		$container.append(blogContent);		
	}

});