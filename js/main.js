class Producto {
  constructor(tipo, modelo, color, talle, precio) {
    this.tipo = tipo
    this.modelo = modelo
    this.color = color
    this.talle = talle
    this.precio = precio
  }
}

// Funcion para capitalizar la primer letra de un string
const capitalizar = (palabra) => palabra[0].toUpperCase() + palabra.slice(1);

// Funcion para remover objeto "Producto" según su índice
const remover = indice => {
  carrito.splice(indice, 1)
}

console.log("Envíos gratis en compras superiores a $6500");

const carrito = [];

// Loop para agregar objetos al array "carrito" ------------------------------
do {
  var consultaAgregar = prompt("Indique si quiere agregar un producto al carrito o 'Fin' para terminar", "Si o fin").toLowerCase();
  if (consultaAgregar === "fin") {
    break;
  } else {
    let tipoProducto = capitalizar(prompt("Indique el tipo del producto", "Remera, buzo o gorra"));
    let modeloProducto = capitalizar(prompt("Indique el modelo del producto", "De gira, Ojos, Baires o Flaakko"));
    let colorProducto = capitalizar(prompt("Indique el color del producto", "Blanco/a o negro/a"));
    let talleProducto = prompt("Indique el talle del producto", "S, M, L, XL").toUpperCase();
    let precioProducto = parseInt(prompt("Indique el precio del producto", "1000-9999"));
    carrito.push(new Producto(tipoProducto, modeloProducto, colorProducto, talleProducto, precioProducto));
    alert("El producto se ha agregado al carrito con exito!");
  }
} while(consultaAgregar !== "fin");


console.log("Los productos en tu carrito son:");
carrito.forEach((elemento, indice) => console.log(elemento, indice));

// Loop para quitar objetos del array "carrito" usando función "remover" ------------------------------
do {
  var consultaRemover = prompt("Si desea remover un producto, indique su índice, sino escriba 'Fin' para terminar").toLowerCase();
  if (consultaRemover === "fin") {
    break;
  } else {
    remover(consultaRemover);
    console.log("El producto se ha quitado del carrito con exito! Los productos que quedan son:");
    carrito.forEach((elemento, indice) => console.log(elemento, indice));
  }
} while(consultaRemover !== "fin")

// Calculo Precio ------------------------------
let precioTotal = 0;
let costoEnvio = 750;
let precioFinal = 0;

// Suma todos los precios de los objetos del array "carrito"
for (var producto of carrito) {
  precioTotal += producto.precio;
}

// Evaluación si corresponde envío gratis o no
if (precioTotal > 6500) {
  precioFinal = precioTotal;
  costoEnvio = 'GRATIS'
  alert(`El precio total de sus productos es de $${precioTotal}. Como el precio total supera los $6500, el envío es ${costoEnvio} haciendo que le precio total sea $${precioFinal}`);
} else {
  precioFinal = precioTotal + costoEnvio;
  alert(`El precio total de sus productos es de $${precioTotal}. Como el precio total no supera los $6500, el envío es de $${costoEnvio} haciendo que le precio total sea $${precioFinal}`);
}

function boton1() {
  confirm("Su compra se ha realizado con éxito")
}
function boton2() {
  confirm("Presione F5")
}
