/** ------------------- I -------------------- */
// fruitsList = ["mango maduro","banano biche","manzana madura","pera biche","piña madura","sandía biche","fresa madura"];

// fruitsList.forEach(fruits => {
//     let name = fruits.split(" ");//Divide en dos el nombre de la fruta por el espacio.
//     let firstLetter = name[0].charAt(0);//Escoge la primer palabra de name y el primer caracter del mismo
//     let concatName = firstLetter.concat("-",name[1]);//concatena la primera letra con el apellido
//     console.info(fruits, "=>", concatName);//muestra nombre completo más concatenación
// });


/** ------------------- II -------------------- */
// //Employees List

// let employees = new Map();
// employees.set('001','Juan Torrez');
// employees.set('002','Luiz Díaz');
// employees.set('003','Carlos Jimenez');
// employees.set('004','Martha Carrazcal');
// employees.set('005','Daniela Quintero');

// // Obtener el nombre de un empleado por su identificador único
// console.log(employees.get('001')); 

// // Verificar si un empleado está en el mapa
// console.log(employees.has('002')); // Imprime: true

// // Eliminar un empleado del mapa
// employees.delete('003');

// // Obtener el tamaño del mapa (cantidad de employees)
// console.log(employees.size);

// employees.forEach((nombre, id) => {
//     // console.log(`Empleado ${id}: ${nombre}`);
//     let name = nombre.split(" ");//Separamos el nombre por el espacio
//     let firstLetters = [name[0].charAt(0).toLowerCase(),name[1].charAt(0).toLowerCase()]; //Convierto la primera letra de cada palabra a minuscula 
//     console.log(`Nombre: ${nombre}, Abreviación: ${firstLetters[0]}${firstLetters[1]}`);//Concateno lo anterior
// });


/** ------------------- III -------------------- */
// //for each with objects

// const coderRiwi = {
//     name:"David Steven",
//     lastName: "Medina Urrego",
//     height:"178",
//     birthDate: new Date("2003-09-02:00:00"),
//     id:"1000951965",
//     email:"medina@gmail.com" 
// };

// console.table(coderRiwi)
// console.info(Object.keys(coderRiwi));//Muestra solo las claves del objeto
// console.info(Object.values(coderRiwi));//Muestra solo los valores del objeto

// console.log("Hola Mateo: ",coderRiwi.id);

// Object.keys(coderRiwi).forEach(key =>{
//     console.log(coderRiwi[key]);
// })

// for (const key in coderRiwi) {
//     console.log(key);
// }

// // Usando for...in para iterar sobre las propiedades propias del objeto
// for (const key in coderRiwi) {
//     if (coderRiwi.hasOwnProperty(key)) {
//         console.log(key + ": " + coderRiwi[key]);
//     }
// }
// console.log(Object.entries(coderRiwi));//Convierte el objeto a array


/** ------------------- IV -------------------- */

listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 35,
        puesto: "Analista de Negocios",
        salario: 55000
    }
]
listaEmpleados.forEach(empleado => {
    // document.writeln(`${empleado.nombre}`)
    // console.info(`${empleado.nombre}`)
    if (empleado.edad == 35) {
        console.log(empleado);
    }
})

for (const mateo in listaEmpleados) {
    console.log(mateo);
}

// numeros = []
// pares = []
// paresv2 = []

// // for(let i = 0; i <= 100 ; i++) {
// //     numeros.push(i);
// // }
// // console.log(numeros);

// for(let i = 0; i <= 100 ; i++) {
//     if (i%2==0) {
//         paresv2.push(i)
//     }
//     numeros.push(i);
// }

// numeros.forEach(element => {
//     if (element%2==0) {
//         pares.push(element)
//     }
// });

// console.log(numeros);
// console.log(pares);
// console.log(paresv2);

// // .map: Recorre y guarda en una variable
// // .filter: filtra según la condición