$(document).ready(function(){
	
	/*var allKeywords =['break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue',
	'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'eval', 'export', 'extends',
	'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in',
	'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'null', 'package', 'private',
	'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this',
	'throws', 'transient','true', 'try', 'typeof', 'var', 'void', 'volatile', 'while', 'with', 'yield'];*/
	
	var jsKeywords =['break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue',
	'debugger', 'default', 'delete', 'do', 'double', 'enum', 'eval', 'export', 'extends',
	'final', 'finally', 'float', 'goto', 'implements', 'import', 'in',
	'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'package', 'private',
	'protected', 'public', 'short', 'static', 'super', 'switch', 'synchronized', 'this',
	'throws', 'transient', 'try', 'typeof', 'void', 'volatile', 'with', 'yield'];
	
	
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
		'statements' : {
			'words':['if', 'else', 'for', 'while', 'in'],
			'styles':'color:#355489; font-weight:bold;',
			'regex':''
		},
		'string' : {
			'words':[''],
			'styles':'color:#289a39;',
			'regex': /\'[^']+\'/g,			
		},
		/*'statements' : {
			'words':[''],
			'styles':'color:#a85499;',
			'regex': /(if|else if)\([^)]+\)/g,			
		},	
		'loops' : {
			'words':[''],
			'styles':'color:#5874a9;',
			'regex': /(for|while|do while)\([^)]+\)/g,			
		},*/
	}	
	
	var $pre = $('.code-snippet-container pre');
	var code = $pre.html();

	$pre.html(highlightWords(code, jsReservedWords));
});


function highlightWords(code, wordsObject){

	for (var key in wordsObject) {
		var obj = wordsObject[key];
		var words = obj.words;
		var styles = obj.styles;
		var regex = obj.regex;		
		
		for(var i=0; i<words.length; i++){
			var word = words[i];
			if(regex){
				var matches = code.match(regex);				
				for(var m=0; m<matches.length; m++){
					code = code.replace(matches[m], '<span style="' + styles + '">' + matches[m] + '</span>');
				}
			} 
			else{		
				code = code.replace(new RegExp( "\\b" + word + "\\b", 'g'), '<span style="' + styles + '">' + word + '</span>');	
			}
		}	
	}
	
	return code;
}