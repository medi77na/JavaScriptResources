// //ARRAY DIVERSO
// const arraySimple = ["alfa",1,true,[1,2,3,4,5],{name:"david",lastName:"medina"},false];

// // FORMAS DE CREAR UN ARRAY
// const arraySimple2 = []
// const arraySimple3 = Array("uno","dos","tres")
// const arraySimple4 = new Array(3)

// console.log(arraySimple);
// console.log(arraySimple2);
// console.log(arraySimple3);
// console.log(arraySimple4);

// //Sacar el nombre que está en el objeto de el arraySimple
// const option1 = Array.from(arraySimple[4].name);
// const option2 = arraySimple[4].name.split("")
// console.log(option1);
// console.log(option2);


// //EXAMPLE TWO
// const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

// console.log(alfabet.at(10));
// console.log(alfabet.at( -1)); //Con el at puede acceder desde el final y desde el principio

// alfabet[0] = "ei";
// //Con el at no se puede actualizar, solo obtener información
// // alfabet.at(1) = "bravo";


// // AGREGAR AL INICIO DEL ARRAY
// alfabet.unshift("1");
// console.log(alfabet);

// //Eliminar elementos del array
// alfabet.pop();//Elimina la última posición y dentro de ella misma guarda el retornon  de lo que eliminó
// alfabet.shift();//Elimina la primer posición y dentro de ella misma guarda el retornon  de lo que eliminó
// delete alfabet[2];//Elimina pero deja el espacio vacio en el array
// alfabet.splice(1, 2) //elimina desde la posicion indicada
// alfabet.splice(1, 0, "hola", "adios") //agrega desde la posicion indicada
// console.log(alfabet);

// // CONOCER POSICIÓN DE UN VALOR DENTRO DEL ARRAY
// console.log(alfabet.indexOf("f"));//Nos muestra la posición
// console.log(alfabet.includes("f"));//Boolean si está o no


// //EXAMPLE THREE
// // UNIÓN DE ARRAYS

// const clanGates = [ `david`,"luisa","simon"]
// const clanGosling = ["mariana","kevin","david"]
// const clanGatesAndGosling = clanGates.concat(clanGosling);
// console.log(clanGatesAndGosling);

// // JOIN
// console.log(clanGates.join(","));//JOIN une, SPLIT divide

let arrayNumeros = [];
for (let i = 1; i < 11; i++) {
    arrayNumeros.push(i);
}
console.log(arrayNumeros);
let union = arrayNumeros.join(",");
console.log(union);
arrayNumeros = union.split(",")
console.log(arrayNumeros);
arrayNumeros = arrayNumeros.map(numero => parseInt(numero));
console.log(arrayNumeros);
