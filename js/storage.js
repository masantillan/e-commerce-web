const CLAVE = "carrito";

export const saveCart = (carrito) => {
    localStorage.setItem(CLAVE,JSON.stringify(carrito));
};

export const showCart = (carrito) => {
    return JSON.parse(localStorage.getItem(CLAVE)) || [];
};

export const trashCart = () => {
    localStorage.removeItem(CLAVE);
};