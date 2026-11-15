import { addToCart } from "./funcCarrito.js";

export const fichas = (productos) => {
  const contenedor = document.getElementById("fichas");

  productos.forEach((producto) => {
    //Creo los productos
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("fichas");

    const img = document.createElement("img");
    img.src = `./${producto.imagen}`;
    img.alt = producto.producto;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.producto;

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    const boton = document.createElement("button");
    boton.classList.add("boton");
    boton.textContent = "Agregar al carrito";

    boton.addEventListener("click", () => {
      addToCart(producto);
    });

    //Estructura de fichas
    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);

    contenedor.appendChild(tarjeta);
  });
};
