const bodyCarrito = document.getElementById('body-carrito');
const precioTotalCarrito = document.getElementById('precio-total-carrito');

// Agregar productos al carrito en el browser
const renderListaCarrito = () => {
  bodyCarrito.innerHTML = "";
  for (let producto of carrito) {
      let itemCarrito = document.createElement('TR');
      itemCarrito.innerHTML = `
                              <td class="carrito__producto">
                                <img src="../img/productos-hoodie-blanco-1.jpg" alt="" class="carrito__imagen">
                                <div class="carrito__info">
                                  <p class="carrito__nombre">${producto.tipo} ${producto.modelo} ${producto.talle}</p>
                                  <p data-id=${producto.sku} class="carrito__eliminar">remover</p>
                                </div>
                              </td>
                              <td class="carrito__cantidad">1u</td>
                              <td class="carrito__subtotal">$ ${producto.precio}</td>
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
  }
  precioTotalCarrito.innerText = `Total: $${total}` 
}

renderPrecioTotalCarrito()

// Escuchar el evento click en remover
bodyCarrito.addEventListener('click', (event) => {
  if (event.target.classList.contains('carrito__eliminar')) {
    let eliminarProducto = event.target;
    let id = parseInt(eliminarProducto.dataset.id);
    removeCarrito(id);
    // document.location.reload();
    renderListaCarrito()
    renderPrecioTotalCarrito()
  }
})
