function calcularCostoTotal() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var costoTotal = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        if (checkbox.checked) {
            costoTotal += parseInt(checkbox.value);
        }
    }

    document.getElementById("costoTotal").innerText = costoTotal;
}

function convertir() {
    var costoTotalUSD = parseInt(document.getElementById("costoTotal").innerText);
    var tasaCambio = 500;

    var costoTotalARS = convertirMoneda(costoTotalUSD, tasaCambio);

    document.getElementById("costoARS").innerText = costoTotalARS;
}

function convertirMoneda(monto, tasa) {
    return monto * tasa;
}


//Info de productos
const productos = [
    {
        id: "producto1",
        nombre: "Dibujo Tradicional",
        precioUSD: 15,
        precioARS: 7500,
    },
    {
        id: "producto2",
        nombre: "Dibujo Digital",
        precioUSD: 20,
        precioARS: 10000,
    },
    {
        id: "producto3",
        nombre: "Diseño de logotipos",
        precioUSD: 80,
        precioARS: 40000,
    },
    {
        id: "servicio1",
        nombre: "Modelaje 3D",
        precioUSD: 120,
        precioARS: 60000,
    },
    {
        id: "servicio2",
        nombre: "Contratar",
        precioUSD: 20,
        precioARS: 10000,
    },
];

// Mostrar alert con la información del producto ingresado por el usuario
function mostrarInformacionProducto() {
    const nombreProducto = prompt("Ingrese el nombre del producto deseado:");

    if (nombreProducto === null) {
        alert("Ha cancelado la solicitud.");
        return;
    }

    const selectedProduct = productos.find(
        producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase()
    );

    if (selectedProduct) {
        const info = `ID: ${selectedProduct.id}\nNombre: ${selectedProduct.nombre}\nPrecio USD: $${selectedProduct.precioUSD}\nPrecio ARS: $${selectedProduct.precioARS}`;
        alert(info);
    } else {
        alert("Producto no encontrado o nombre inválido. Intente nuevamente.");
    }
}

// Llamar a la función para mostrar la información cuando se carga la página
window.onload = function () {
    setTimeout(function () {
        mostrarInformacionProducto();
    }, 500);
};
