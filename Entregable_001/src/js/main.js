let mascotas = [
    {
        nombre: "Luna",
        especie: "Perro",
        raza: "Doberman",
        edad: 1,
        peso: 20,
        estado: "estable",
        nombrePropietario: "David Medina",
        documentoPropietario: "12345",
        telefonoPropietario: "54321",
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
        documentoPropietario: "987",
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
        nombrePropietario: "David Medina",
        documentoPropietario: "12345",
        telefonoPropietario: "54321",
        correoPropietario: "davidmedina@gmail.com"
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
        nombrePropietario: "David Medina",
        documentoPropietario: "12345",
        telefonoPropietario: "54321",
        correoPropietario: "davidmedina@gmail.com"
    },
    {
        nombre: "Coco",
        especie: "Perro",
        raza: "Chihuahua",
        edad: 2,
        peso: 5,
        estado: "estable",
        nombrePropietario: "Laura González",
        documentoPropietario: "987",
        telefonoPropietario: "987654321",
        correoPropietario: "lauragonzalez@gmail.com"
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

//DEFINICIÓN DE FUNCIONES

//Función para mostrar el menú
function mostrarMenu() {
    let option = parseInt(prompt("MENÚ DE OPCIONES:\n\n1. Agregar mascota.\n2. Listar mascotas.\n3. Listar dueños.\n4. Listar mascotas con mismo dueño.\n5. Actualizar mascota.\n6. Buscar mascota.\n7. Eliminar mascota.\n8. Salir.\nIngrese una opción: "));
    return option;
}

//Función para agregar una mascotas
function agregarMascota(arrayMascotas) {
    arrayMascotas.push({
        nombre: prompt("Ingrese el nombre de la mascota: "),
        especie: prompt("Ingrese la especie de la mascota: "),
        raza: prompt("Ingrese la raza de la mascota: "),
        edad: definirEdad(),
        peso: parseInt(prompt("Ingrese el peso de la mascota en kg: ")),
        estado: definirEstadoMascota(),
        nombrePropietario: prompt("Ingrese el nombre del propietario de la mascota: "),
        documentoPropietario: prompt("Ingrese el documento del propietario de la mascota: "),
        telefonoPropietario: prompt("Ingrese el teléfono del propietario de la mascota: "),
        correoPropietario: prompt("Ingrese el correo del propietario de la mascota: ")
    })
    return arrayMascotas
}

//Función para definir el estado de la mascota
function definirEstadoMascota() {
    let option;
    let estadoMascota;
    do {
        option = parseInt(prompt("Digite la opción que indique el estado de la mascota: \n1. Crítico. \n2. Estable."));
        switch (option) {
            case 1:
                estadoMascota = "Crítico";
                break;
            case 2:
                estadoMascota = "Estable";
                break;
            default:
                console.error("Respuesta incorrecta, digite nevamente la opción.")
                break;
        }
    } while ((option != 1) && (option != 2));
    return estadoMascota;
}

//Función para definir la edad de la mascota
function definirEdad() {
    let fechaNacimiento = new Date(prompt("Ingrese la fecha de nacimiento en formato mm/dd/yyyy"));
    let fechaActual = new Date();
    console.log(fechaActual);
    console.log(fechaNacimiento);

    //Datos de nacimiento
    let anoNacimiento = fechaNacimiento.getFullYear();
    let mesNacimiento = fechaNacimiento.getMonth();
    let diaNacimiento = fechaNacimiento.getDate();

    //Datos actuales
    let anoActual = fechaActual.getFullYear();
    let mesActual = fechaActual.getMonth();
    let diaActual = fechaActual.getDate();

    let edad = anoActual - anoNacimiento;
    if ((mesActual < mesNacimiento) || ((mesActual < mesNacimiento) && (diaActual < diaNacimiento) || ((mesActual == mesNacimiento) && (diaActual < diaNacimiento)))) {
        edad--;
    }
    return edad
}

//Función para listar mascotas
function listarMascotas(arrayMascotas) {
    arrayMascotas.forEach(function (mascota, i) {
        console.log(
            `Mascota # ${i + 1}:
            Nombre: ${mascota.nombre},
            Especie: ${mascota.especie},
            Raza: ${mascota.raza},
            Edad: ${mascota.edad},
            Estado: ${mascota.estado}.`
        );
    });
}

//Función para listar dueños
function listarDuenos(arrayMascotas) {
    arrayMascotas.forEach(function (dueno, i) {
        console.log(
            `Dueño # ${i + 1}:
            Nombre: ${dueno.nombrePropietario},
            Documento: ${dueno.documentoPropietario},
            Teléfono: ${dueno.telefonoPropietario},
            Email: ${dueno.correoPropietario}`
        );
    });
}

//Función para mostrar mascotas con mismo dueño
function identificarMascotasMismoDueno(arrayMascotas) {
    let mascotasPorDueno = {};

    // Iterar sobre las mascotas y agruparlas por documento del propietario
    arrayMascotas.forEach(mascota => {
        if (mascotasPorDueno[mascota.documentoPropietario]) {
            mascotasPorDueno[mascota.documentoPropietario].push(mascota.nombre);
        } else {
            mascotasPorDueno[mascota.documentoPropietario] = [mascota.nombre];
        }
    });

    // Mostrar los nombres del propietario y las mascotas asociadas solo si tienen más de una mascota
    for (const documento in mascotasPorDueno) {
        const mascotas = mascotasPorDueno[documento];
        if (mascotas.length > 1) {
            console.log(`Dueño: ${documento}, Mascotas: ${mascotas.join(', ')}`);
        }
    }
}

//Función para buscar mascota por el nombre
function buscarMascota(arrayMascotas) {
    let nombre = prompt("Digite el nombre de la mascota que desea buscar: ");
    let existencia = false;
    arrayMascotas.forEach(mascota => {
        if (mascota.nombre.toLowerCase() == nombre.toLowerCase()) {
            existencia = true;
        }
    });
    if (existencia == true) {
        console.log("La mascota se encuentra en la BD de la veterinaria.");
    } else {
        console.log("La mascota no se encuentra registrada en la BD de la veterinaria.");
    }
}

//Función para actualizar información
function actualizarInformación(arrayMascotas) {
    listarMascotas(arrayMascotas);
    let opcionMascota = 0;
    do {
        opcionMascota = parseInt(prompt("Digite el número de la mascota que desea actualizar: "))-1;
        let valorActualizar;

        //Obtener array de claves
        let claves = Object.keys(arrayMascotas[0])
        claves.forEach(function (clave, i) {
            console.log(`${i + 1}. ${(clave.replace(/([a-z])([A-Z])/g, '$1 $2')).toLocaleLowerCase()}`);
        });

        let opcionActualizar = parseInt(prompt("Digite la opción que desea actualizar: "))-1

        if (opcionActualizar  == 3) {
            valorActualizar = definirEdad()
        }else if(opcionActualizar  == 5){
            valorActualizar = definirEstadoMascota()
        }else if(opcionActualizar < 10){
            valorActualizar  = prompt("Digite el valor actualizado: ")
        }
        let mascotaActualizar = arrayMascotas[opcionMascota];
        let claveActualizar = claves[opcionActualizar]
        mascotaActualizar[claveActualizar] = valorActualizar;
    } while (opcionMascota > 10);
}

//Función para eliminar mascotas
function eliminarMascota(arrayMascotas) {
    listarMascotas(arrayMascotas);
    let opcion = parseInt(prompt("Digite el número de la mascota a eliminar: "))
    arrayMascotas.splice((opcion - 1), 1);
}

//Definicion de variables globales
let option;

do {
    option = mostrarMenu()
    switch (option) {
        case 1:
            console.log("Agrega Mascotas");
            agregarMascota(mascotas);
            break;
        case 2:
            console.log("Lista Mascotas");
            listarMascotas(mascotas);
            break;
        case 3:
            console.log("Lista Dueños");
            listarDuenos(mascotas);
            break;
        case 4:
            console.log("Lista mascotas dueños repetidos");
            identificarMascotasMismoDueno(mascotas)
            break;
        case 5:
            console.log("Actualizar Mascota");
            actualizarInformación(mascotas)
            break;
        case 6:
            console.log("Buscar Mascota");
            buscarMascota(mascotas)
            break;
        case 7:
            console.log("Eliminar Mascota");
            eliminarMascota(mascotas)
            break;
        case 8:
            console.log("Salir del programa");
            break;
        default:
            console.error("OPCIÓN INVÁLIDA, DIGITE NUEVAMENTE.")
            break;
    }
} while (option != 8);