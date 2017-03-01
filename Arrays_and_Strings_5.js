// checks if two strings are one edit away
// insert/remove/replace a character

function oneAway(str1,str2) {
	if(str1.length + 1 == str2.length){
		return oneInsertAway(str1, str2);
	} else if(str1.length == str2.length) {
		return oneReplaceAway(str1,str2);
	} else if(str1.length - 1 == str2.length){
		return oneInsertAway(str2,str1)
	}	
}

function oneReplaceAway(stra, strb){
	var sum = 0;
	for(var i = 0; i < stra.length; i++){
		if(stra.charAt(i) != strb.charAt(i)) {
			sum++;
			}
	}
	console.log(sum);
	if(sum == 1){
		return true;
	} else
		return false;	
}

function oneInsertAway(stra, strb){
	var i = j = 0;
	while(i < stra.length && j < strb.length) {
		if(stra.charAt(i) != strb.charAt(j)){
			if(i != j){
				return false;
			}
			j++;
		} else {
			i++;
			j++
		}	
	}
	return true;
}