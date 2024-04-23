// /** ---------- I ---------- */
// // //MÉTODO SIN OBJETOS
// // const fullName = "David Medina";
// // const email = "medina@gmail.com";

// // function saludar() {
// //     console.log(`Hi, my name is ${fullName}`);
// // }

// // console.log(fullName);
// // console.log(email);


//MÉTODO CON OBJETOS
const coderRiwi = {
    name: "David",
    lastName: "Medina",
    birthDate: new Date("2003-09-02:12:00:00"),
    rh: "O+",
    Location: {
        country: "colombia",
        state: "cundinamarca",
        city: "bogota",
        adress: "cl 43",
    },
    phone: "3226557188",
    skills: ["python", "java", "javascript"],
    email: "medina@gmail.com",
    //No necesito nombre de la función porque ya lo lleva la variable
    saludar: function () {
        console.log(`Mi nombre es ${this.name} ${this.lastName}`);
    }
}

// //MÉTODOS PARA IMPRIMIR EL OBJETO:
// console.log(coderRiwi.email);
// console.log(coderRiwi['email']);
// console.log(coderRiwi.Location.adress);
// console.log(coderRiwi['Location']['adress']);
// console.log(coderRiwi.skills[2]);
// coderRiwi.saludar();

//ADICIONAR ELEMENTO AL OBJETO
coderRiwi["typeDocument"] = "Cédula de ciudadanía"; //Primer Forma
coderRiwi.identificationNumber = "1000951965";    //Segunda Forma

// console.log(coderRiwi);


// //Modificar un elemento existente
// coderRiwi.name = "Steven";//Primera Forma
// coderRiwi['lastName'] = "urrego"; //Segunda Forma
//Tercer Forma
Object.defineProperty(coderRiwi,"clan",{
    value: "Linux",
    writable: true,      //Permite modificar la propiedad
    enumerable: true,    //Permite que la propiedad aparezca
    configurable: true  //Permite que la propiedad pueda ser eliminada
})

//Agregar contacto emergencia
coderRiwi.emergencyContact = {
    contactName: "Mariana Patiño",
    phoneNumber: "3226557188",
    optionalPhoneNumber: "3204131854"
}

// //Destruir la propiedad
// delete coderRiwi.clan
// coderRiwi.clan = undefined

// console.log(coderRiwi);

// /** ---------- II ---------- */
// // ASIGNA OBJETOS
// const obj1 = {
//     a: "uno",
// }
// const obj2 = {
//     b: "dos",
// }
// const sumaObjetos = Object.assign(obj1, obj2)
// console.log(obj1);
// console.log(obj2);
// console.log(sumaObjetos);

// //SUMA OBJETOS
// const obj3 = {
//     a: "tres",
// }
// const obj4 = {
//     b: "cuatro",
// }
// const sumaV2 = { ...obj3, ...obj4 }

// console.log(obj3);
// console.log(obj4);
// console.log(sumaV2);

// //desestructurar objetos
// const exampleObject = {
//     userName: "jhon diaz",
//     userEmail: "jhon@gmail.com",
//     userPassword: "jhon123*"
// }

// //PRIMERA FORMA
// const userName = exampleObject.userName;
// let userEmail = exampleObject.userEmail;
// let userPassword = exampleObject.userPassword;

// //SEGUNDA FORMA
// let { 
//     userName, 
//     userEmail, 
//     userPassword 
// } = exampleObject;

// //TERCER FORMA
// let { 
//     userName: user, 
//     userEmail: email, 
//     userPassword: password 
// } = exampleObject;

let {
    name: nameCoder,
    lastName,
    // 
    Location:{
        adress:direccion
    },
    email:emailCoder
} = coderRiwi

console.log(nameCoder);
console.log(lastName);
console.log(direccion);
console.log(emailCoder);