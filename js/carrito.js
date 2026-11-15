import { showCart } from "./storage.js";
import { actCont } from "./ui.js";
import { delProd, calcTot, dumpCart} from "./funcCarrito.js";

const renderCart = () => {
  const carrito = showCart();
  actCont(carrito);
  const total = document.getElementById("totalCompra");
  total.textContent = `Total: $${calcTot(carrito)}`;

  const contenedor = document.getElementById("prodCarrito");

  contenedor.innerHTML = "";

  carrito.forEach((producto, indice) => {
    // Creo los productos
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("prodCarrito", "fichas-bg");

    const info = document.createElement("div");
    info.classList.add("descCarrito");

    const img = document.createElement("img");
    img.src = `../${producto.imagen}`;
    img.alt = producto.producto;

    const titulo = document.createElement("h3");
    const cantidad = producto.cantidad || 1;
    titulo.textContent = `${cantidad} x ${producto.producto}`;

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    const subtotal = document.createElement("p");
    subtotal.textContent = `Subtotal: $${producto.precio * producto.cantidad}`;

    const boton = document.createElement("button");
    boton.classList.add("boton");
    boton.textContent = "Eliminar del carrito";

    boton.addEventListener("click", () => {
      delProd(indice);
      renderCart();
    });

    // Información del producto
    info.appendChild(titulo);
    info.appendChild(descripcion);
    info.appendChild(subtotal);

    // Estructura de las fichas
    tarjeta.appendChild(img);
    tarjeta.appendChild(info);
    tarjeta.appendChild(boton);

    contenedor.appendChild(tarjeta);
  });
};

const btnVaciar = document.getElementById("vaciarCarrito");

btnVaciar.addEventListener("click", () => {
  dumpCart();
  renderCart();
});

const finalizarCompra = async () => {
  try {
    const respuesta = await fetch("/checkout", {
      method: "POST"
    });

    if (!respuesta.ok) {
      throw new Error("Error al finalizar la compra");
    }

    msj("Compra finalizada");
  } catch (error) {
    console.error(error);
  }
};

renderCart();
