let totalAtendidos = 0;
let estadisticas = {
    llamada: 0,
    asesoriaEstudiante: 0,
    asesoriaDirectivo: 0,
    transferencia: 0
};
function solicitarAtencion() {
    let cedula = prompt("Ingrese su número de cédula");
    let tipoAtencion = prompt("Seleccione el tipo de atención:\n1. Llamada telefónica\n2. Asesoría");

    if (tipoAtencion == "1") {
        estadisticas.llamada++;
        totalAtendidos++;
        alert("Atención por llamada telefónica registrada.");
    } else if (tipoAtencion == "2") {
        let tipoAsesoria = prompt("Seleccione el tipo de asesoría:\n1. Estudiante\n2. Directivo");
        if (tipoAsesoria == "1") {
            estadisticas.asesoriaEstudiante++;
            totalAtendidos++;
            alert("Asesoría para estudiante registrada.");
        } else if (tipoAsesoria == "2") {
            estadisticas.asesoriaDirectivo++;
            totalAtendidos++;
            alert("Asesoría para directivo registrada.");
        } else {
            alert("Tipo de asesoría no válido.");
        }
    } else {
        alert("Tipo de atención no válido.");
    }

    let transferencia = prompt("¿Desea transferir la asesoría a llamada telefónica? (si/no)").toLowerCase();
    if (transferencia === "si") {
        estadisticas.transferencia++;
        alert("Transferencia de asesoría a llamada telefónica registrada.");
    }
}
function mostrarEstadisticas() {
    alert(`Estadísticas de atención:
    - Total de usuarios atendidos: ${totalAtendidos}
    - Llamadas telefónicas: ${estadisticas.llamada}
    - Asesorías a estudiantes: ${estadisticas.asesoriaEstudiante}
    - Asesorías a directivos: ${estadisticas.asesoriaDirectivo}
    - Transferencias de asesoría a llamada: ${estadisticas.transferencia}`);
}
solicitarAtencion();
mostrarEstadisticas();
