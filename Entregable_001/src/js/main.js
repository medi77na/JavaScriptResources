//Lista de mascotas
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
        correoPropietario: "davidmedina@gmail.com",
        imagen:"./public/img/dobermanLuna.webp"
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
        correoPropietario: "lauragonzalez@gmail.com",
        imagen:"https://i.pinimg.com/originals/bb/30/86/bb3086e0facb35a5ff3b5418d116fc25.jpg"
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
        correoPropietario: "carlosperez@gmail.com",
        imagen:"https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9hc3NldHMucGlwcGEuaW8vc2hvd3MvNjNkMTRhYjkxMzc0MTUwMDExOTI3ZTA4LzE2NzU2MTYyOTg1ODctNTY4MWNjZjI0MDM2YjIyMDcxNDQzYjA2YjQ4ODI4MzkuanBlZw%3D%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"
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
        correoPropietario: "davidmedina@gmail.com",
        imagen:"https://i.pinimg.com/474x/11/67/6d/11676d019a6511bc1026f7e7c98c5679.jpg"
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
        correoPropietario: "mariarodriguez@gmail.com",
        imagen:"https://img.stablecog.com/insecure/256w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vOTAxOTUwODUtYjMwZS00MDkzLWEwYmUtYWViODEwZDM5YzIxLmpwZWc.webp"
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
        correoPropietario: "davidmedina@gmail.com",
        imagen:"https://tucachorrotienda.com/wp-content/uploads/2019/05/bulldog-frances-cachorros3.jpg"
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
        correoPropietario: "lauragonzalez@gmail.com",
        imagen:"https://pbs.twimg.com/profile_images/741386784324653056/5Inb5QtV_400x400.jpg"
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
        correoPropietario: "elenamartinez@gmail.com",
        imagen:"https://img.stablecog.com/insecure/256w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vNDQzZTAzNmEtODA3ZC00MGQ0LWJlZDQtNDcwODJjMDA4YmMxLmpwZWc.webp"
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
        correoPropietario: "marioperez@gmail.com",
        imagen:"https://static.wixstatic.com/media/e89b0b_7b3520a3015b4cde965798f4855c288b~mv2.jpg/v1/fill/w_256,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e89b0b_7b3520a3015b4cde965798f4855c288b~mv2.jpg"
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
        correoPropietario: "luciarodriguez@gmail.com",
        imagen:"https://img.stablecog.com/insecure/256w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vMmNjOGUxZDUtMmU0NC00ZjcwLTkwNWUtYzYxYzc4ZmIzMDFiLmpwZWc.webp"
    }
];

//INICIO DE LÓGICA DE PROGRAMA
console.log("BIENVENIDOS AL SISTEMA DE GESTIÓN DE MASCOTAS");


//DEFINICIÓN DE FUNCIONES

//Función para mostrar el menú
function menuOpciones() {
    let option = parseInt(prompt("MENÚ DE OPCIONES\n\n1. Agregar mascota.\n2. Listar mascotas.\n3. Listar dueños.\n4. Listar mascotas con mismo dueño.\n5. Actualizar mascota.\n6. Buscar mascota.\n7. Eliminar mascota.\n8. Salir.\nIngrese una opción: "));
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
        correoPropietario: prompt("Ingrese el correo del propietario de la mascota: "),
        imagen: prompt("Agrega la ruta de la imagen de tu mascota: ")
    })
    return arrayMascotas
}

//Función para definir la edad de la mascota
function definirEdad() {
    let fechaNacimiento = new Date(prompt("Ingrese la fecha de nacimiento en formato mm/dd/yyyy"));
    let fechaActual = new Date();

    //Datos de nacimiento
    let anoNacimiento = fechaNacimiento.getFullYear();
    let mesNacimiento = fechaNacimiento.getMonth();
    let diaNacimiento = fechaNacimiento.getDate();

    //Datos actuales
    let anoActual = fechaActual.getFullYear();
    let mesActual = fechaActual.getMonth();
    let diaActual = fechaActual.getDate();

    //Lógica para definir edad exacta
    let edad = anoActual - anoNacimiento;
    if ((mesActual < mesNacimiento) || ((mesActual < mesNacimiento) && (diaActual < diaNacimiento) || ((mesActual == mesNacimiento) && (diaActual < diaNacimiento)))) {
        edad--;
    }
    return edad
}

