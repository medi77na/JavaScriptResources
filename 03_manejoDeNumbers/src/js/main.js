// let myFirstNumber = 2;
// document.writeln(myFirstNumber);

/****** I ******/

// let mySecondNumber = "2";

// console.log(myFirstNumber+mySecondNumber);//Se concatena porque la variable dos es de tipo texto
// console.log(myFirstNumber-mySecondNumber);
// console.log(myFirstNumber*mySecondNumber);
// console.log(myFirstNumber/mySecondNumber);

/****** II ******/

// console.log(typeof myFirstNumber);//Muestra el tipo de dato
// console.log(Number.isInteger(myFirstNumber));//Pregunta si es entero, devuelve booleano

/****** III ******/

// const num1 = 500_000_000_000_000 //Se puede separar con guiones bajos para aumentar la legibilidad
// const num2 = 500000000000000

// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(Number(Infinity));//Trae un valor infinito
// console.log(Number.MAX_VALUE);//Muestra el número MAYOR permitido en el lenguaje
// console.log(Number.MIN_VALUE);//Muestra el número MENOR permitido en el lenguaje
// console.log(Math.PI);//Muestra el número PI

/****** IV ******/

// const exampleNum = 84;

// console.log(exampleNum);
// console.log(exampleNum.toExponential(5));//Muestra el exponencial
// console.log(exampleNum.toString(2));//Muestra el número en binario
// console.log(exampleNum.toString(8));//Muestra el número en octal
// console.log(exampleNum.toString(16));//Muestra el número en hexadecimal

/****** V ******/

// const example = 5.123456789;
// document.write(example);

// console.log(example.toFixed(1));//Deja solo los decimales que le digamos
// console.log(example.toFixed(2));//Deja solo los decimales que le digamos
// console.log(example.toFixed(3));//Deja solo los decimales que le digamos
// console.log(example.toFixed(4));//Deja solo los decimales que le digamos
// console.log(example.toFixed(5));//Deja solo los decimales que le digamos

/****** VI ******/

// const numRound = 3.5;
// document.write(numRound);

// console.log(Math.round(numRound));//Redondea normalmente
// console.log(Math.floor(numRound));//Redondea al número inferior
// console.log(Math.ceil(numRound));//Redondea al número superior
// console.log(Math.trunc(numRound));//Te deja el número sin decimales

/****** VII ******/

// let randomNum = Math.round

// //(Valor superior - valor inferior) + valor inferior
// let numRandom = Math.round(Math.random() * (92 - 90) + 90);//Generar aleatorios entre rangos


// console.log(numRandom);


/****** VIII ******/

// CLASE MATH

// console.log(Math.abs(-50));//Valor absoluto (convierte en positivo)
// console.log(Math.pow(2,3));//Eleva el primer valor por el segundo
// console.log(Math.sqrt(64));//Genera la raiz cuadrada
// console.log(Math.cbrt(27));//Genera la raiz cúbica
// console.log(Math.sign(-23));//Revisa si es positivo o negativo

// let listaNumeros = [1,2,3,4,9];
// console.log(listaNumeros.sort());//Muestra la lista ordenada de menor a mayor
// console.log(Math.max(...listaNumeros));//Muestra el valor mayor en la lista
// console.log(Math.max(1,2,3,4,9));//Muestra el valor máximo
// console.log(Math.min(1,2,3,4,9));//Muestra el valor mínimo


// ///------------------------60------------------------\\\

// let diagm = 12

// let diagM = 16

// let areaRombo = ((diagM*diagm)/2)

// console.log(areaRombo)

// ///------------------------61------------------------\\\

// let base1 = 8
// let base2 = 12
// let altura = 6

// let aPTrapecio = ((base1+base2)/2)

// let areaTrapecio = (aPTrapecio*altura)

// console.log(areaTrapecio)

// ///------------------------62------------------------\\\

// let numt = 9

// for (let i = 0; i < 11; i++) {
//     console.log("9 x",i,"=",numt*i);
// }

// ///------------------------63------------------------\\\

// let numE1 = 25

// let numE2 = 30

// let numE3 = 35

// if (numE1 > numE2 && numE1 > numE3) {
//     console.log("El numero 1 es mayor.");
// } else if (numE2 > numE1 && numE2 > numE3) {
//     console.log("El numero 2 es mayor.");
// } else {
//     console.log("El numero 3 es mayor");
// }

// ///------------------------64------------------------\\\

// let nume1 = 85

// let nume2 = 95

// let nume3 = 110

// if (nume1 < nume2 && nume1 < nume3) {
//     console.log("El numero 1 es menor");
// } else if (nume2 < nume1 && nume2 < nume3) {
//     console.log("El numero 2 es menor");
// } else {
//     console.log("El numero 3 es menor");
// }

// ///------------------------65------------------------\\\
//Calcular el promedio de 8, 10 y 14.

// console.log((8+10+14)/3);


// ///------------------------66------------------------\\\
// //Calcular la factorial de 8.

