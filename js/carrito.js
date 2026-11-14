import { showCart } from "./storage.js";
import { actCont } from "./ui.js";

const renderCart = () => {
  const carrito = showCart();
  actCont(carrito);

  const contenedor = document.getElementById("cart-cont");

  const actButtons = document.getElementById("cart-action");

  contenedor.innerHTML = "";
  actButtons.innerHTML = "";
};
