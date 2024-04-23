const notas = [10, 9.5, 8, 7, 6];
//original
/*
const notasAtualizadas = notas.map(function (nota) { 
    return nota + 1;
})
*/
// aqui eu já posso chamar a função e como só é um retorno, posso abreviar
const notasAtualizadas = notas.map((nota) => nota + 1)

const notasAtualizadas10 = notas.map((nota10) => nota10 + 1 >= 10 ? 10: nota10 + 1);
//                                     função   condição se 10+1 for maior que 10 a ? retornar 10 : senão somar nota+1
console.log(notasAtualizadas);
console.log(notasAtualizadas10);