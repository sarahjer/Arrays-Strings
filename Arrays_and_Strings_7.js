// rotates a matrix by 90 degrees

function rotate(mat){
	if(mat.length == 0 || mat.length != mat[0].length){
		console.log(mat[0][1]);
		console.log(mat[0].length);
		console.log(mat.length);
		return false;
	}
	var k = mat.length;
	var matrix = [];
	for(var i=0; i<k; i++) {
	    matrix[i] = [];
	    for(var j=0; j<k; j++) {
	        matrix[i][j] = undefined;
	    }
	}
	console.log(mat.length);
	var m = mat.length-1; 
	for(var i = 0; i < k; i++){
			var l = 0;
		for(var j = 0; j < k; j++){
			if(l<k){
				matrix[l][m] = mat[i][j];
				l++;	
			}  
		}
		m--;		
	}
	console.log(matrix);
	console.log(mat);
}