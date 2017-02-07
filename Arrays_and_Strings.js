function isUnique (str) {
	if (str.length > 128) {
		return false;
	} 
	var charSet = [];
	for(var i = 0; i < str.length; i++){
		var val = str.charAt(i);
		charSet.push(val);
		if(!charSet[val]) {
			return false;
		} else {
			return true;
		}
	}
}


