/** ------------ I ------------ */
// Crea un objeto llamado persona con propiedades como 
// nombre, edad y ciudad.

let persona = {
    nombre: "david medina",
    edad:20,
    ciudad:"bello"
}

/** ------------ II ------------ */
persona.ocupacion = "Estudiante";

/** ------------ III ------------ */
console.log(persona.edad);

/** ------------ IV ------------ */
let libro = {
    titulo: "El señor de los anillos",
    autor: "Tolkien",
    editorial: "Planeta",
    paginas: 1000,
    anoPublicacion:1954
}

/** ------------ V ------------ */
const informacion = {...persona, ...libro};
console.log(informacion);

/** ------------ VI ------------ */
persona.ciudad = "Bogotá";

/** ------------ VII ------------ */
delete persona.ocupacion;
console.log(persona);

/** ------------ VIII ------------ */
let coche = {
    modelo:"camaro",
    marca:"Toyota",
    color:"Rojo",
    puertas:4,
    velocidadMaxima:250,
    velocidadActual:0,
    ano:2023
}

/** ------------ IX ------------ */
console.log(coche);

/** ------------ X ------------ */
coche.arrancar = function () {
    console.log("El coche arranca...");
}
console.log(coche);
coche.arrancar();

/** ------------ XI ------------ */
let circulo = {
    radio:5,
    color:"rojo"
}

/** ------------ XII ------------ */
let areaCirculo = (Math.PI * (Math.pow(circulo.radio,2)));
console.log(areaCirculo);

/** ------------ XIII ------------ */
let rectangulo = {
    ancho:10,
    alto:5
}

/** ------------ XIV ------------ */
let perimetroRectangulo = 2*(rectangulo.ancho+rectangulo.alto);
console.log(perimetroRectangulo);

/** ------------ XV ------------ */
let formas = {...circulo, ...rectangulo}
console.log(formas);

/** ------------ XVI ------------ */
let computadora = {
    marca:"HP",
    modelo:"Pavilion",
    procesador:"Intel Core i7",
    ram:16,
    precio:3500000
}

/** ------------ XVII ------------ */
console.log(computadora.precio);

/** ------------ XVIII ------------ */
computadora.targeta = true;
console.log(computadora);

/** ------------ XIX ------------ */
let mascota = {
    nombre:"Luna",
    especie:"Perro",
    color:"Blanco",
    edad:1
}

/** ------------ XX ------------ */
console.log(mascota.nombre.toUpperCase());

/** ------------ XXI ------------ */
let fruta = {
    nombre:"Manzana",
    color:"Rojo",
    sabor:"Dulce",
    madura:true
}

/** ------------ XXII ------------ */
fruta.esMadura = function () {
    console.log(`Fruta Madura: ${this.madura}`);
}
fruta.esMadura();

/** ------------ XXIII ------------ */
let estudiante = {
    nombre:"David",
    edad:20,
    calificaciones:[5,2,4,3]
}

/** ------------ XXIV ------------ */
let suma = 0;
for (let i = 0; i < estudiante.calificaciones.length; i++) {
    suma = suma + estudiante.calificaciones[i];
}
let  promedio = suma / estudiante.calificaciones.length;
console.log(promedio);

/** ------------ XXV ------------ */
estudiante.aprovado = true;

/** ------------ XXVI ------------ */
let bolsa = {
    tamano: 10,
    color: 'blanco'
}

/** ------------ XXVII ------------ */
bolsa.capacidad = function () {
    console.log(`La capacidad de la bolsa es de: ${bolsa.tamano}`);
}

/** ------------ XXVIII ------------ */
bolsa.cambioColor = function (colorCambiado) {
    this.color = colorCambiado;
}
bolsa.cambioColor("mandarina")
console.log(bolsa);

/** ------------ XXIX ------------ */
let telefono = {
    marca:"Samsung",
    modelo:"Galaxy S20",
    color:"Negro",
    ano:2023,
    sistemaOperativo:"Android"
}

/** ------------ XXX ------------ */
console.log(telefono.sistemaOperativo);

/** ------------ XXXI ------------ */
telefono.memoriaRam = 8;

/** ------------ XXXII ------------ */
let animal = {
    tipo:"canino",
    sonido:"Guaf"
}

/** ------------ XXXIII ------------ */
console.log(animal.sonido);

/** ------------ XXXIV ------------ */
animal.descripcion = function () {
    console.log(`Animal, tipo: ${this.tipo}, sonido: ${this.sonido}`);
}
animal.descripcion();

/** ------------ XXXV ------------ */
let vuelo = {
    aerolinea: "Avianca",
    numeroVuelo: 189237,
    origen: "Bogotá",
    horaSalida: "12:00"
}

/** ------------ XXXVI ------------ */
console.log(`Aerolinea: ${vuelo.aerolinea}, número de vuelo: ${vuelo.numeroVuelo}`);

/** ------------ XXXVII ------------ */
vuelo.destino= "Lima";

/** ------------ XXXVIII ------------ */
let jugador = {
    nombre:"David",
    apellido:"Medina",
    edad:20,
    equipo:"Real Madrid",
    posicion:"Delantero"
}

/** ------------ XXXIX ------------ */
console.log(`Nombre del jugador: ${jugador.nombre}, equipo: ${jugador.equipo}`);

/** ------------ XL ------------ */
jugador.conocerPosicion= function () {
    console.log(`La posición del jugador es: ${this.posicion}`);
}

console.log(jugador);
console.log(jugador.conocerPosicion());
console.log()