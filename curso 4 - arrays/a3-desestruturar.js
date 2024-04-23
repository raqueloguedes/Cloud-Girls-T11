const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//              [0]      [1]  
const lista = [alunos, medias]; 

//usando os dados de procurando em lista 
function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista;//desestruturou aqui, transformou em duas variaveis
        const indice = alunos.indexOf(aluno);
        //                  [1]     VAR INDICE
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
        } else {
        console.log('Estudante não existe na lista');
        }
    }
    
exibeNomeENota('Juliana');
exibeNomeENota('Vini');