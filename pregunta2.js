//print binary of a number between 0 and 1
let numero = 0.15;
let arr = [];
let arraydebinario = [];
let numeross;
console.log(numero)
for (let i = 0; i < 19; i++) {
    numero = numero * 2;
    console.log(numero)
    let numeros = numero+"";
    if(numeros.charAt(0)==1){        
        arr = numeros.split("")        
        arr[0] = "0"
        arraydebinario.push(1)
        numeross = arr.join("")
        numero = parseFloat(numeross)
    }else{
        arraydebinario.push(0);
    }
    
}
console.log(numero)
console.log(arraydebinario.join(""))
//There was not enough time when I realised it was actually float which the method is to multiply by two till it becomes 1 otherwise is 0
//But I realised about it too late
//I just realised that if you don't set a limit to the calls, the decimals will never stop going
