$(document).ready(function(){
	
	var words = ['function', 'var', 'return','alert'];
	var $pre = $('.code-snippet pre');
	var code = $pre.html();
	
	for(var i=0; i<words.length; i++){
		var word = words[i];
		code = code.replace(new RegExp(word, 'g'), '<span class="csw-' + word + '">' + word + '</span>');
		// for each word in the array we wrap the word in a span tag with a new class starting 
		// with csw- prefix that corresponding to the css class in code-snippet.css
	}
	
	$pre.html(code);
});