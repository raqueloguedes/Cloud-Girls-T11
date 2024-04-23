
const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

for (let i = 0; i < precos.length; i++) {
 precos[i] = precos[i] * desconto;
}

console.log(precos); //aqui o array é modificado


const precosf = [5.5, 6.2, 14, 19.5];

let descontof = 0.90;

for (let precof of precosf) {   //aqui os valores da variavel que consulta o array é que muda
 precof = precof * descontof;
}

console.log(precosf);