var totalUSD = 0;

function mostrarCarrito() {
    var carrito = JSON.parse(localStorage.getItem('cart')) || [];
    var carritoDiv = document.getElementById('carrito');
    var totalSpan = document.getElementById('total');
    totalUSD = 0;

    carritoDiv.innerHTML = '';

    carrito.forEach(product => {
        totalUSD += product.price * product.quantity;
        var productoDiv = document.createElement('div');
        productoDiv.innerHTML = `<p>${product.name} - ${product.price} USD - Cantidad: ${product.quantity}</p>`;
        carritoDiv.appendChild(productoDiv);
    });

    var monedaSeleccionada = document.getElementById("moneda").value;
    var tasaDeCambio = obtenerTasaDeCambio(monedaSeleccionada);
    var totalEnMoneda = totalUSD * tasaDeCambio;
    totalSpan.textContent = `${monedaSeleccionada} ${totalEnMoneda.toFixed(2)}`;
}

function obtenerTasaDeCambio(monedaSeleccionada) {
    if (monedaSeleccionada === "USD") {
        return 1;
    } else if (monedaSeleccionada === "EUR") {
        return 0.91;
    } else if (monedaSeleccionada === "GBP") {
        return 0.79;
    } else if (monedaSeleccionada === "ARS") {
        return 500;
    } else {
        return 1;
    }
}

function finalizarCompra() {
    localStorage.removeItem('cart');
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Compra Realizada con éxito! Carrito vaciado.',
        showConfirmButton: false,
        timer: 1500
    })
    mostrarCarrito();
}

mostrarCarrito();