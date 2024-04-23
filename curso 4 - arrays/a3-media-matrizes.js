const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media = 0
 
for (let i = 0; i < notasGerais.length; i++) {          // aqui é o i=indice vai percorrer por notas gerais que tem 3 arrays 0,1,2
  for (let j = 0; j < notasGerais[i].length; j++) {     // aqui o j vai ser o elemento dos array de dentro
    media += notasGerais[i][j]/notasGerais[i].length;   //
  }
}
 
media = media/notasGerais.length//aqui tem que dividir senão ele vai somar a media de cada array
 
console.log(media)
