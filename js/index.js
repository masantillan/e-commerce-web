import { fichas } from "./fichas.js";
import { showCart } from "./storage.js";
import { actCont } from "./ui.js";

fetch("../data/productos.json")
  .then((response) => response.json())
  .then((productos) => {
    fichas(productos);
  })
  .catch((error) => console.error(error));
