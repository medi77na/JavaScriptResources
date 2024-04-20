// string declaration

let singleQuotationMark = 'Hello world';
let doubleQuotationMark = "Hello world";

console.info('singleQuotationMark');
console.info("doubleQuotationMark");

const fullName="David Steven Medina Urrego";
const dateOfBirth="02/09/2003";
const placeOfBirth="Bogotá";
const numberOfCharacters = fullName.length;
let letterExtraction = fullName[6];
let letterExtractionTwo = fullName.charAt(7);

console.table("number of characters in my name: " + numberOfCharacters);
console.table("Letter extraction: " + letterExtraction);
console.info("Letter extraction: " + letterExtractionTwo)

let header = `<header>
<h1>Hola, mi nombre es ${fullName}, nací el ${dateOfBirth} en ${placeOfBirth}.</h1>
</header>`;

document.write(header)

// Devuelven si o no la cadena comienza, termina o contiene una subcadena especificada.
const message = "hola mundo"
console.log(message.startsWith("familia")) // false
console.log(message.startsWith("hola")) // true
console.log(message.includes("mundo")) // true
console.log(message.includes("soy")) // false
console.log(message.endsWith("lo que sea")) // false
console.log(message.endsWith("undo")) // true



 