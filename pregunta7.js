/*given a zero, if in matrix then change
values in the rows and cols it is*/
let changeToZeroes =  (matrix)=> {
    let binaryMatrix = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0))
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] == 0) {
          for (m = 0; m < matrix.length; m++) {
            binaryMatrix[m][j] = 1
          }
          for (let n = 0; n < matrix[0].length; n++) {
            binaryMatrix[i][n] = 1
          }
        };
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (binaryMatrix[i][j]) {
          matrix[i][j] = 0
        }
      }
    }
    console.log(matrix)
  };        

  let matrix = [
    [1,5,6],
    [3,0,7],
    [9,8,4]
]
  const binaryMatrix = changeToZeroes(matrix);