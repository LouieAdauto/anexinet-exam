//print binary of a number between 0 and 1
let binarray = [];

const intToBin = (number) => {    
    if (number === 1){
        return binarray.push(number);
    }else {   
        if(number%2 === 0){
              binarray.push(0)  
        }else{
            binarray.push(1)
        }        
        return intToBin(
            parseInt(number/2)
        )
        
    }
}
intToBin(15); 
binarray.length > 30 ? console.log("Error"):console.log(binarray.reverse().join(""));
//There was not enough time when I realised it was actually float which the method is to multiply by two till it becomes 1 otherwise is 0
//But I realised about it too late
//I just realised that if you don't set a limit to the calls, the decimals will never stop going
