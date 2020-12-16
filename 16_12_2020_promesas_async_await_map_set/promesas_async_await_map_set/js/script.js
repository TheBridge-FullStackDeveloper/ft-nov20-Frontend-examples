
const URL_MORTY = "https://rickandmortyapi.com/api/character/2";
const URL_PIKACHU = "https://pokeapi.co/api/v2/pokemon/pikachu";

// Hasta que no acaba de descargarse todo, no uso los datos
// morty -->3ms (t=0ms)
// rick -->4ms (t=3ms)
// t_total = 3ms + 4ms = 7ms
fetch(URL_MORTY)
.then(res=>res.json())
.then(morty => {
    fetch(URL_PIKACHU)
    .then(res=>res.json())
    .then(pikachu=>{
        console.log(morty);
        console.log(pikachu); 
    })
})

console.info("****Promise ALL!*****");
// morty --> 3ms (t=0)
// rick --> 4ms (t=0)
// t_total = 4ms
Promise.all(
    [
    fetch(URL_MORTY).then(res=>res.json()),
    fetch(URL_PIKACHU).then(res=>res.json())
    ]
).then(data => {
    console.info("*****MORTY*****")
    console.log(data[0].name)// Morty
    console.info("*****PIKACHU*****")
    console.log(data[1].name)// pikachu
})

//Async/await
async function getUserAsync(name1,name2) {
  let response1 = await fetch(`https://api.github.com/users/${name1}`);
  let data1 = await response1.json()

  let response2 = await fetch(`https://api.github.com/users/${name2}`);
  let data2 = await response2.json()
  
  return [data1,data2]
}

getUserAsync('migueltafmart','alejandroereyesb')
  .then(data => console.log(data))
  .catch(error => console.log("hubo un error"+error));
