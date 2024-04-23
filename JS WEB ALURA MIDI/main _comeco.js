
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;// CHAMOU A FUNÇÃO PRO ONCLICK

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;





/*function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play()
}
*/
//document.querySelector('.tecla_pom')


