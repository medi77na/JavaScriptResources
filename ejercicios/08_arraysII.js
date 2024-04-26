// /** ---------- I ---------- */
// // Crea un lista que almacene 10 nombres completos y ordenados alfabéticamente

// let nombres = [
//     "Juan Perez Garcia",
//     "Maria Rodriguez Lopez",
//     "Luis Martinez Fernandez",
//     "Ana Gonzalez Sanchez",
//     "Pedro Sanchez Gomez",
//     "Laura Diaz Perez",
//     "Carlos Fernandez Rodriguez",
//     "Sofia Gomez Martinez",
//     "Diego Lopez Gonzalez",
//     "Elena Perez Fernandez"
// ];

// nombres = nombres.sort();

// /** ---------- II ---------- */
// // Utilizar un bucle for para sumar todos los elementos de un array de números

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let suma = 0;
// numeros.forEach(element => {
//     suma += element
// });
// console.log(suma);

// /** ---------- III ---------- */
// // Iterar sobre las propiedades de un objeto utilizando un bucle for...in e imprimir sus valores.
// let persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 30,
//     sexo: "M"
// };

// for (const value in persona) {
//     console.log(value);
// }

// /** ---------- IV ---------- */
// // Utilizar un bucle for...of para sumar todos los números de un array.
// let sum = 0;
// let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const iterator of numeros2) {
//     sum += iterator;
// }
// console.log(sum);

// /** ---------- V ---------- */
// // Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de
// // strings.

// let arrayStrings = ["Juan", "Maria", "Luis", "Ana", "Pedro", "Laura", "Carlos", "Sofia", "Diego", "Elena"];

// arrayStrings.forEach(element => {
//     console.log(element);
// });

// /** ---------- VI ---------- */
// // Utilizar el método map() para obtener un nuevo array con cada elemento de un array de
// // números multiplicado por 2

// let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let multiplicados = numeros.map(numero => numero*2)
// console.log(multiplicados);

// /** ---------- VII ---------- */
// let numFiltrado = numeros3.filter(numero => numero % 2 == 0);
// console.log(numFiltrado);

// /** ---------- VIII ---------- */
// // Utilizar el método some() para comprobar si al menos uno de los elementos de un array de
// // números es mayor que 10.

// let mayor10 = numeros3.some(numero => numero > 10);

// /** ---------- IX ---------- */
// // Utilizar el método every() para comprobar si todos los elementos de un array de números
// // son positivos

// let numPositivos = numeros3.every(numero => numero >= 0)
// console.log(numPositivos);

// /** ---------- X ---------- */
// // Utilizar el método sort() para ordenar un array de números de menor a mayor.

// let nums = [3,2,1];
// console.log(nums.sort());

// /** ---------- XI ---------- */
// let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// console.log(nums.reverse());

// /** ---------- XII ---------- */
// // Crear una función toReversed() que tome un array y devuelva un nuevo array con los
// // elementos en orden inverso

// let nums = [1,2,3,4,5,6,7,8,9,10]

// let nums2 = nums.toReversed();
// console.log(nums2);

// /** ---------- XIII ---------- */
// // Utilizar el método forEach() para calcular la suma de todos los elementos de un array de
// // números.
// let nums = [1,2,3,4,5,6,7,8,9,10];
// let suma = 0;
// nums.forEach(element => {
//     suma += element;
// });

// /** ---------- XIV ---------- */
// // Iterar sobre las propiedades de un objeto y contar cuántas son de tipo string utilizando un
// // bucle for...in.

// let persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 30,
//     sexo: "M",
//     casado: true
// };

// for (const key in persona) {
//     if (typeof(persona[key]) === "string") {
//         console.log(key);
//     }
// }

// /** ---------- XV ---------- */
// // Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de
// // objetos

// let arrayStrings = ["Juan", "Maria", "Luis", "Ana", "Pedro", "Laura", "Carlos", "Sofia", "Diego", "Elena"];

// arrayStrings.forEach(element => {
//     console.log(element);
// });

// /** ---------- XVI ---------- */
// // Utilizar el método map() para obtener un nuevo array con la longitud de cada string en un
// // array dado

// let arrayStrings = ["Juan", "Maria", "Luis", "Ana", "Pedro", "Laura", "Carlos", "Sofia", "Diego", "Elena"];
// let long = arrayStrings.map(nombre => nombre.length);

// console.log(long);

// /** ---------- XVII ---------- */
// // Utilizar el método filter() para obtener un nuevo array con solo las strings que contengan la
// // letra 'a' en un array dado

// let arrayStrings = ["Juan", "Maria", "Luis", "Ana", "Pedro", "Laura", "Carlos", "Sofia", "Diego", "Elena"];
// let arrayA = arrayStrings.filter(string => {
//     if (string.includes("a") || string.includes("A")) {
//         return string
//     }
// });
// console.log(arrayA);

// /** ---------- XVIII ---------- */
// // Utilizar el método some() para comprobar si alguna string en un array dado tiene una
// // longitud mayor que 10 caracteres.

// let arrayStrings = ["perro","gato","dinosaurio","rinoseronte","hipopotamo"];
// let arrayMay = arrayStrings.some(strings => {
//     if (strings.length >= 10) {
//         return strings
//     }
// })
// console.log(arrayMay);

// /** ---------- XIX ---------- */
// // Utilizar el método every() para comprobar si todas las strings en un array dado contienen
// // al menos una vocal.


// let arrayStrings = ["perro","gato","dinosaurio","rinoseronte","hipopotamo"];

// //Se coloca expresión regular para saber si tiene alguna vocal y devuelve 
// // true o false según sea el caso
// let contieneVocal = arrayStrings.some(string => /[aeiou]/i.test(string));
// console.log(contieneVocal);


// /** ---------- XX ---------- */
// // Dado un array de objetos que representan libros con propiedades titulo y paginas, utilizar
// // filter() para obtener un nuevo array con solo los libros que tengan más de 300 páginas

// let libros = [
//     {
//         titulo:"Programación",
//         paginas:350
//     },
//     {
//         titulo:"Algebra",
//         paginas:425
//     },
//     {
//         titulo:"Cocina",
//         paginas:150
//     },
//     {
//         titulo:"Pintura",
//         paginas:210
//     }
// ]

// let mayPaginas = libros.filter(libro => libro.paginas>300);
// console.log(mayPaginas);


/** ---------- XXI ---------- */
// Dado un array de números, utilizar filter() para obtener un nuevo array con solo los
// números que sean divisibles por 3.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let div3 = numeros.filter(numero => {
    if (numero % 3 === 0) {
        return numero
    } 
})
console.log(div3);