// let factorial = 1;
// for (let i = 1; i <= 8; i++) {
//     factorial *= i;
// }
// console.log(factorial);


// ///------------------------67------------------------\\\
// //Redondear el número 9.2.

// console.log(Math.round(9.2));


// ///------------------------68------------------------\\\
// //Calcular el doble de 18.

// console.log(18*2);


// ///------------------------69------------------------\\\
// //Calcular el triple de 7.

// console.log(7*3);

// #70 CALCULAR DEL CUADRADO (calcular el cuadrado de 10)

// let numb1 = 10
// console.info((numb1).toExponential(2))
// document.write(numb1)


// #71 CALCULAR EL CUBO ( calcular el cubo de 5)

// let numb2 = 5
// console.info((numb2).toExponential(3))
// document.write(numb2)


//  #72 CALCULAR SUMA DE PRIMEROS 20 NÙMEROS NATURALES

// let suma = 0;
// for (let i = 0; i < 21; i++) {
//     suma = suma+i;
// }
// console.log(suma);
//document.write(suma)


// #73 CALCULAR LA RESTA ENTRE 200 Y 75.

// let numb1 = 200
// let numb2 = 75
// let resta = numb1 - numb2
// console.log(resta)
//document.write(resta)


// #74 MULTIPLICAR 9 POR 11.

// let numb1 = 9
// let numb2 = 11
// let multiplicar = numb1 * numb2
// console.log(multiplicar)
//document.write(multiplicar)


// #75 DIVIDIR 300 POR 25

// let numb1 = 300
// let numb2 = 25
// let dividir = numb1 / numb2
// console.log(dividir)
//document.write(dividir)


// #76 OBTEN EL MODULO DE 30 DIVIDIDO POR 9

// let numb1 = 30
// let numb2 = 9
// console.log(numb1 % numb2)


// #77 GENERAR UN NÙMERO ALEATORIO ENTRE 60 Y 70

// const nummeroAleatorio = Math.trunc(Math.random() * (70 - 60 + 1) + 60)
// document.write(nummeroAleatorio)


// #78 ELEVAR 4 A LA POTENCIA DE 5,

// let numb2 = 4
// console.info((numb2).toExponential(5))
// document.write(numb2)


// #79  CALCULAR LA RAÍZ CUADRADA DE 196.

// let numb1 = 196
// console.log(Math.sqrt(numb1))
// document.write(numb1)



// // Convertir 120 grados Celsius a Fahrenheit.

// let cent = 120;
// let fah = cent * (9/5)+32;
// console.log("De centigrados a fahreneit es: ", fah);


// //Calcular el área de un rectángulo de base 10 y altura 15.

// let base = 10;
// let altura = 15;
// let area = base * altura;
// console.log("El área es: ",area);


// //Calcular el perímetro de un círculo con radio 10.

// let radio = 10;
// let perimetro = Math.PI * (Math.pow(radio,2));
// console.log(perimetro.toFixed(2));


// //Calcular el volumen de un cubo con lado 6.

// let lado=6;
// volumen = Math.pow(lado,3);
// console.log(volumen);

// //Calcular el área de un rombo con diagonales de 14 y 18

// diagonal1 = 14
// diagonal2 = 18
// area = (diagonal1*diagonal2)/2;
// console.log(area);


// //Calcular el área de un trapecio con bases 10 y 15 y altura 8.

// let base1 = 10;
// let base2 = 15;
// altura = 8;
// area = ((base1*base2)*altura)/2
// console.log(area);


// //Generar la tabla de multiplicar del número 10.

// let tabla = 10;
// for (let i = 0; i <= 10; i++) {
//     console.log(tabla*i);
// }


// //Encontrar el número mayor entre 35, 40 y 45.

// let lista = [35,40,45];
// console.log(Math.max(...lista));


// //Encontrar el número menor entre 90, 105 y 120.

// lista = [90,105,120];
// console.log(Math.min(...lista));


// //Calcular el promedio de 9, 11 y 15.

// console.log((9+11+15)/3);


// //Calcular la factorial de 9

// let num = 9;
// let resultado = 1;
// for (let i = 1; i <= numero; i++) {
//   resultado *= i;
// }
// console.log("El factorial de", numero, "es", resultado);


// //Redondear el número 10.8.

// let nums = 10.8;
// console.log(Math.round(nums));


// //Calcular el doble de 21.

// let num = 21;
// console.log(Math.pow(num,2));


// //Calcular el triple de 8.

// let num = 8;
// let triple = num * 3;
// console.log(triple);


// //Calcular el cuadrado de 12.

// let num = 12;
// console.log(Math.pow(num,2));


// //Calcular el cubo de 6.

// let num = 6;
// console.log(Math.pow(num,3));


// //Calcular la suma de los primeros 25 números naturales.

// let suma = 0;
// for (let i = 0; i <= 25; i++) {
//     suma += i;
// }
// console.log(suma);
