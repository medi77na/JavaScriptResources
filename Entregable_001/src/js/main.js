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
        propietario: {
            nombre: prompt("Ingrese el nombre del propietario de la mascota: "),
            documento: prompt("Ingrese el documento del propietario de la mascota: "),
            telefono: prompt("Ingrese el teléfono del propietario de la mascota: "),
            correo: prompt("Ingrese el correo del propietario de la mascota: "),
        },
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
            Dueño: ${mascota.propietario.nombre}`
        );
    });
}

// Función para identificar los dueños según documento
function propietarioUnico(arrayMascotas) {
    let objDuenosMascotas = {};

    arrayMascotas.forEach(mascota => {
        if (objDuenosMascotas[mascota.propietario.documento]) {
            objDuenosMascotas[mascota.propietario.documento].mascotas.push(mascota.nombre);
        } else {
            objDuenosMascotas[mascota.propietario.documento] = {
                nombre: mascota.propietario.nombre,
                documento: mascota.propietario.documento,
                telefono: mascota.propietario.telefono,
                mascotas: [mascota.nombre]
            };
        };
    });
    return objDuenosMascotas;
}

// Función para mostrar cada propietario
function mostrarPropietario(arrayMascotas) {
    let propietarios = Object.values(propietarioUnico(arrayMascotas))

    propietarios.forEach((propietario, i) => {
        console.log(`${i + 1})- ${propietario.nombre}\nDocumento: ${propietario.documento}`);
    });
}

//Función para mostrar mascotas con mismo dueño
function identificarMascotasMismoDueno(arrayMascotas) {

    let objDuenosMascotas = propietarioUnico(arrayMascotas);

    // Mostrar los nombres y teléfonos de los propietarios junto con las mascotas que repiten
    for (const documento in objDuenosMascotas) {
        console.log(documento);
        const propietario = objDuenosMascotas[documento];
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

// FUNCIONES NECESARIAS PARA LA ACTUALIZACIÓN DE LOS DATOS

//Función para obtener las claves del objeto mascotas
function obtenerLlaves(arrayMascotas) {
    let llaves = Object.keys(arrayMascotas[0])
    return llaves
}

//Función para obtener las propiedades únicas de las mascotas
function obtenerPropiedadesMascota(arrayMascotas) {
    let propiedadesMascota = []
    let llavesObjeto = []
    llavesObjeto = obtenerLlaves(arrayMascotas)

    llavesObjeto.forEach((llave, i) => {
        if (llave !== "propietario") {
            propiedadesMascota.push(llave)
        }
    });
    return propiedadesMascota;
}

// Función para mostrar las propiedades únicas de las mascotas
function mostrarPropiedadesMascotas(arrayMascotas) {
    let propiedadesMascotas = obtenerPropiedadesMascota(arrayMascotas);
    console.log("\NPROPIEDADES DE LAS MASCOTAS: ");
    propiedadesMascotas.forEach((propiedad, i) => {
        console.log(`${i + 1})- ${propiedad}`);
    });
}

// Función para actualizar una propiedad única de la mascota
function actualizarPropiedadesMascota(arrayMascotas) {

    listarMascotas(arrayMascotas)
    let opcionMascota = parseInt(prompt("Digite el número de mascota a actualizar: ")) - 1;

    mostrarPropiedadesMascotas(arrayMascotas);
    let opcionPropiedadMascota = parseInt(prompt("¿Qué propiedad desea actualizar?\nDigite el número de la propiedad: ")) - 1;
    let propiedadesMascota = obtenerPropiedadesMascota(arrayMascotas)

    if (propiedadesMascota[opcionPropiedadMascota] == "edad") {
        valorActualizado = definirEdad();
    } else if (propiedadesMascota[opcionPropiedadMascota] == "estado") {
        valorActualizado = definirEstadoMascota();
    } else {
        valorActualizado = prompt("Digite el valor actualizado: ")
    }

    let mascotaActualizar = arrayMascotas[opcionMascota];
    let propiedadActualizada = propiedadesMascota[opcionPropiedadMascota];
    mascotaActualizar[propiedadActualizada] = valorActualizado;
    alert("VALOR ACTUALIZADO CON ÉXITO!")
}

// Función para obtener llaves únicas de propietario
function obtenerLlavesPropietario(arrayMascotas) {
    let llavesPropietario = Object.keys(arrayMascotas[0].propietario)
    return llavesPropietario
}

// Función para mostrar las llaves del propietario
function mostrarLlavesPropietario(arrayMascotas) {
    let llavesPropietario = obtenerLlavesPropietario(arrayMascotas)
    llavesPropietario.forEach((propiedad, i) => {
        console.log(`${i + 1})- ${propiedad}`);
    });
}

// Funcion para actualizar los datos del propietario
function actualizarPropietario(arrayMascotas) {
    mostrarPropietario(arrayMascotas)
    let opcionPropietario = parseInt(prompt("Digite el número del propietario que desea actualizar: ")) - 1

    mostrarLlavesPropietario(arrayMascotas)
    let valorPropiedad = parseInt(prompt("Digite el número de la propiedad que desea actualizar: ")) - 1
    let nuevoValor = prompt("Digite el valor actualizado: ")

    let propietarios = Object.keys(propietarioUnico(arrayMascotas))
    //Toma el documento del propietario
    let propietarioActualizado = propietarios[opcionPropietario]

    //Tomar la clave a actualizar
    let claveActualizar = obtenerLlavesPropietario(arrayMascotas)[valorPropiedad];

    for (const key in arrayMascotas) {
        if (arrayMascotas[key].propietario.documento == propietarioActualizado) {

            arrayMascotas[key].propietario[claveActualizar] = nuevoValor
        }
    }
}

//Función para actualizar información general
function actualizarInformación(arrayMascotas) {
    let opcion = undefined;
    do {
        opcion = parseInt(prompt("¿Qué información desea actualizar?\n\n1)- Información de la mascota\n2)- Información del propietario."));

        switch (opcion) {
            case 1:
                actualizarPropiedadesMascota(arrayMascotas);
                break;
            case 2:
                actualizarPropietario(arrayMascotas)
                break;

            default:
                console.error("OPCIÓN INCORRECTA.")
                break;
        }

    } while (opcion > 2);




    // listarMascotas(arrayMascotas);
    // let opcionMascota = 0;
    // do {
    //     opcionMascota = parseInt(prompt("Digite el número de la mascota que desea actualizar: ")) - 1;
    //     let valorActualizar;

    //     //Obtener array de claves
    //     let claves = Object.keys(arrayMascotas[0])
    //     claves.forEach(function (clave, i) {
    //         console.log(`${i + 1}. ${(clave.replace(/([a-z])([A-Z])/g, '$1 $2')).toLocaleLowerCase()}`);
    //     });

    //     let opcionActualizar = parseInt(prompt("Digite la opción que desea actualizar: ")) - 1

    //     if (opcionActualizar == 3) {
    //         valorActualizar = definirEdad()
    //     } else if (opcionActualizar == 5) {
    //         valorActualizar = definirEstadoMascota()
    //     } else if (opcionActualizar < 10) {
    //         valorActualizar = prompt("Digite el valor actualizado: ")
    //     }
    //     let mascotaActualizar = arrayMascotas[opcionMascota];
    //     let claveActualizar = claves[opcionActualizar]
    //     mascotaActualizar[claveActualizar] = valorActualizar;
    // } while (opcionMascota > 10);
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
    main.setAttribute("class", "d-flex flex-wrap justify-content-center row row-cols-3");

    arrayMascotas.forEach(mascota => {

        main.innerHTML += `
            <div id="div_I" class="col-6 col-md-3 border border-info m-3 p-4">
                <img src=${mascota.imagen} class="card-img-top rounded-top" alt="...">
                <div class="card-body text-center mt-3">
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
                mostrarPropietario(mascotas);
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