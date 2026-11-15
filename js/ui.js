export const actCont = (carrito) => {
  const contador = document.getElementById("contador-carrito");

  if (contador) {
    const cantidad = carrito.reduce(
      (total, producto) => total + (producto.cantidad || 1),
      0
    );

    contador.textContent = cantidad || "";
  }
};

export const msj = (texto) => {
    alert(texto);
};