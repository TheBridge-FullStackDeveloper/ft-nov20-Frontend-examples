// Arrow functions

var func = (x, y) => { 
    let resultado = x*2 +y*2;
    resultado++;
    return resultado; 
}; 
console.log(func(2,3));

// Arrow con map
let numeros = [2,5,6,7,8]
let impares  = numeros.map(item => item + 1);
//let impares  = numeros.map(function(item){return item+1});
console.log(impares) // [3, 6, 7, 8, 9]

// Vieja escuela
let impares2 = []
for(let i =0;i<numeros.length;i++){
    impares2.push(numeros[i]+1);
}
console.log(impares2)

let productos = ["patatas","Brownie","naranjas","jamon"]
let mensaje  = productos.map(prod => {
    if(prod.endsWith("s")){
        console.log(`Que te aprovechen tus ${prod}`)
        return `Que te aprovechen tus ${prod}`
    }else{
        console.log(`Que te aproveche tu ${prod}`)
        return `Que te aproveche tu ${prod}` 
    }
});
console.log(mensaje)

numeros = [2,5,6,7,8]
objetos = numeros.map(v => ({ original: v, incremento: v + 1 })) // array objetos
//objetos = numeros.map(v => `Has introducido ${v}`)


// Filter
let nums = [1,2,3,4,5]
let mayor = nums.filter(item => item>3) 
console.log(mayor)

// Vieja usanza sin Filter
let mayor2=[];
for(let i =0;i<nums.length;i++){
    if (nums[i]>3){
        mayor2.push(nums[i]);
    }
}

// Impares
var odds = [1,2,3,4,5].filter(num => num % 2!=0);
console.log(odds); // Array [ 1, 3, 5 ]
// Pares
var even = [1,2,3,4,5].filter(num => num % 2==0);
console.log(even); 

// Filtra para >=10
let filtrados = [false, 22, 4, 2, null, "Bye"].filter(element => element>=10);

// Reduce
let lista = [2,-1,1,3,5,8]; // Suma = 18
let suma = lista.reduce((acumulador,valorActual)=> acumulador+valorActual);
console.log(suma); 

let suma2 = 0;
for(let i =0;i<lista.length;i++){
    
    suma2+=lista[i];
    //console.log(suma2)
}
console.log(suma2);

// Reduce promedio temperatura semanal

let temperaturas = [8,10,11,12,11,9,8]; // tra lunes-domingo
// promedio = suma(temperaturas)/total
let suma_temp = temperaturas.reduce((acumulador,t_actual)=>acumulador+t_actual)
let promedio = suma_temp/temperaturas.length
console.log(`Temperatura media en Madrid:${promedio.toFixed(2)}ºC`);





