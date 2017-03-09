// // checks if one string is the rotation of the other


function strRotate(str1, str2){
	if(str1.length == str2.length && str1.length > 0){
	var str3 = str1 + str1;
	// console.log(str3);
	return isSubstring(str3, str2);
	}
	return false;
}
function isSubstring(stra, strb){
	var charArr1 = stra.split("");
	var charArr2 = strb.split("");
	var match = 0;
	for(var i = 0; i < charArr1.length - charArr2.length+1; i++){
		match = 0;
		for(var j = 0; j < charArr2.length; j++){
			if(charArr1[i+j] == charArr2[j]){
				match++;
			}
			if(match == charArr2.length){
				return true;
			}
		}
	}
		return false;
}



// function containsString(string1, string2){
//   var charArray1 = string1.split('');
//   var charArray2 = string2.split('');
//   var match = 0;
//   console.log(charArray1);
//   console.log(charArray2);
//   for(var i = 0; i < charArray1.length - charArray2.length + 1; i++){
//     match = 0;
//     for(var j = 0; j < charArray2.length; j++){
//       if(charArray1[i+j] == charArray2[j]){
//         match++;
//       }
//       // console.log(i, j, match, charArray1[i+j], charArray2[j]);
//       if(match == charArray2.length){
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(containsString(string1, string2));