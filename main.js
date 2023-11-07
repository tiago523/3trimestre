function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
document.querySelectorAll('.tecla');
const listaDeTeclas=document.querySelectorAll('.tecla');
let contador = 0;
//Estrutura de repetição - Enquanto
while(contador <listaDeTeclas.length){
    const instrumento = listaDeTeclas[contador].classlist[1];
    listaDeTeclas[contador].onclick = function(){
tocaSom('#som_tecla_splash');
    };
    contador = contador + 1;
}








