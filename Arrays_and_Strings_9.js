// checks if one string is the rotation of the other


function strRotate(str1, str2){
	if(str1.length != str2.length || str1.length == 0){
		return false;
	}
	var str3 = str1 + str1;
	return isSubstring(str3, str1)
}

function isSubstring(stra, strb){
	var string = stra,
		substring = strb;
	return string.includes(substring);
}