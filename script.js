function mostraTexto(e) {
  document.querySelector('#meme-text').innerText = e.target.value;
}

function atualizaFoto(e) {
  // if (e.target.classList.contains('memes')) {
  if (e.target.src !== undefined) {
    // document.querySelector('#meme-image-container').style.backgroundImage = `url(${e.target.src})`;
    document.querySelector('#meme-image').src = e.target.src;
    // .src = `imgs/meme${e.target.id[e.target.id.length - 1]}.png`;
  }
}

function novaImagem() {
  // https://pt.stackoverflow.com/questions/383341/utiliza%C3%A7%C3%A3o-do-input-file-com-js
  const reader = new FileReader();
  reader.readAsDataURL(document.querySelector('#meme-insert').files[0]);
  reader.onload = () => {
    // document.querySelector('#meme-image-container').style.backgroundImage = `
    // url(${reader.result})`;
    document.querySelector('#meme-image').src = reader.result;
  };
}

function borda(a) { document.querySelector('#meme-image-container').classList = a.target.id; }

function configurar() {
  document.querySelector('#text-input').addEventListener('input', mostraTexto);
  document.addEventListener('click', atualizaFoto);
  document.querySelector('#meme-insert').addEventListener('change', novaImagem);
  document.querySelector('#fire').addEventListener('click', borda);
  document.querySelector('#water').addEventListener('click', borda);
  document.querySelector('#earth').addEventListener('click', borda);
}

window.onload = configurar;

// REQUISITOS FALTANTES
// carregar imagem
// botões de bordas

// Linha em branco é de graça né linter
