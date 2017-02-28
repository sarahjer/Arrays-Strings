function isPerm(a, b) {
	if(a.length != b.length) {
		return false;
	} else {
		var x ={};
		for (var i = 0; i < a.length; i++){
			var c = a[i];
			x[c] = (isNaN(x[c]) ? 1 : x[c] + 1);
		}
		console.log(x);
		for(var j = 0; j < b.length; j++){
			var d = b[j];
			x[d]--;
		}
		console.log(x);
		for(var k = 0; k < x.length; k++) {
			if(x[k] !== 0){
				return false;
			}	
		}
		return true;
	}
}