/**
 * I
 * Tipos de datos
 */
console.groupCollapsed("Tipos de datos");

let var1 = 12;
let var2 = "123456";
let var3 = "Hola Mundo";
let var4 = true;
let var5 = null;
let var6 = undefined;

console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log(typeof var5);
console.log(typeof var6);

console.groupEnd();

/**
 * II
 * Operadores Aritméticos
 */
console.groupCollapsed("Operadores Aritméticos");

let num1 = 11;
let num2 = 5;
console.log(`Numero 1: ${num1} y número 2: ${num2}`);
console.log(`Suma: ${num1 + num2}`);
console.log(`Resta: ${num1 + num2}`);
console.log(`multiplicación: ${num1 * num2}`);
console.log(`division: ${num1 / num2}`);
console.log(`potencia: ${num1 ** num2}`);
console.log(`residuo: ${num1 % num2}`);
console.groupEnd();

/**
 * III
 * Operadores de incremento y decremento
 */

console.groupCollapsed("Operadores de incremento y decremento");

let numeroParaIncrementar = 5;
console.log(`Número para incrementar: ${numeroParaIncrementar}`);

numeroParaIncrementar++;
console.log(`Incremento: ${numeroParaIncrementar}`);

numeroParaIncrementar--;
console.log(`Decremento: ${numeroParaIncrementar}`);
console.groupEnd();

/**
 * IV
 * Operadores de comparación
 */

console.groupCollapsed("Operadores de comparación");

let respuesta = true;

console.groupCollapsed("Operador de igualdad");
//Operador de igualdad
console.log(4 == 4);//true
console.log(4 == '4');//true
console.log(4 === '4');//false
console.groupEnd();

console.groupCollapsed("Operador de diferencia");
//Operador de diferencia
console.log(4!= 4);//false
console.log(4!= '4');//false
console.log(4!== '4');//true
console.groupEnd();

console.groupCollapsed("operador menor que");
//Operador de menor que
console.log(4 < 4);//false
console.log(5 < 5);//false
console.log(15 <= 15);//true
console.groupEnd();

console.groupCollapsed("operador mayor que");
//Operador de mayor que
console.log(4 > 4);//false
console.log(5 > 5);//false
console.log(15 >= 15);//true
console.groupEnd();

console.groupCollapsed("Operador lógico");
//Operadores lógicos

// AND
console.log(2 < 5 && 2 > 1);//true

// OR
console.log(2 < 5 || 2 < 1);//true

//ANIDADAS
console.log(2<10 && (12 < 10 || 22 > 28));//false

//XOR
console.log(false ^ false); // false
console.log(false ^ true);  // true
console.log(true ^ false);  // true
console.log(true ^ true);   // false

//NOR
let A = true;
let B = true;

let nor = !(A || B);


console.log(nor); // false




console.groupEnd();


console.groupEnd();

