// checks if one string is the rotation of the other


function strRotate(str1, str2){
	if(str1.length == str2.length && str1.length > 0){
	var str3 = str1 + str1;
	// console.log(str3);
	return isSubstring(str3, str2);
	}
	return false;
}
function isSubstring(stra, strb){
	// var string = stra,
	// 	substring = strb;
	// return string.includes(substring);
	var a = false;
	var i = 0;
	while(i < stra.length){
		if(strb.charAt(0) == stra.charAt(i)){
			a = true;
			var b = i;
			break;
		} else {
			i++;
		}
	}
	if(!a){
		return false;
	} else {
		for(var j = 0; j < strb.length; j++){
			if(strb.charAt(j) == stra.charAt(b)){
				b++;
			} else {
				return false;
			}
		}
		return true;
	}
}