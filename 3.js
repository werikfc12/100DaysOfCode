function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}


let resultado1 = verificarParOuImpar(4);
let resultado2 = verificarParOuImpar(7);


console.log (resultado1);
console.log (resultado2);