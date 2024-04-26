// //Métodos para reversar
// console.groupCollapsed("Métodos para reversar")
// let array1 = [1,2,3,4,5,6,7,8,9,10];
// let array2 = array1.map(numero => numero*2) //Array que multiplica por 2 el array 1

// console.log(array2);

// let array3 = array1.toReversed();
// console.log(array3);

// // Crear una vista de 10 frutas
// let frutas = ["fresa","mora","piña","manzana","naranja"];

// let reverseFrutas = frutas.map(fruta =>{
//     return (fruta.toUpperCase())
// });
// console.log(reverseFrutas.reverse());
// console.groupEnd();

// //Métodos para ordenar
// console.groupCollapsed("ForEach");

// //Example 1
// let coders = ["Luis","Carlos","Antonio"];
// coders.forEach(function(coder, index){
//     console.log(`El coder ${coder} está en la posición ${index}`);
// });
// console.groupEnd();

//Método EVERY
console.groupCollapsed("Every");

// let numeros = [55,34,67,98,24,56];

// let respuesta = numeros.every(numero => numero>0)//Valida que la condición se cumpla en toda la lista

// console.log(respuesta);

// let pares = [2,4,6,8];
// let respuesta = pares.every(numero => numero%2 == 0);
// console.log(respuesta);

console.groupEnd();

// Método Some
console.groupCollapsed("Método Some");

// let nombres = ["Mateo","Marcos","Lucas"];
// // let checkNombres = nombres.some(nombres => nombres === "Marcos");
// // console.log(checkNombres);

// let nom = prompt("Ingrese el nombre: ");
// let checkNombre = nombres.some(nombres => nombres === nom);
// console.log(checkNombre);

console.groupEnd();

// Método Filter
console.groupCollapsed("Método Filter");3

let numeros = [1,2,4,3,5,2,1,3,4,5]

let pares = numeros.filter(numero =>numero % 2 === 0);
let impares = numeros.filter(numero => numero %2 !== 0)
console.log(pares);
console.log(impares);

console.groupEnd();