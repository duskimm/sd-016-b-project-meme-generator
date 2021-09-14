let textInput = document.getElementById('text-input');

function insertText(event) {
  let newString = event.target.value;
  document.getElementById('meme-text').innerText = newString;
}

textInput.addEventListener('keyup', insertText);