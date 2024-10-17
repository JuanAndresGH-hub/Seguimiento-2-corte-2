let citas = [];

function programarCita() {
    let nombrePaciente = prompt("Ingrese el nombre del paciente:");
    let fecha = prompt("Ingrese la fecha de la cita (YYYY-MM-DD):");
    let hora = prompt("Ingrese la hora de la cita (HH:MM):");
    let medico = prompt("Ingrese el nombre del médico asignado:");

    let cita = {
        nombrePaciente: nombrePaciente,
        fecha: fecha,
        hora: hora,
        medico: medico
    };
    citas.push(cita);
    alert("Cita programada exitosamente.");
}

function verCitas() {
    if (citas.length === 0) {
        alert("No hay citas programadas.");
        return;
    }
    let mensaje = "Citas Programadas:\n";
    for (let i = 0; i < citas.length; i++) {
        let cita = citas[i];
        mensaje += `${i + 1}. Paciente: ${cita.nombrePaciente}, Fecha: ${cita.fecha}, Hora: ${cita.hora}, Médico: ${cita.medico}\n`;
    }
    alert(mensaje);
}

function cancelarCita() {
    let numeroCita = prompt("Ingrese el número de la cita a cancelar:");

    let index = parseInt(numeroCita) - 1;

    if (index >= 0 && index < citas.length) {
        citas.splice(index, 1);
        alert("Cita cancelada exitosamente.");
    } else {
        alert("Número de cita inválido.");
    }
}

while (true) {
    let opcion = prompt("Seleccione una opción:\n1. Programar Cita\n2. Ver Citas Programadas\n3. Cancelar Cita\n4. Salir");

    if (opcion === '1') {
        programarCita();
    } else if (opcion === '2') {
        verCitas();
    } else if (opcion === '3') {
        cancelarCita();
    } else if (opcion === '4') {
        break;
    } else {
        alert("Opción no válida. Inténtelo de nuevo.");
    }
}