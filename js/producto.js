const formProducto = document.getElementById('form-producto');
const talleProducto = document.getElementById('talle-producto');
const exitoProducto = document.getElementById('exito-producto');

let sku = 1000

// Mostar "Producto agregado con exito" en el browser
const renderExitoCarrito = () => {
    const exito = document.createElement('P');
    exito.textContent = `Se ha agregado con exito el producto al carrito!`

    exitoProducto.appendChild(exito);
  // Desaparezca despues de 3 segundos
  setTimeout(() => {
    exito.remove();
  }, 3000);
}

// Escuchar el evento submit
formProducto.addEventListener('submit', (event) => {
    sku = sku + 1
    const tipo = "Buzo"
    const modelo = "De Gira"
    const color = "Blanco"
    const talle = talleProducto.value
    const precio = 6400

    const producto = new Producto(sku, tipo, modelo, color, talle, precio);

    addCarrito(producto);

})

// Escuchar el evento submit Exito
formProducto.addEventListener('submit', (event) => {
  event.preventDefault();
  renderExitoCarrito();
})
