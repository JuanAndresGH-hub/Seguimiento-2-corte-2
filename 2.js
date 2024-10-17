let reservas = [];
let habitaciones = [
    { id: 1, tipo: "Individual", maxPersonas: 2, permiteMascotas: false },
    { id: 2, tipo: "Doble", maxPersonas: 4, permiteMascotas: false },
    { id: 3, tipo: "Familiar", maxPersonas: 6, permiteMascotas: true }
];

let totalPersonas = 0;

let nombreCliente = prompt("Ingrese su nombre completo");
let tipoHabitacion = parseInt(prompt("Seleccione el tipo de habitación:\n1. Individual\n2. Doble\n3. Familiar"));
let numPersonas = parseInt(prompt("Ingrese la cantidad de personas"));
let esFumador = prompt("¿Es fumador? (si/no)").toLowerCase() === "si";
let traeMascotas = prompt("¿Trae mascotas? (si/no)").toLowerCase() === "si";
let diasEstadia = prompt("Ingrese el tiempo de la estadía en días");
let paisOrigen = prompt("Ingrese su país de origen");

let habitacionSeleccionada = habitaciones.find(h => h.id === tipoHabitacion);

if (habitacionSeleccionada) {
    if (numPersonas <= habitacionSeleccionada.maxPersonas) {
        if (habitacionSeleccionada.permiteMascotas || (!habitacionSeleccionada.permiteMascotas && !traeMascotas)) {
            let nuevaReserva = {
                nombre: nombreCliente,
                pais: paisOrigen,
                personas: numPersonas,
                dias: diasEstadia,
                tipoHabitacion: habitacionSeleccionada.tipo,
                fumador: esFumador,
                mascotas: traeMascotas
            };
            reservas.push(nuevaReserva);
            totalPersonas += numPersonas;
            alert(`Reserva exitosa para ${nombreCliente} de ${paisOrigen}.\n Número de personas: ${numPersonas} \n Estadia: ${diasEstadia} días \n Tipo de habitación: ${habitacionSeleccionada.tipo} \n Fumador: ${esFumador ? 'Sí' : 'No'} \n Mascotas: ${traeMascotas ? 'Sí' : 'No'}`);
        } else {
            alert("Lo lamentamos, las mascotas solo se permiten en habitaciones familiares.");
        }
    } else {
        alert(`Lo lamentamos, el número de personas excede el máximo permitido para la habitación ${habitacionSeleccionada.tipo}.`);
    }
} else {
    alert("Tipo de habitación no válido.");
}

alert(`El número total de reservas en el hotel es de ${reservas.length} y el número total de personas es ${totalPersonas}.`);
