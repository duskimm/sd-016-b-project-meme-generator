let textInput = document.getElementById('text-input');

function insertText(event) {
  document.getElementById('meme-text').innerText = event.target.value;
}

textInput.addEventListener('keyup', insertText);

let imageInput = document.getElementById('meme-insert');

// ------------------

function readImage() {

  // console.log(this.files);
  if (this.files && this.files[0]) {
    let file = new FileReader();
    file.readAsDataURL(this.files[0]);
    file.onload = function(e) {
      document.getElementById("meme-image").src = e.target.result;
    };
  }
}

document.getElementById("meme-insert").addEventListener("change", readImage);