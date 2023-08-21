//Carrito
async function cargarProductos() {
    try {
        const response = await fetch('productos.json');
        const productos = await response.json();
        return productos;
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        return [];
    }
}

async function iniciarApp() {
    const productos = await cargarProductos();

    // Código para mostrar productos en la página principal
    const productosContainer = document.querySelector('.productos');
    productos.forEach(producto => {
        const prodDiv = document.createElement('div');
        prodDiv.innerHTML = `
            <div class="prod" align="center">
                <img src="imagenes/${producto.id}.jpg">
                <button onclick="addToCart('${producto.nombre}', ${producto.precioUSD})">Comprar</button>
                <label for="${producto.id}">${producto.nombre} - USD$${producto.precioUSD}</label>
            </div>
        `;
        productosContainer.appendChild(prodDiv);
    });
}

// Función para agregar productos al carrito
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        const newProduct = {
            name: productName,
            price: price,
            quantity: 1,
        };
        cart.push(newProduct);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Producto agregado al carrito!',
        showConfirmButton: false,
        timer: 1500
    });
}

// Llamada para iniciar la app y mostrar los productos
iniciarApp();
