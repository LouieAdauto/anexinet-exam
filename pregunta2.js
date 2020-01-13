//print binary of a number between 0 and 1
let binarray = [];
let numeroEnString = "";
let floatEnArr = [];

const intToBin = (numero, arr, index) => {
            numero = numero * 2; 
            while(arr.length < 32){
                numeroEnString = numero+"";
                if(numeroEnString.charAt(0)==1){
                    binarray.push(1)
                    floatEnArr = numeroEnString.split("")                    
                    floatEnArr[0] = "0"
                    let numeross = arr.join("")
                    numero = parseFloat(numeross)
                }else{
                    if(numeroEnString.charAt(0)==0){
                        binarray.push(0)
                        floatEnArr = numeroEnString.split("")                                            
                        let numeross = arr.join("")
                        numero = parseFloat(numeross)
                    }
                }                
                index++;
                intToBin(numero, arr, index)
            }
    
}
intToBin(0.252, binarray, 30); 
console.log(binarray.reverse().join(""));
//There was not enough time when I realised it was actually float which the method is to multiply by two till it becomes 1 otherwise is 0
//But I realised about it too late
//I just realised that if you don't set a limit to the calls, the decimals will never stop going
