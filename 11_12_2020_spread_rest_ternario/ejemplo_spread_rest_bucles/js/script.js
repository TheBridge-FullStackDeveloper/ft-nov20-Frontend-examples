/* function suma(a,b){
    return a+b;
} */
//rest representa un array de parámetros (los agrupa)
function suma(...rest){
    return rest.reduce((acc,actual) =>acc+actual);
}
console.log(suma(1,2,3)); // 3 args
console.log(suma(6,7,8,9,10,11)); // 6 args


let esCliente = confirm("Lo eres?")
console.info("El pago son  " + (esCliente==true ? "10.00€" : "20.00€"));
/*
if(esCliente==true){
    return "10"
}else{
    return "20"
}
*/