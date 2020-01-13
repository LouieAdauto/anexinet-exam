//Convert a matrix into its transposed
const matrix = [
    [1,1,1],
    [2,2,2],
    [3,3,3]
]
const transposed = matrix[0].map(i => matrix.map(fila => fila[i]));
console.log(transposed);