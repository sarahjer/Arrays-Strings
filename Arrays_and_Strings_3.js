// Replaces all spaces in a string with %20
// URLifys the string
function urlify(str) {
	var newStr = str.replace(/ /g,"%20");
	console.log(newStr);
}