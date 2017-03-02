// compresses a string using counts of repeated characters
// returns the smaller string(compressed/original) 

function strCompress(str) {
	var count = 0;
	var compressedStr = "";
	for(var i = 0; i < str.length; i++){
		count++;
		if(i + 1 > str.length || str.charAt(i) != str.charAt(i + 1)){
			compressedStr += "" + str.charAt(i) + count;
			count = 0;
		}
	}
	return compressedStr.length < str.length ? compressedStr : str;
}