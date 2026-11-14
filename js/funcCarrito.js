import { saveCart, showCart, trashCart } from "./storage.js";

import { actCont, msj } from "./ui.js";

export const addToCart = (producto) => {
  const carrito = showCart();
  carrito.push(producto);

  saveCart(carrito);

  actCont(carrito);
  msj("Añadido correctamente");
};

export const delProd = (indice) => {
  const carrito = showCart();
  carrito.splice(indice, 1);

  saveCart(carrito);

  actCont(carrito);
  msj("Producto eliminado");
};

export const dumpCart = () => {
  trashCart();
  actCont([]);
  msj("Carrito vacio");
};
