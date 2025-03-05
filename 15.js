const contaLetra = (frase, letra) =>{
let quantidade = 0;
frase.split("").map(LetraNaFrase=> LetraNaFrase===letra||LetraNaFrase===letra.toUpperCase()?
quantidade++:"");
return quantidade;
}

let resultado = contaLetra("nãosei","i");
console.log (resultado);