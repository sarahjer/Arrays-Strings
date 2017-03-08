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
	var a = false;
	var i = 0, j = 0;
	// console.log(strb.length);
	// console.log(stra.length);
	while(i < stra.length && j < strb.length){
		if(strb.charAt(j) != stra.charAt(i)){
			i++;
			a = false;
			j = 0;
		} else {
			i++;
			j++;
			a = true;
		}
	}
	var b;
	if(a){
		j == strb.length  ?  b = true : b = false;
		return b;
	} else {
		return false;
	}
}