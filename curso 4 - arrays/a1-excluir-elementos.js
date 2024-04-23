const notas = [10, 6, 8, 5.5, 10];

notas.pop();//aqui vai sempre excluir o ultimo elemento

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

//console.log(media);

console.log(media.toFixed(2));//to fixed acieta duas casas decimais, arredonda