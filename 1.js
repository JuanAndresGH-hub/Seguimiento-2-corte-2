let usuarios = [
    { usuario: "Jhon Buitrago", contraseña: 4321, cedula: 123456, saldo: 500000 },
    { usuario: "Juan Andres", contraseña: 1234, cedula: 654321, saldo: 5000000 }
];

let intentos = 0;
let autenticado = false;
let usuarioActual;

while (intentos < 3 && !autenticado) {
    let ingresoDeUsuario = parseInt(prompt("Ingrese No. de cédula"));
    let ingresoDeContraseña = parseInt(prompt("Ingrese contraseña de cuenta"));

    usuarioActual = usuarios.find(user => user.cedula === ingresoDeUsuario && user.contraseña === ingresoDeContraseña);

    if (usuarioActual) {
        autenticado = true;
        alert("Usuario reconocido");
    } else {
        intentos++;
        alert(`Usuario no reconocido. Intento ${intentos} de 3.`);
    }
}

if (!autenticado) {
    alert("Ha alcanzado el límite de intentos permitidos.");
} else {
    let continuar = true;
    while (continuar) {
        let opcion = parseInt(prompt("Seleccione una opción:\n1. Depositar\n2. Retirar\n3. Transferir\n4. Consultar saldo\n5. Salir"));

        switch(opcion) {
            case 1:
                let deposito = parseInt(prompt("Ingrese cantidad de depósito"));
                usuarioActual.saldo += deposito;
                alert(`Depósito exitoso. Su saldo total es de ${usuarioActual.saldo}`);
                break;
            
            case 2:
                let retiro = parseInt(prompt("Ingrese cantidad a retirar (múltiplos de $50.000)"));
                if (retiro % 50000 === 0 && usuarioActual.saldo >= retiro) {
                    usuarioActual.saldo -= retiro;
                    alert(`Retiro exitoso. Puede tomar ${retiro}. Saldo restante: ${usuarioActual.saldo}`);
                } else {
                    alert("Monto no válido para retiro. Debe ser múltiplo de $50.000 y no superar el saldo disponible.");
                }
                break;
            
            case 3:
                let transferencia = parseInt(prompt("Ingrese cantidad a transferir"));
                let cedulaDestino = parseInt(prompt("Ingrese No. de cédula de la cuenta destino"));
                let usuarioDestino = usuarios.find(user => user.cedula === cedulaDestino);
                if (usuarioDestino && usuarioActual.saldo >= transferencia) {
                    usuarioActual.saldo -= transferencia;
                    usuarioDestino.saldo += transferencia;
                    alert(`Transferencia exitosa a ${usuarioDestino.usuario}. Saldo restante: ${usuarioActual.saldo}`);
                } else {
                    alert("Transferencia fallida. Usuario no encontrado o saldo insuficiente.");
                }
                break;
            
            case 4:
                alert(`Tu saldo es ${usuarioActual.saldo}`);
                break;
            
            case 5:
                alert("Gracias por usar el cajero. Adiós.");
                continuar = false;
                break;
            
            default:
                alert("Opción no válida.");
        }
    }
}