import { fichas } from "./fichas.js";
import { showCart } from "./storage.js";
import { actCont } from "./ui.js";

//Busco el JSON y muestro las fichas de productos
fetch("../data/productos.json")
  .then((response) => response.json())
  .then((productos) => {
    fichas(productos);
  })
  .catch((error) => console.error(error));

//Agrego un evento para que primero cargue y no intente leer algo que todavía no se creo
document.addEventListener("DOMContentLoaded", () => {
  const carrito = showCart();
  actCont(carrito);
});
