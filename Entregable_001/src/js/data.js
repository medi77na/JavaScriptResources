//Lista de mascotas
let mascotas = [
    {
        nombre: "Luna",
        especie: "Perro",
        raza: "Doberman",
        edad: 1,
        peso: 20,
        estado: "estable",
        propietario: {
            nombre: "David Medina",
            documento: "12345",
            telefono: "54321",
            correo: "davidmedina@gmail.com"
        },
        imagen: "./public/img/dobermanLuna.webp"
    },
    {
        nombre: "Toby",
        especie: "Perro",
        raza: "Labrador",
        edad: 3,
        peso: 25,
        estado: "crítico",
        propietario: {
            nombre: "Laura González",
            documento: "987",
            telefono: "987654321",
            correo: "lauragonzalez@gmail.com"
        },
        imagen: "https://i.pinimg.com/originals/bb/30/86/bb3086e0facb35a5ff3b5418d116fc25.jpg"
    },
    {
        nombre: "Whiskers",
        especie: "Gato",
        raza: "Siamés",
        edad: 2,
        peso: 12,
        estado: "estable",
        propietario: {
            nombre: "Carlos Pérez",
            documento: "567890123",
            telefono: "567890123",
            correo: "carlosperez@gmail.com"
        },
        imagen: "https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9hc3NldHMucGlwcGEuaW8vc2hvd3MvNjNkMTRhYjkxMzc0MTUwMDExOTI3ZTA4LzE2NzU2MTYyOTg1ODctNTY4MWNjZjI0MDM2YjIyMDcxNDQzYjA2YjQ4ODI4MzkuanBlZw%3D%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"
    },
    {
        nombre: "Buddy",
        especie: "Perro",
        raza: "Golden Retriever",
        edad: 4,
        peso: 30,
        estado: "crítico",
        propietario: {
            nombre: "David Medina",
            documento: "12345",
            telefono: "54321",
            correo: "davidmedina@gmail.com"
        },
        imagen: "https://i.pinimg.com/474x/11/67/6d/11676d019a6511bc1026f7e7c98c5679.jpg"
    },
    {
        nombre: "Simba",
        especie: "Gato",
        raza: "Persa",
        edad: 5,
        peso: 15,
        estado: "estable",
        propietario: {
            nombre: "María Rodríguez",
            documento: "345678901",
            telefono: "345678901",
            correo: "mariarodriguez@gmail.com"
        },
        imagen: "https://img.stablecog.com/insecure/256w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vOTAxOTUwODUtYjMwZS00MDkzLWEwYmUtYWViODEwZDM5YzIxLmpwZWc.webp"
    },
    {
        nombre: "Rocky",
        especie: "Perro",
        raza: "Bulldog Francés",
        edad: 2,
        peso: 18,
        estado: "crítico",
        propietario: {
            nombre: "David Medina",
            documento: "12345",
            telefono: "54321",
            correo: "davidmedina@gmail.com"
        },
        imagen: "https://tucachorrotienda.com/wp-content/uploads/2019/05/bulldog-frances-cachorros3.jpg"
    },
    {
        nombre: "Coco",
        especie: "Perro",
        raza: "Chihuahua",
        edad: 2,
        peso: 5,
        estado: "estable",
        propietario: {
            nombre: "Laura González",
            documento: "987",
            telefono: "987654321",
            correo: "lauragonzalez@gmail.com"
        },
        imagen: "https://pbs.twimg.com/profile_images/741386784324653056/5Inb5QtV_400x400.jpg"
    },
    {
        nombre: "Bella",
        especie: "Gato",
        raza: "Maine Coon",
        edad: 3,
        peso: 20,
        estado: "crítico",
        propietario: {
            nombre: "Elena Martínez",
            documento: "901234567",
            telefono: "901234567",
            correo: "elenamartinez@gmail.com"
        },
        imagen: "https://img.stablecog.com/insecure/256w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vNDQzZTAzNmEtODA3ZC00MGQ0LWJlZDQtNDcwODJjMDA4YmMxLmpwZWc.webp"
    },
    {
        nombre: "Max",
        especie: "Perro",
        raza: "Dálmata",
        edad: 1,
        peso: 22,
        estado: "estable",
        propietario: {
            nombre: "Mario Pérez",
            documento: "678901234",
            telefono: "678901234",
            correo: "marioperez@gmail.com"
        },
        imagen: "https://static.wixstatic.com/media/e89b0b_7b3520a3015b4cde965798f4855c288b~mv2.jpg/v1/fill/w_256,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e89b0b_7b3520a3015b4cde965798f4855c288b~mv2.jpg"
    },
    {
        nombre: "Sasha",
        especie: "Gato",
        raza: "Siamesa",
        edad: 4,
        peso: 14,
        estado: "crítico",
        propietario: {
            nombre: "Lucía Rodríguez",
            documento: "789012345",
            telefono: "789012345",
            correo: "luciarodriguez@gmail.com"
        },
        imagen: "https://img.stablecog.com/insecure/256w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vMmNjOGUxZDUtMmU0NC00ZjcwLTkwNWUtYzYxYzc4ZmIzMDFiLmpwZWc.webp"
    }
];