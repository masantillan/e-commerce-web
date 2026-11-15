const CLAVE = "carrito";

export const saveCart = (carrito) => {
    //Conversión a JSON antes de guardar el carrito
    localStorage.setItem(CLAVE,JSON.stringify(carrito));
};

export const showCart = (carrito) => {
    //Lectura del JSON para ver lo que tiene el carrito
    return JSON.parse(localStorage.getItem(CLAVE)) || [];
};

export const trashCart = () => {
    //Remuevo todo el carrito
    localStorage.removeItem(CLAVE);
};