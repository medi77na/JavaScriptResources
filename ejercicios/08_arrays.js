/** ---------- I ----------- */
let frutas = ["fresa","mandarina","naranja","pera","frambuesa"];

/** ---------- II ----------- */
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

/** ---------- III ----------- */
frutas.forEach(element => {
    console.log(element.toUpperCase());
});

/** ---------- IV ----------- */
let numeros = [1,2,3,4,5,6,7,8,9,10];

/** ---------- V ----------- */
bandera=0;
while (bandera < numeros.length) {
    console.log(numeros[bandera]);
    bandera++;
}

/** ---------- VI ----------- */
frutas.push("kiwi");

/** ---------- VII ----------- */
numeros.splice(1,1);
console.log(numeros);

/** ---------- VIII ----------- */
console.log(numeros.reverse()); 

/** ---------- IX ----------- */
console.log(numeros.sort());

/** ---------- X ----------- */
function buscarFruta(fruta) {
    let existencias = false;
    frutas.forEach(element => {
        if (element == fruta) {
            existencias = true;
        }
    });
    console.log(`${fruta} existe: ${existencias}`);
}
buscarFruta("papaya");

/** ---------- XI ----------- */
console.log(frutas[0]);

/** ---------- XII ----------- */
console.log(numeros.at(-1));

/** ---------- XIII ----------- */
frutas.forEach(element => {
    console.log(element.split(","));
});

/** ---------- XIV ----------- */
for (const iterator of numeros) {
    console.log(iterator);
}

/** ---------- XV ----------- */
let numerosDoble = numeros.map(numero => numero*2);

/** ---------- XVI ----------- */
let array1 = [1,2,3];
let array2 = [4,5,6];

/** ---------- XVII ----------- */
function sumaArrays(array) {
    let suma = 0;
    array.forEach(element => {
        suma += element;
    });
    return suma;
}
console.log(sumaArrays(array1));
console.log(sumaArrays(array2));

/** ---------- XVIII ----------- */
function buscarNumero(number) {
    let existencias = false;
    numeros.forEach(element => {
        if (element == number) {
            existencias = true;
        }
    });
    console.log(`${number} existe: ${existencias}`);
}
buscarNumero(10);

/** ---------- XIX ----------- */
edades = [18,15,29,26,24];

/** ---------- XX ----------- */
let mayoresEdad = edades.filter(edad => edad>17)
console.log(mayoresEdad);

/** ---------- XXI ----------- */
// Crea un array llamado precios que contenga al menos 3 números (precios de productos)
let precios = [5300,2500,2800];

/** ---------- XXII ----------- */
// Utiliza el método map para crear un nuevo array llamado preciosConIVA que contenga los
// precios con un 21% de IVA aplicado a cada uno
let preciosConIVA = precios.map(precio => precio+(precio*0.21));
console.log(preciosConIVA);

/** ---------- XXIII ----------- */
// Crea un array llamado duplicados que contenga algunos números duplicados
let duplicados = [1,2,3,3,4,5,6,7,1,3,6,8,8,9,4,3]

/** ---------- XXIV ----------- */
// Elimina los elementos duplicados del array duplicados y muestra el nuevo array sin
// duplicados en la consola.

// Creamos un nuevo objeto Set a partir del array 'duplicados'.
// El objeto Set elimina automáticamente los elementos duplicados.
let unicos = [...new Set(duplicados)];
console.log(unicos);

/** ---------- XXV ----------- */
let arrayNNombre1 = ["Javier","Luis","Carmelo"];
let arrayNNombre2 = ["Valentina","Laura","Daniela"];

/** ---------- XXVI ----------- */
// Concatena los dos arrays en uno nuevo llamado concatenado y muestra el resultado en la
// consola
let concatenado = arrayNNombre1.concat(arrayNNombre2);
console.log(concatenado);

/** ---------- XXVII ----------- */
// Crea un array llamado colores que contenga al menos 5 colores diferentes.
let colores = ["red","green","yellow","blue","white"];

/** ---------- XXVIII ----------- */
// Cuenta cuántos elementos tiene el array colores y muestra el resultado en la consola
console.log(colores.length);



