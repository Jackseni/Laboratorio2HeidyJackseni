// Este sera nuestro archivo
// que contiene las funciones para 
//calcular el are4a de las figuras 
//geometricas.

// Para cuadrado

const square = (s) => {
    return s * s;
};

// function square(s){
//     return s * s;
// };

const rectangle = (b, h) => {
    return b * h;
};

const triangle = (b, h) => {
    return b * h / 2;
};

const circle = (r) => {
    return Math.PI * r * r;
};

const ellipse = (a, b) => {
    return Math.PI * a * b;
};

module.exports = {
    square,
    rectangle,
    triangle,
    circle,
    ellipse
};