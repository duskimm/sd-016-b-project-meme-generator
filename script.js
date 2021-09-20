const photoText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const fileChoose = document.getElementById('meme-insert');
let output = document.getElementById('output');

function printText () {
  if (photoText.value != '') {
    memeText.innerText = photoText.value;
  }
}
photoText.addEventListener('keyup', printText);


let loadFile = function(event) {  
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};
// fileChoose.addEventListener('click', loadFile)
// window.onload = function start () {
// }