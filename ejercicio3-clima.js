function consultarClima(ciudad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                ciudad: ciudad,
                temperatura: "24°C",
                condicion: "Soleado"
            });
        }, 1500);
    });
}

async function mostrarClima(ciudad) {
    try {
        const clima = await consultarClima(ciudad);
        console.log("Ciudad: " + clima.ciudad);
        console.log("Temperatura: " + clima.temperatura);
        console.log("Condicion: " + clima.condicion);
    } catch (error) {
        console.log("Error al consultar el clima: " + error);
    }
}

mostrarClima("Quito");
