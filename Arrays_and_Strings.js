function isUnique (str) {
	if (str.length > 128) {
		return false;
	} 
	var charSet = [];
	for(var i = 0; i < str.length; i++) {
		var val = str.charAt(i);
		for(var j = 0; j < charSet.length; j++) {
			if(charSet[j] == val) {
				return false;
			} 
		}	
		charSet.push(val);
	}
console.log("true");
return charSet;
}
