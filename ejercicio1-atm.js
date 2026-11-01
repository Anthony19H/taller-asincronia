const SALDO_DISPONIBLE = 500;

function retirarDinero(monto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto <= SALDO_DISPONIBLE) {
                const saldoRestante = SALDO_DISPONIBLE - monto;
                resolve(`Retiro exitoso de $${monto}. Saldo restante: $${saldoRestante}`);
            } else {
                reject("Fondos insuficientes. Limite de retiro: $500");
            }
        }, 1500);
    });
}

console.log("Procesando retiro de $200...");
retirarDinero(200)
    .then((mensaje) => console.log("Exito: " + mensaje))
    .catch((error) => console.log("Error: " + error));

console.log("Procesando retiro de $600...");
retirarDinero(600)
    .then((mensaje) => console.log("Exito: " + mensaje))
    .catch((error) => console.log("Error: " + error));
