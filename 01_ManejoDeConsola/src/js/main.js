//Variables 

let userName = prompt("Escribe tu nombre");
let lastName = prompt("Escribe tu apellido");
let address = prompt("Escribe tu dirección");
let phone = prompt("Escribe tu número de telefono");
const age = parseInt(prompt("Escribe tu edad"));
const email = prompt("Escribe tu correo");


//Tipos de console

console.log(userName, lastName, age);
console.warn(userName + lastName + age);
console.error(`${userName} con apellidos ${lastName} y edades ${age}`);
console.error(lastName);
console.warn(age);
//console.debug(address)
console.info(address);
console.assert(2 + 2 === 5, "¡Error matemático!"); // Esto mostrará un mensaje de error en la consola porque la expresión es falsa

//Console con estilos

console.log(`%c${phone}`, "background-color: #D9CEFF; border-radius: 50px; font-weight: bold; padding: 5px 8px");

//Concatenación:

//Primera forma
console.log("nombre " + userName);
//Segunda forma
console.log("nombre", userName);
//Tercera forma
console.log(`Mi correo es ${email}, vivo en la dirección ${address} y mi telefono es ${phone}`);

//Uso de console.group

console.group("Data basic contact information");
console.log("User email", email);
console.log("Last address", address);
console.log("Phone", phone);
console.groupEnd();

console.group("Data basic information");
console.log("User name", userName);
console.log("Last name", lastName);
console.log("Age", age);
console.groupEnd();

//Listas

listCodersGates = ["lupe ortiz", "mario zapata", "pedro pascal"]
console.info(listCodersGates)
console.table(listCodersGates)


//Para poner estilos al alert uso sweetalert

Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "question"
});