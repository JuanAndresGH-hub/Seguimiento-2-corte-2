const productos = [
    { nombre: 'Producto 1', precio: 10, stock: 100 },
    { nombre: 'Producto 2', precio: 15, stock: 50 },
    { nombre: 'Producto 3', precio: 20, stock: 75 }
];

let carrito = [];

function agregarAlCarrito() {
    const nombreProducto = prompt("Ingrese el nombre del producto:");
    const cantidad = parseInt(prompt("Ingrese la cantidad:"));
    
    const producto = productos.find(p => p.nombre === nombreProducto);
    if (producto && producto.stock >= cantidad) {
        carrito.push({ nombre: nombreProducto, precio: producto.precio, cantidad });
        producto.stock -= cantidad;
        alert(`${cantidad} de ${nombreProducto} agregado(s) al carrito.`);
    } else {
        alert('Producto no disponible o cantidad no válida.');
    }
}
function mostrarCarrito() {
    let mensaje = 'Carrito de Compras:\n';
    carrito.forEach(item => {
        mensaje += `${item.cantidad} x ${item.nombre} - Subtotal: $${item.precio * item.cantidad}\n`;
    });
    alert(mensaje);
}
function calcularTotal() {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
    });
    alert(`Total de la Compra: $${total}`);
}
while (true) {
    const opcion = prompt("Seleccione una opción:\n1. Agregar producto al carrito\n2. Mostrar carrito\n3. Calcular total\n4. Salir");
    if (opcion === '1') {
        agregarAlCarrito();
    } else if (opcion === '2') {
        mostrarCarrito();
    } else if (opcion === '3') {
        calcularTotal();
    } else if (opcion === '4') {
        break;
    } else {
        alert("Opción no válida. Inténtelo de nuevo.");
    }
}
