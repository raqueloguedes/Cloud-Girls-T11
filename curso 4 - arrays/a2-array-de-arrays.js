const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//              [0]      [1]  
const lista = [alunos, medias];     //aqui é um novo arrauy

//console.log(lista);
/*
console.log(
    `a aluna da posição 1 da lista é: ${lista[0][1]}` //aqui vai consultar o indice 0 do array lista e o indice 1 dentro desse.
    );
*/
console.log(
   `a aluna da posição 1 da lista é: ${lista[0][1]}.
   a nota dessa aluna é ${lista[1][1]}`
    );