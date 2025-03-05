function verificarIntervalo (Numero, limiteInferior, limiteSuperior) {

if (Numero >= limiteInferior  <= limiteSuperior) {
return true;
} else {
    return false;
}
}


// esemplu di uzar



let Numero = 5;
let limiteSuperior = 1;
let limiteInferior = 10;



if (verificarIntervalo (Numero, limiteInferior, limiteSuperior)) {
    console.log (`o Numero ${Numero} esta dentro do intervalo de ${limiteInferior} a ${limiteSuperior}.`)
    console.log (`o Numero ${Numero} esta fora do intervalo de ${limiteInferior} a ${limiteSuperior}.`)
}
