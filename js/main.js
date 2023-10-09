const botoes = document.querySelectorAll(".dados__botao");

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const id = botao.dataset.target;
    
    const image = document.getElementById(`${id}__img`);

    const iconeDoBotaoFechado = document.getElementById(`${id}__icone-botao-fechado`);
    const iconeDoBotaoAberto = document.getElementById(`${id}__icone-botao-aberto`);

    if (image.style.display === 'none') {
      image.style.display = 'block';

      iconeDoBotaoAberto.style.display = 'block';
      iconeDoBotaoFechado.style.display = 'none';
    } else {
      image.style.display = 'none';
      
      iconeDoBotaoAberto.style.display = 'none';
      iconeDoBotaoFechado.style.display = 'block';
    }
  });
});

/* Carrossel */

const imagens = document.getElementById('galeria-fotos');
const imagem = document.querySelectorAll('#galeria-fotos .imagem__carrosel') /*dentro da section galeria de fotos vai pegar as imagens que tem como id imagem-carrosel*/

let numeroImagem = 0;

function carrosel(){
    numeroImagem++;

    if (numeroImagem > imagem.length - 1) {
        numeroImagem = 0;
        imagens.style.transform = `translateX(0)`;
    } else {
        imagens.style.transform = `translateX(${-numeroImagem * 1122}px)`;
    }
}

setInterval(carrosel, 1800) /*milisegundos*/
