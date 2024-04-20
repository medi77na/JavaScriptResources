// // #1 VERIFICA SI UN NÙMERO ES POSITIVO.
// let positive = 50;

// if (positive >= 0) {
//     console.log(`El número ${positive} es positivo`);
// } else {
//     console.log(`El número ${positive} no es positivo`);
// }

// // #2 VERIFICA SI UN NÙMERO ES NEGATIVO.
// let negative = -80;

// if (negative <= 0) {
//     console.log(`El número ${negative} es negativo`);
// } else {
//     console.log(`El número ${negative} no es negativo`);
// }

// // #3 COMPRUEBA SI UN NÙMERO ES PAR.
// let par = 20;

// if (par % 2 === 0) {
//     console.log(`El número ${par} es par`);
// }

// // #4 COMPRUEBE SI UN NÙMERO ES IMPAR.
// let impar = 9;

// if (impar % 2 !== 0) {
//     console.log(`El número ${impar} es impar`);
// }

// // #5 DETERMINE SI UN NÙMERO ES MÙLTIPLO DE 5.
// let multiplo = 30;

// if (multiplo % 5 === 0) {
//     console.log(`El número ${multiplo} es múltiplo de 5`);
// }

// // #6 VERIFICA SI UN NÙMERO ES DIVISIBLE ENTRE 3.
// let divisible = 21;

// if (divisible % 3 === 0) {
//     console.log(`El número ${divisible} es divisible entre 3`);
// }

// // #7 DETERMINA SI UN NÙMERO ES MAYOR QUE 100.
// let number = 105;

// if (number > 100) {
//     console.log(`El número ${number} es mayor que 100`);
// }

// // #8 Verifica si un número es menor que -50.
// let numero = Math.floor(Math.random() * 101)-100;
// if (numero > (-50)) {
//     console.log(`${numero} NO es menor que -50`);
// } else {
//     console.log(`${numero} es menor que -50`);
// }

// // #9 Comprueba si un número está en el rango de 20 a 50.

// let numero = Math.floor(Math.random() * 50)+10;

// if (numero <= 50 && numero >= 20) {
//     console.log(`${numero} está en el rango`);
// } else {
//     console.log(`${numero} NO está en el rango`);
// }

// // EJERCICIO 10
// // Determina si un número es igual a 0.

// const numero = Math.floor(Math.random() *3);

// if (numero == 0) {
//     console.log(`${numero} es igual a 0.`);
// }else{
//     console.log(`${numero} no es igual a 0.`);
// }

// //EJERCICIO 11
// // Verifica si un número es mayor que -10 y menor que 10.

// const numero = Math.floor(Math.random() *41)-20;

// if ((numero > -10)&&(numero < 10)) {
//     console.log(`Es mayor que -10`);
// } else {
//     console.log(`Es menor que -10`);
// }

// // EJERCICIO 12
// // Determina si un número es un año bisiesto.

// const numero = Math.floor(Math.random() *3000);


// if ((numero % 4 == 0) && ((numero % 100!= 0) || (numero % 400 == 0))) {
//     console.log(`El año es bisiesto.`);
// } else {
//     console.log(`El año no es bisiesto.`);
// }

// // EJERCICIO 13
// // Verifica si una persona es mayor de edad (mayor o igual a 18 años).

// const edad = Math.floor(Math.random() *36);

// if (edad >= 18) {
//     console.log(`La persona es mayor de edad`);
// } else {
//     console.log(`La persona es menor de edad`);
// }


// // EJERCICIO 15
// // Verifica si un número es un cuadrado perfecto.

// const numero = Math.floor(Math.random() *100);
// const raizCuadrada = Math.sqrt(numero);

// if (raizCuadrada === Math.floor(raizCuadrada)) {
//     console.log(`${numero} es un cuadrado perfecto`);
// } else {
//     console.log(`${numero} no un cuadrado perfecto`);
// }

// //EJERCICIO 16
// // Determina si un número es un número de Fibonacci.
//     let a = 0;
//     let b = 1;
//     let c = 0;

//     let numeroEvaluar = parseInt(prompt("Digite el número que sea enncontrar en la serie Fibonacci"))

//     while (c <= numeroEvaluar) {
//         c = a + b;
//         a = b; 
//         b = c;
//     }

//     const numFibo = c-(c - a);

//     if (numeroEvaluar == numFibo) {
//         console.log("El Número está en la serie Fibonacci");
//     }else{
//         console.log("El Número no está en la serie Fibonacci");
//     }


// // EJERCICIO 17
// // Verifica si un número es una potencia de 2.

// const numero = Math.floor(Math.random() * 100);

// if ((numero & (numero - 1)) === 0) {
//     console.log(`Es potencia de dos. ${numero}`);
// } else {
//     console.log(`No es potencia de dos. ${numero}`);
// }

// // EJERCICIO 18
// // Determina si un número es un palíndromo.

// let numero = Math.floor(Math.random() *1000);
// numero = numero.toString();
// let palindromo = numero.split('').reverse().join('');//Seapara la cadena en una lista, la voltea al revés y la vuelve a convertir en cadena

// if (numero === palindromo) {
//     console.log(`${numero} es palíndromo`);
// } else {
//     console.log(`${numero} No es palíndromo`);
// }

// // EJERCICIO 19
// // Verifica si una cadena de texto contiene la palabra "JavaScript".

// const enunciado = "Lenguaje para WEB: JavaScript";

// if (enunciado.includes("JavaScript")) {
//     console.log(`Contiene la palabra JavaScript`);
// } else {
//     console.log(`NO contiene la palabra JavaScript`);
// }

// // EJERCICIO 20
// // Determina si una cadena tiene más de 10 caracteres.

// const cadena = "Hola, Bienvenido al lenguaje JavaScript";

// if (cadena.length > 10) {
//     console.log(`La cadena tiene más de 10 caracteres`);
// } else {
//     console.log(`La cadena tiene menos de 10 caracteres`);
// };

// // EJERCICIO 21
// // Verifica si una cadena de texto está en minúsculas.

// let cadena = "Hola, estar en Riwi es una bendición";
// let cadenaMinuscula = cadena.toLocaleLowerCase();

// if (cadena === cadenaMinuscula) {
//     console.log(`La cadena es minúscula`);
// } else {
//     console.log(`La cadena no es minúscula`);
// }