const mapId = "map";
const map = L.map(mapId).setView([34.0325457,-118.3702867], 13);
const ACCESS_TOKEN ="----ACCESS_TOKEN HERE----";
const MAPBOX_API = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`;
const ATTRIBUTION =
'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
L.tileLayer(MAPBOX_API, {
attribution: ATTRIBUTION,
maxZoom: 18,
id: "mapbox/light-v10",
tileSize: 512,
zoomOffset: -1,
accessToken: ACCESS_TOKEN,
}).addTo(map);


// Promesa para esperar x segundos
//const sleep = time => new Promise((resolve) => setTimeout(resolve, time))

/* function sleep (time){
    return new Promise(function(resolve, reject) {
    setTimeout(resolve, time, "borrando"); // devuelve "borrando" dentro del resolve"
    });
} */


const sleep = time => new Promise(function(resolve, reject) {
    setTimeout(resolve, time, "borrando"); // devuelve "borrando" dentro del resolve"
});


async function dibujar(){
    let data = await fetch("https://api.metro.net/agencies/lametro/vehicles/")
    let markers = await data.json()
    let marcadores = markers.items.map((marker) => {
        return L.marker([marker.latitude, marker.longitude]).addTo(map);
    });//[] de marcadores pintados
    return marcadores;//[] de marcadores pintados
}
async function borrar(marcadores){
    let mensaje = await sleep(3000);
    marcadores.map(pin => map.removeLayer(pin))
}


async function refrescar(){
    let i = 0;
    while(i<10){
        console.log(i)
        await dibujar().then(marcadores =>borrar(marcadores))
    i++;
    }
}

refrescar()


       
    
 
   

    


    
    

  