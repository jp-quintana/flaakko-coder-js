// Escuchar el evento submit
formCarrito.addEventListener('submit', (event) => {
    const sku = 1000
    const tipo = "Buzo"
    const modelo = "De Gira"
    const color = "Blanco"
    const talle = talleCarrito.value
    const precio = 6400

    const producto = new Producto(sku, tipo, modelo, color, talle, precio);

    addCarrito(producto);

})

// Escuchar el evento submit Exito
formCarrito.addEventListener('submit', (event) => {
  event.preventDefault();
  renderExitoCarrito();
})
