const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };


// Función que convierte de dólares a yenes
const fromDollarToYen = (dollar) => {
    return dollar * 147.72;
};

// Función que convierte de euros a dólares
const fromEuroToDollar = (euro) => {
    return euro * 1.17;
};

// Función que convierte de yenes a libras
const fromYanToPound = (yen) => {
    return yen * 0.0050;
};

module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYanToPound
};
