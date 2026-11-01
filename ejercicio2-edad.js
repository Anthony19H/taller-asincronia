function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso concedido. Bienvenido a la plataforma");
            } else {
                reject("Acceso denegado. Registro permitido solo para mayores de edad");
            }
        }, 1000);
    });
}

verificarEdad(25)
    .then((mensaje) => console.log("Exito: " + mensaje))
    .catch((error) => console.log("Error: " + error));

verificarEdad(15)
    .then((mensaje) => console.log("Exito: " + mensaje))
    .catch((error) => console.log("Error: " + error));
