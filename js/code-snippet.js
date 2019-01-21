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
	
	
	var jsReservedWords = {
		'boolean' : {
			'words':['true','false'],
			'styles':'color:#452398; font-weight:bold;',
			'regex':''
		},
		'null' : {
			'words':['null'],
			'styles':'color:#652375; font-weight:bold; font-style:italic;',
			'regex':''
		},
		'function' : {
			'words':['function'],
			'styles':'color:#3523da; font-weight:bold;',
			'regex':''
		},
		'return' : {
			'words':['return'],
			'styles':'color:#ad237a; font-weight:bold;',
			'regex':''
		},
		'var' : {
			'words':['var'],
			'styles':'color:#d47a60;',
			'regex':''
		},
	}
	
	var $pre = $('.code-snippet-container pre');
	var code = $pre.html();
	//alert(highlightWords(code, jsReservedWords));
	$pre.html(highlightWords(code, jsReservedWords));
});


function highlightWords(code, wordsObject){

	for (var key in wordsObject) {
		var obj = wordsObject[key];
		var words = obj.words;
		var styles = obj.styles;
		
		for(var i=0; i<words.length; i++){
			var word = words[i];
			code = code.replace(new RegExp( "\\b" + word + "\\b", 'g'), '<span style="' + styles + '">' + word + '</span>');
		}	
	}
	
	return code;
}