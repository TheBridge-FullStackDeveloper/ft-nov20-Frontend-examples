// Crea clase Vehiculo
let Vehiculo = function (marca, modelo, antiguedad, color, tipo) {
    // propiedades
    // Variable publica
    this.marca = marca || "Seat";
    this.modelo = modelo || "Leon";
    this.antiguedad = antiguedad || 1990;
    this.color = color || "verde";
    this.tipo = tipo || "Turismo";
    // Variable privada
    var velocidad = 0; // PRIVADO Inicialmente, todos los coches a 0 km/hora
    // métodos/funciones
    this.detalles = function(){
      console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
    }
    this.acelerar = function(incremento){
        velocidad += incremento;
        console.log("nueva velocidad:"+velocidad);
    }

    this.frenar = function(decremento){
        velocidad -= decremento; // this.velocidad = this.velocidad this.velocidad-decremento
        console.log("nueva velocidad:"+velocidad);
    }
    this.getVelocidad = function (){
        console.log("Velocidad actual:"+velocidad);
    }
};
// Añadir funcion al prototipo
Vehiculo.prototype.pitar = function(){
    console.warn("beep beep");
}

// Clase Furgon
let Furgon = function (taraMinima, cargaUtil, volumenCarga) {
    this.taraMinima = taraMinima;
    this.cargaUtil = cargaUtil;
    this.volumenCarga = volumenCarga;
    this.detallesTecnicos = detallesTecnicos;
};

function detallesTecnicos(){
    console.warn("Tu coche tiene una Tara mínima de "+this.taraMinima+". Carga útil de "+this.cargaUtil+" y un volumen de carga de "+this.volumenCarga+"m3");
  }

// Crea objeto miVehiculo
let miVehiculo = new Vehiculo ("Peugeot", "607", 2002, "rojo", "turismo");
console.log(miVehiculo.velocidad)// 0
miVehiculo.detalles();
miVehiculo.acelerar(90);
miVehiculo.frenar(20); // Velocidad = 90-20 = 70
miVehiculo.velocidad // 70
miVehiculo.pitar();

let miVehiculo2 = new Vehiculo();
let miVehiculo3 = new Vehiculo("Opel","Corsa");

// Crea objeto furgon, que hereda de vehiculo
let miFurgo = new Vehiculo ("Land Rover", "Santana Aníbal", 35, "Marrón tierra", "4x4");
miFurgo.prototype = new Furgon (1200, 768, 4.5);
miFurgo.acelerar(20); // Vehiculo
miFurgo.prototype.detallesTecnicos(); // Furgon
console.log(miFurgo.color) // Vehiculo
console.log(miFurgo.prototype.taraMinima)// Furgon
miFurgo.velocidad



/****************************CON ES6*************** */
// Clase PADRE
class Transporte{
    constructor(marca, modelo, antiguedad, color, tipo) {
      this.marca = marca;
      this.modelo = modelo;
      this.antiguedad = antiguedad;
      this.color = color;
      this.tipo = tipo;
    }
    detalles() {
        return `Tu vehiculo es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`;
    }
}
// Clase HIJA
class Furgoneta extends Transporte { 
    constructor (taraMinima, cargaUtil, volumenCarga) {
      super("iveco", "xwA", 2002, "blanco", "carga pesada"); // Invoca al constructor del padre
      // Propiedades del Hijo
      this.taraMinima = taraMinima;
      this.cargaUtil = cargaUtil;
      this.volumenCarga = volumenCarga;
    }
    detallesCamion() {
        return `${this.detalles()} ---- Tu FURGO tiene de carga util ${this.cargaUtil} `;
    }
    detalles() {
        return `Tu FURGO tiene de carga util ${this.cargaUtil} `;
    }
  };
  
  let miFurgo2 = new Furgoneta(1200, 768, 4.5);
  let miFurgo3 = new Furgoneta(1500, 800, 4);
  miFurgo2.detalles();

