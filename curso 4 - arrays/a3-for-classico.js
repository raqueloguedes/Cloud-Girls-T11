const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//indice = 0: onde começa
//indice<notas.length: enquanto for menor que 
//indice++ soma 1 e é sempre executada ao final do bloco e a variavel vai ficando com mais 1


for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}