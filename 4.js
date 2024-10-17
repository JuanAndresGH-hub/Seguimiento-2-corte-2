let colaDeEspera = [];
let contadorTurnos = 0;

function tomarTurno() {
    colaDeEspera.push(++contadorTurnos);
    alert(`Su turno es el número: ${contadorTurnos}`);
}
function llamarCliente() {
    if (colaDeEspera.length === 0) {
        alert("No hay clientes en espera.");
    } else {
        let turnoLlamado = colaDeEspera.shift();
        alert(`Se llama al turno número: ${turnoLlamado}`);
    }
}
function mostrarCola() {
    if (colaDeEspera.length === 0) {
        alert("No hay clientes en espera.");
    } else {
        alert(`Cola de espera actual: ${colaDeEspera.join(', ')}`);
    }
}
function mostrarContador() {
    alert(`Total de turnos tomados hasta ahora: ${contadorTurnos}`);
}
function mostrarMenu() {
    let opcion;
    do {
        opcion = parseInt(prompt("Seleccione una opción:\n1. Tomar Turno\n2. Llamar Cliente\n3. Mostrar Cola de Espera\n4. Mostrar Contador de Turnos\n5. Salir"));
        switch (opcion) {
            case 1:
                tomarTurno();
                break;
            case 2:
                llamarCliente();
                break;
            case 3:
                mostrarCola();
                break;
            case 4:
                mostrarContador();
                break;
            case 5:
                alert("Saliendo del sistema.");
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una opción entre 1 y 5.");
        }
    } while (opcion !== 5);
}
mostrarMenu();
