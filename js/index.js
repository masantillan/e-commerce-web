import { fichas } from "./fichas.js";

fetch("../data/productos.json")
  .then((response) => response.json())
  .then((productos) => {
    fichas(productos);
  })
  .catch((error) => console.error(error));
