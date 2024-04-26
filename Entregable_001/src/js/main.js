let mascotas = [
    {
        nombre: "Luna",
        especie: "Perro",
        raza: "Doberman",
        edad: 1,
        peso: 20,
        estado: "estable",
        nombrePropietario: "David Medina",
        documentoPropietario: "123456789",
        telefonoPropietario: "123456789",
        correoPropietario: "davidmedina@gmail.com"
    },
    {
        nombre: "Toby",
        especie: "Perro",
        raza: "Labrador",
        edad: 3,
        peso: 25,
        estado: "crítico",
        nombrePropietario: "Laura González",
        documentoPropietario: "987654321",
        telefonoPropietario: "987654321",
        correoPropietario: "lauragonzalez@gmail.com"
    },
    {
        nombre: "Whiskers",
        especie: "Gato",
        raza: "Siamés",
        edad: 2,
        peso: 12,
        estado: "estable",
        nombrePropietario: "Carlos Pérez",
        documentoPropietario: "567890123",
        telefonoPropietario: "567890123",
        correoPropietario: "carlosperez@gmail.com"
    },
    {
        nombre: "Buddy",
        especie: "Perro",
        raza: "Golden Retriever",
        edad: 4,
        peso: 30,
        estado: "crítico",
        nombrePropietario: "Ana Martínez",
        documentoPropietario: "234567890",
        telefonoPropietario: "234567890",
        correoPropietario: "anamartinez@gmail.com"
    },
    {
        nombre: "Simba",
        especie: "Gato",
        raza: "Persa",
        edad: 5,
        peso: 15,
        estado: "estable",
        nombrePropietario: "María Rodríguez",
        documentoPropietario: "345678901",
        telefonoPropietario: "345678901",
        correoPropietario: "mariarodriguez@gmail.com"
    },
    {
        nombre: "Rocky",
        especie: "Perro",
        raza: "Bulldog Francés",
        edad: 2,
        peso: 18,
        estado: "crítico",
        nombrePropietario: "Juan Pérez",
        documentoPropietario: "456789012",
        telefonoPropietario: "456789012",
        correoPropietario: "juanperez@gmail.com"
    },
    {
        nombre: "Coco",
        especie: "Perro",
        raza: "Chihuahua",
        edad: 2,
        peso: 5,
        estado: "estable",
        nombrePropietario: "Luisa Gómez",
        documentoPropietario: "890123456",
        telefonoPropietario: "890123456",
        correoPropietario: "luisagomez@gmail.com"
    },
    {
        nombre: "Bella",
        especie: "Gato",
        raza: "Maine Coon",
        edad: 3,
        peso: 20,
        estado: "crítico",
        nombrePropietario: "Elena Martínez",
        documentoPropietario: "901234567",
        telefonoPropietario: "901234567",
        correoPropietario: "elenamartinez@gmail.com"
    },
    {
        nombre: "Max",
        especie: "Perro",
        raza: "Dálmata",
        edad: 1,
        peso: 22,
        estado: "estable",
        nombrePropietario: "Mario Pérez",
        documentoPropietario: "678901234",
        telefonoPropietario: "678901234",
        correoPropietario: "marioperez@gmail.com"
    },
    {
        nombre: "Sasha",
        especie: "Gato",
        raza: "Siamesa",
        edad: 4,
        peso: 14,
        estado: "crítico",
        nombrePropietario: "Lucía Rodríguez",
        documentoPropietario: "789012345",
        telefonoPropietario: "789012345",
        correoPropietario: "luciarodriguez@gmail.com"
    }
];

//INICIO DE LÓGICA DE PROGRAMA
console.log("BIENVENIDOS AL SISTEMA DE GESTIÓN DE MASCOTAS");

//Función para mostrar el menú
function mostrarMenu() {
    let option = parseInt(prompt("MENÚ DE OPCIONES:\n\n1. Listar mascotas.\n2. Agregar mascota.\n3. Editar mascota.\n4. Eliminar mascota.\n5. Salir.\nIngrese una opción: "));
    return option;
}

//Definicion de variable globales
let option

do {
    option = mostrarMenu()
    switch (option) {
        case 1:
            console.log(mascotas);
            break;
        case 2:
            console.log("Agrega Mascotas");
            break;
        case 3:
            console.log("Edita Mascota");
            break;
        case 4:
            console.log("Elimina Mascota");
            break;
        case 5:
            console.log("Salir del programa");
            break;
        default:
            break;
    }
} while(option != 5);
