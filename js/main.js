class Producto {
  constructor(sku, tipo, modelo, color, talle, precio) {
    this.sku = sku
    this.tipo = capitalizar(tipo)
    this.modelo = capitalizar(modelo)
    this.color = capitalizar(color)
    this.talle = talle.toUpperCase()
    this.precio = parseInt(precio)
  }
}


// Funcion para capitalizar la primer letra de un string
function capitalizar(palabra) {
  return palabra[0].toUpperCase() + palabra.slice(1);
}

// Array carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Metodo que retorna el contenido del carrito
const getCarrito = () => {
    return carrito;
}

// Metodo para agregar un producto al carrito
const addCarrito = producto => {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

// Metodo para hallar un producto por su SKU
const findCarrito = sku => {

    const producto = carrito.find(producto => producto.sku === sku);

    if (!producto) {
        throw new Error(`No existe el producto con el SKU ${sku}`)
    }

    return producto;

}

// Metodo para eliminar un producto segun su SKU
const removeCarrito = (sku) => {

    const producto = findCarrito(sku);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito))
}


// Metodo para modificar el color de un producto segun su SKU
const modifyCarrito = (sku, color) => {
    const producto = findCarrito(sku);
    producto.color = capitalizar(color);
}

const bodyCarrito = document.getElementById('body-carrito');
const precioTotalCarrito = document.getElementById('precio-total-carrito');

const formCarrito = document.getElementById('form-carrito');
const talleCarrito = document.getElementById('talle-carrito');
const agregarCarrito = document.getElementById('agregar-carrito');
const exitoCarrito = document.getElementById('exito-carrito');


// Mostar "Producto agregado con exito" en el browser
const renderExitoCarrito = () => {
    const exito = document.createElement('P');
    exito.textContent = `Se ha agregado con exito el producto al carrito!`

    exitoCarrito.appendChild(exito);
  // Desaparezca despues de 3 segundos
  setTimeout(() => {
    exito.remove();
  }, 3000);
}

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
