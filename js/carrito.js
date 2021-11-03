const bodyCarrito = document.getElementById('body-carrito');
const precioTotalCarrito = document.getElementById('precio-total-carrito');

// Agregar productos al carrito en el browser
const renderListaCarrito = () => {

  for (let producto of carrito) {
      let itemCarrito = document.createElement('TR');
      itemCarrito.innerHTML = `
                              <td>${producto.tipo} "${producto.modelo}" Talle: ${producto.talle}</td>
                              <td>1u</td>
                              <td>$${producto.precio}</td>
                              `
      itemCarrito.classList.add('carrito__fila')
      bodyCarrito.appendChild(itemCarrito)
  }
}

renderListaCarrito()

// Sumar el total de los productos en el browser
const renderPrecioTotalCarrito = () => {
  let total = 0;
  for (let producto of carrito) {
      total += producto.precio
      precioTotalCarrito.innerText = `Total: $${total}`

  }
}
renderPrecioTotalCarrito()
