const notas = [10, 6, 8];

notas.push(7); //Precisamos utilizar funções do JavaScript para fazer essa alteração. A função que utilizaremos é push(). Então, chamamos a variável notas e, após ela, a palavra push(), que o JavaScript deixa pronta para ser utilizada.
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);