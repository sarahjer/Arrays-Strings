//  checks if a MxN matrix has any zero elements
// if so all the elements of its row and column are set to zero;

function zeroMat(mat){
	var row = [],
		column = [];
	for(var i = 0; i < mat.length; i++){
		for(var j = 0; j < mat[0].length; j++){
			if(mat[i][j] == 0){
				row[i] = true;
				column[j] = true;
			}	
		}
	}

	for(var i = 0; i < row.length; i++){
		if(row[i]){
			zeroRow(mat, i);
		}
	}

	for(var j = 0; j < column.length; j++){
		if(column[j]){
			zeroColumn(mat, j);
		}
	}
	console.log(mat);
}
	function zeroRow(mat, row){
		for(var j = 0; j < mat[0].length; j++){
			mat[row][j] = 0;
		}
	}

	function zeroColumn(mat, column){
		for(var i = 0; i < mat.length; i++){
			mat[i][column] = 0;
		}
	}

	
