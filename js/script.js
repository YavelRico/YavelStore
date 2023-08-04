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

//Carrito
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find((item) => item.name === productName);

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
    })
}