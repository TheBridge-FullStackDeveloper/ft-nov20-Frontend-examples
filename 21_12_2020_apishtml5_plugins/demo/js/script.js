var w;

function startWorker() {
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("/js/demo_workers.js");
    }
    //Devuelve el mensaje. "buzon"
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}












const objeto = { a: 1, b: 2, c: 3 };

for (const clave in objeto) {
  console.log(`clave:${clave}: valor:${objeto[clave]}`);
}


const test = {a: 1, b: 2, c: 3};

for (const [key, value] of Object.entries(test)) {
  console.log(key, value);
}






















