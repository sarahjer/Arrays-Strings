// Checks if a string is a Permutation of a Palindrome

function isPalin(str){
	var x = {}, palSum = 0;
	for(var i = 0; i < str.length; i++){
		var ch = str[i];
		x[ch] = (isNaN(x[ch]) ? 1 : x[ch]+1);
	}
	console.log(x);
	for(var j in x){
		palSum += x[j] % 2; 	
	}
	return palSum < 2;
}