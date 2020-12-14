let arr = [1,2,3,4,5,6,7,8]

arr
.filter(item=>item>4)
.map(item => `El numero es: ${item}`)
.map(item => item+"!!!!")


let resultado = arr
.filter(item=>item>4)
.map(item => `El numero es: ${item}`)
.map(mensaje => mensaje+"!!!!")
console.log(resultado)

console.log(
    arr
    .filter(item=>item>4)
    .map(item => `El numero es: ${item}`)
    .map(mensaje => mensaje+"!!!!")
)

arr.reduce((acumulador,item)=>acumulador+=item)

// Ejemplo promesas

const guardaAleatorios = function(iterations) {
   let miPromesa  = new Promise((resolve, reject) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6); // ALEATORIO 1-6
      numbers.push(number);
      if (number === 6) {
        reject({
          error: true,
          message: "Se ha sacado un 6"
        });
        // return de "LO MALO"
      }
    }
    // array sin 6. YA SE HA RELLENADO EL ARRAY SIN 6
    resolve({
      error: false,
      value: numbers
    });
    // return de "LO BUENO"
  });

  return miPromesa;
}
  guardaAleatorios(5)// Devuelve una promesa
    .then(result => console.log("Tiradas correctas: ", result.value))
    .catch(err => console.error("Se ha sacado un ", err.message));

// Ejemplo sintaxis fetch
fetch("url-de-datos") // Devuelve una promesa
    .then(res=>console.log(res))
    .catch(error=> console.log(error))

// Ejemplo fetch de imagen de perritos
document.getElementById("boton").addEventListener("click",function(){
    // Devuelve una PROMESA
    fetch("https://dog.ceo/api/breeds/image/random") 
    .then(res => res.json()) // convierte datos a JSON
    .then(data =>{ 
        console.log(data)
        document.querySelector("img").src = data.message;
        document.querySelector("img").style.width = "300px";
    });

})


// 1- Hacer fetch de productos
//https://fakestoreapi.com/products
// 2- Generar en el DOM una lista UL/LI con el titulo de cada elemento

function crearLista(){
    console.time("tiempo!!!"); // Cronometro
    let ul = document.createElement("ul");

    fetch("https://fakestoreapi.com/products") 
    .then(res => res.json()) // convierte datos a JSON
    .then(data =>{ 
        data.map(prod => {
            let li = document.createElement("li");
            let txt = document.createTextNode(prod.title);
            li.appendChild(txt);
            ul.appendChild(li);
            console.log(prod.title)
        })
        document.body.appendChild(ul);// Añadir lista completa
        console.timeEnd("tiempo!!!");
    });
}

crearLista();