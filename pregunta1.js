// Addition without a + operator
const sumarArrays = (n1, n2) => {
    const num1 = new Array(n1).fill("")
    const num2 = new Array(n2).fill("")
    const addition = num1.concat(num2).length
    return addition
}
console.log(sumarArrays(10,10))