
var BlogsJSON = {
	'css3': {
		'mainTitle':'CSS3 Tutorial',
		'subTitle':'Learn CSS3 for modern web design',
		'summary':'CSS3 is the latest version of CSS language (Cascading Style Sheets). in this course we will learn how to apply CSS3 to your website HTML and make your site look awesome.',
		'imagePath':'./img/css3-logo.png',
		'tags':['tag-css3', 'tag-html5'],
		'href' : '/',
		'articles' : {
			'partOne' : {
				'mainTitle':'CSS3 Tutorial',
				'subTitle':'Learn CSS3 for modern web design',
				'summary':'CSS3 is the latest version of CSS language (Cascading Style Sheets). in this course we will learn how to apply CSS3 to your website HTML and make your site look awesome.',
				'paragraphs' : {
					'p1' : {
						'content' : 'css paragraph one',
						'imagePath' : './img/html5-logo.png'
					},
					'p2' : {
						'content' : 'css paragraph two',
						'imagePath' : './img/js-logo.png'
					}
				}
			},
			'partTwo' : {
				'mainTitle':'CSS3 Tutorial',
				'subTitle':'Learn CSS3 for modern web design',
				'summary':'CSS3 is the latest version of CSS language (Cascading Style Sheets). in this course we will learn how to apply CSS3 to your website HTML and make your site look awesome.',
			},
			'partThree' : {
				'mainTitle':'CSS3 Tutorial',
				'subTitle':'Learn CSS3 for modern web design',
				'summary':'CSS3 is the latest version of CSS language (Cascading Style Sheets). in this course we will learn how to apply CSS3 to your website HTML and make your site look awesome.',			
			}
		}
	}	
	,
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
		blogContent += '<a href="/blogs" class="blog-anchor">'
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