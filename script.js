
let textInput = document.querySelector('#text-input');
let memeText = document.querySelector('#meme-text');

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
  console.log(textInput.value);
})

// <input id="text-input" type="text">
// 		<div id="meme-image-container">
// 			<div id="meme-text"></div>