const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2); //0-9 paramentro do incicio pra saber onde começas após dividir
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);  // aqui ja sabe que é a parte final do incice 10-19

console.log(listaEstudantes.length);    //eu quem coloquei
console.log(sala1); 
console.log(sala2);
