$(document).ready(function(){
	
	/*var allKeywords =['break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue',
	'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'eval', 'export', 'extends',
	'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in',
	'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'null', 'package', 'private',
	'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this',
	'throws', 'transient','true', 'try', 'typeof', 'var', 'void', 'volatile', 'while', 'with', 'yield'];*/
	
	var jsKeywords =['break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue',
	'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'eval', 'export', 'extends',
	'final', 'finally', 'float', 'for', 'goto', 'if', 'implements', 'import', 'in',
	'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'package', 'private',
	'protected', 'public', 'short', 'static', 'super', 'switch', 'synchronized', 'this',
	'throws', 'transient', 'try', 'typeof', 'void', 'volatile', 'while', 'with', 'yield'];
	
	var jsLiterals =['null','true','false'];
		
	var jsSpecialWords = ['function', 'var', 'return'];
	
	var $pre = $('.code-snippet-container pre');
	var code = $pre.html();
	
	/*for(var i=0; i<jsKeywords.length; i++){
		var word = jsKeywords[i];
		code = code.replace(new RegExp( "\\b" + word + "\\b", 'g'), '<span class="csw-keywords">' + word + '</span>');
	}*/
	
	var newCode = replaceWithRegex(code, jsKeywords, 'csw-keywords');
	newCode = replaceWithRegex(newCode, jsLiterals, 'csw-literals');
	newCode = replaceWithRegex(newCode, jsSpecialWords, 'csw-special');
	
	$pre.html(newCode);
});



function replaceWithRegex(codeStr, wordsArray, classToSpan){
	for(var i=0; i<wordsArray.length; i++){
		var word = wordsArray[i];
		codeStr = codeStr.replace(new RegExp( "\\b" + word + "\\b", 'g'), '<span class="' + classToSpan + '">' + word + '</span>');
	}	
	return codeStr;
}