const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
/*
notas.forEach()(function (nota) {
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(`a média das notas é ${media}`);
*/
notas.forEach(somaNotas);   //o for each não tem retorno, serve para somar aqui 

function somaNotas (nota) {
    somaDasNotas += nota;
}
const media = somaDasNotas / notas.length;
console.log(`a média das notas é ${media}`);