//Función para definir el estado de la mascota
function definirEstadoMascota() {

    //Definición de variables
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

//Función para listar mascotas
function listarMascotas(arrayMascotas) {
    arrayMascotas.forEach(function (mascota, i) {
        console.log(//Tener en cuenta que en ocasiones al exportar el archivo, el backtish se puede borrar.
            `Mascota # ${i + 1}:
            Nombre: ${mascota.nombre},
            Especie: ${mascota.especie},
            Raza: ${mascota.raza},
            Edad: ${mascota.edad},
            Estado: ${mascota.estado},
            Dueño: ${mascota.nombrePropietario}`
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
    // Objeto para almacenar las mascotas agrupadas por documento del propietario
    let objMascotasDueno = {};

    // Iterar sobre las mascotas y agruparlas por documento del propietario
    arrayMascotas.forEach(mascota => {
        // Verificar si ya existe una entrada para el propietario en el objeto 'objMascotasDueno'
        if (objMascotasDueno[mascota.documentoPropietario]) {
            // Si ya existe una entrada para el propietario, agregar la mascota a la lista de mascotas asociadas
            objMascotasDueno[mascota.documentoPropietario].mascotas.push(mascota.nombre);
        } else {
            // Si no existe una entrada para el propietario, crear una nueva entrada con el nombre, teléfono y lista de mascotas
            objMascotasDueno[mascota.documentoPropietario] = {
                nombrePropietario: mascota.nombrePropietario,
                telefonoPropietario: mascota.telefonoPropietario,
                mascotas: [mascota.nombre]
            };
        }
    });

    // Mostrar los nombres y teléfonos de los propietarios junto con las mascotas que repiten
    for (const documento in objMascotasDueno) {
        const propietario = objMascotasDueno[documento];
        if (propietario.mascotas.length > 1) {
            console.log(`Dueño: ${propietario.nombrePropietario}, Teléfono: ${propietario.telefonoPropietario}, Mascotas: ${propietario.mascotas.join(', ')}`);
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
    if (existencia === true) {
        console.log("La mascota se encuentra en la BD de la veterinaria.");
    } else {
        console.warn("La mascota no se encuentra registrada en la BD de la veterinaria.");
    }
}

//Función para actualizar información
function actualizarInformación(arrayMascotas) {
    listarMascotas(arrayMascotas);
    let opcionMascota = 0;
    do {
        opcionMascota = parseInt(prompt("Digite el número de la mascota que desea actualizar: ")) - 1;
        let valorActualizar;

        //Obtener array de claves
        let claves = Object.keys(arrayMascotas[0])
        claves.forEach(function (clave, i) {
            console.log(`${i + 1}. ${(clave.replace(/([a-z])([A-Z])/g, '$1 $2')).toLocaleLowerCase()}`);
        });

        let opcionActualizar = parseInt(prompt("Digite la opción que desea actualizar: ")) - 1

        if (opcionActualizar == 3) {
            valorActualizar = definirEdad()
        } else if (opcionActualizar == 5) {
            valorActualizar = definirEstadoMascota()
        } else if (opcionActualizar < 10) {
            valorActualizar = prompt("Digite el valor actualizado: ")
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

//Función para mostrar mascotas en html
function mostrarMascotasHtml(arrayMascotas) {
    const main = document.querySelector("main")
    const header = document.querySelector("header");
    const header__h1 = document.querySelector(".header__h1");


    header.setAttribute("class", "text-center fs-3");
    header__h1.setAttribute("class", "header__h1 text-primary");
    main.setAttribute("class", "d-flex flex-wrap justify-content-center");

    arrayMascotas.forEach(mascota => {

        main.innerHTML += `
            <div id="div_I" class="card m-3 border border-info p-4" style="width: 30%;">
                <img src=${mascota.imagen} class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title">${mascota.nombre}</h5>
                    <p class="card-text">
                        <strong>Edad: </strong>${mascota.edad}<br>
                        <strong>Raza: </strong>${mascota.raza}
                    </p>
                    <a href="#" class="btn btn-primary">Ver más</a>
                </div>
            </div>`
        });
}

//Función para mostrar menú
function mostrarMenu() {

    //Definicion de variables
    let option = undefined;

    do {
        option = menuOpciones()
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
}



//EJECUCIÓN DEL PROGRAMA
mostrarMenu(mascotas)
mostrarMascotasHtml(mascotas)


console.log("FIN DEL PROGRAMA");