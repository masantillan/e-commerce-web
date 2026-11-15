import { saveCart, showCart, trashCart } from "./storage.js";

import { actCont, msj } from "./ui.js";

export const addToCart = (producto) => {
  const carrito = showCart();

  const existe = carrito.find((item) => item.producto === producto.producto);

  if (existe) {
    existe.cantidad = (existe.cantidad || 1) + 1;
  } else {
    carrito.push({
      ...producto,
      cantidad: 1,
    });
  }

  saveCart(carrito);
  actCont(carrito);
  msj("Añadido correctamente");
};

export const delProd = (indice) => {
  //Pido el carrito a localStorage
  const carrito = showCart();
  if (carrito[indice].cantidad > 1) {
    carrito[indice].cantidad--;
  } else {
    carrito.splice(indice, 1);
  }

  //Guardo el carrito en localStorage
  saveCart(carrito);

  //Actualizo el contador
  actCont(carrito);
  msj("Producto eliminado");
};

export const dumpCart = () => {
  //Vacio el carro y reseteo el contador
  trashCart();
  actCont([]);
  msj("Carrito vacio");
};

export const calcTot = (carrito) => {
  return carrito.reduce((total, producto) => {
    return total + producto.precio * (producto.cantidad || 1);
  }, 0);
};