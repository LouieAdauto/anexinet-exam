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
