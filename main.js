//a função que dev ser executada e tocaSom, mas que som? Nesse caso, será o parametro idElementoAudio. Ou seja, o endereço da tecla será procurado no html e resolvido. 
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio);
    //se o elemento pesquisado for igual a "inexistente", o alerta de elemnto não encontrado aparecerá.
}
const listaDeTeclas=document.querySelectorAll('.tecla');
//Estrutura de repetição - Enquanto
for( let contador = 0; contador <listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classlist[1];
    const idAudio =`#som_$(instrumento)`;

    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    };
    tecla.onkeydown = function(evento){
        if(evento.code ==='Enter' || evento.code ==='Space'){
            tecla.classlist.add('ativa');
        }
    };
    tecla.onkeyup = function(){
        tecla.classlist.remove('ativa');
    };
    console.log(instrumento);
console.log(contador);


    
    










    
    listaDeTeclas[contador].onclick = function(){
tocaSom('#som_tecla_splash');
    };
    contador = contador + 1;
}








