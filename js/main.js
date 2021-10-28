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

const listaCarrito = document.getElementById('lista-carrito');
const formCarrito = document.getElementById('form-carrito');
const inputSkuCarrito = document.getElementById('input-sku-carrito');
const inputTipoCarrito = document.getElementById('input-tipo-carrito');
const inputModeloCarrito = document.getElementById('input-modelo-carrito');
const inputColorCarrito = document.getElementById('input-color-carrito');
const inputTalleCarrito = document.getElementById('input-talle-carrito');
const inputPrecioCarrito = document.getElementById('input-precio-carrito');
const inputBotonCarrito = document.getElementById('input-boton-carrito');


// Agregar productos al carrito en el browser
const renderListaCarrito = () => {

  for (let producto of carrito) {
      let itemCarrito = document.createElement('li');
      itemCarrito.innerHTML = `
                              Sku: ${producto.sku}
                              Tipo: ${producto.tipo}
                              Modelo: ${producto.modelo}
                              Color: ${producto.color}
                              Talle: ${producto.talle}
                              Precio: $${producto.precio}
                              `
      listaCarrito.appendChild(itemCarrito)
  }
}

renderListaCarrito()

// Escuchar el evento submit del formulario
formCarrito.addEventListener('submit', (event) => {
    const sku = inputSkuCarrito.value
    const tipo = inputTipoCarrito.value
    const modelo = inputModeloCarrito.value
    const color = inputColorCarrito.value
    const talle = inputTalleCarrito.value
    const precio = inputPrecioCarrito.value

    const producto = new Producto(sku, tipo, modelo, color, talle, precio);

    addCarrito(producto);

})
