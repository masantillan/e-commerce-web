export const actCont = (carrito) => {
    const contador = document.getElementById("contador");
    if(contador){
        contador.textContent = carrito.length || "";
    }
};

export const msj = (texto) => {
    alert(texto);
};