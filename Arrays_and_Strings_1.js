function isUnique (str) {
	if (str.length > 128) {
		return false;
	} 
	var obj = {};
	for(var i = 0; i < str.length; i++) {
		var val = str[i];
		if(obj[val]) {
			return false;
		} else {
			obj[val] = true;
		}
	}	
	return true;
}

