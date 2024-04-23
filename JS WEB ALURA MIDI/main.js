function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
/*
    if (elemento === null) {
        // alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }

    if (elemento != null) {
        if (elemento.localName === 'audio') {
            elemento.play();
        }
    }

 */
    // elemento != null se torna elemento pois o JS entende essa declaração como elemento sendo true, ou seja diferente de null
        if (elemento && elemento.localName === 'audio') {
            elemento.play();
        }
        else {
            //alert('Elemento não encontrado');
            console.log('Elemento não encontrado ou seletor inválido');
        }
}

const listaDeTeclas = document.querySelectorAll('.tecla');//busca todas as teclas contidas em class e faz tipo um array

// para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];//para abreviar 
    const instrumento = tecla.classList[1]; //aqui é o segungo elemento do button tecla tecla_x, a segunda parte do id audio e da tecla tem a mesma nomenclatura
    //listaDeTeclas[contador].classList[1]
    const idAudio = `#som_${instrumento}`;  //texto dinamico escreve assim 
     console.log(idAudio);

    tecla.onclick = function () {   // listaDeTeclas[contador].onclick = function
        tocaSom(idAudio);
    }

/*
    tecla.onkeydown = function () { //AQUI É PRA QUANDO USAR O TECLADO FICAR VERMELHO 
        tecla.classList.add('ativa');//do css
    }

tecla.onkeydown = function (evento) { // cod repetitivo

    //console.log(evento.code == 'Space') pra ver o nome da tecla

    if (evento.code === 'Space') {
        tecla.classList.add('ativa');
    }

    if (evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }

}
*/

tecla.onkeydown = function (evento) {// o || funciona como ou

    if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }

}
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    
}
