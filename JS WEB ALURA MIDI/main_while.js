function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play(); //parametro
}

const listaDeTeclas = document.querySelectorAll('.tecla');//busca todas as teclas contidas em class e faz tipo um array

let contador = 0;

// enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];//para abreviar 
    const instrumento = tecla.classList[1]; //aqui é o segungo elemento do button tecla tecla_x, a segunda parte do id audio e da tecla tem a mesma nomenclatura
    //listaDeTeclas[contador].classList[1]

    //console.log(instrumento);

    const idAudio = `#som_${instrumento}`;  //texto dinamico escreve assim 
     console.log(idAudio);

    tecla.onclick = function () {   // listaDeTeclas[contador].onclick = function
        tocaSom(idAudio);
    }

    contador = contador + 1;

    //console.log(contador);
}
