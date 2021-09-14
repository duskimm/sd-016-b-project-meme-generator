const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeContainer = document.querySelector('#meme-image-container');
const memeImage = document.querySelector('#meme-image');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const image1 = document.querySelector('#meme-1')
const image2 = document.querySelector('#meme-2')
const image3 = document.querySelector('#meme-3')
const image4 = document.querySelector('#meme-4')

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            let img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });
  // Funcao encontrada em https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html 



function addText () {
    memeText.innerHTML = textInput.value
}
textInput.addEventListener('keyup', addText);

function changeFire () {
    if (memeContainer.style.border === '3px dashed red') {
        memeContainer.style.border = '1px solid black'
    } else {
        memeContainer.style.border = '3px dashed red'
    }
}
fireButton.addEventListener('click', changeFire)

function changeWater () {
    if (memeContainer.style.border === '5px double blue') {
        memeContainer.style.border = '1px solid black'
    } else {
        memeContainer.style.border = '5px double blue'
    }
}
waterButton.addEventListener('click', changeWater)

function changeEarth () {
    if (memeContainer.style.border === '6px groove green') {
        memeContainer.style.border = '1px solid black';
    } else {
        memeContainer.style.border = '6px groove green';
    }
}
earthButton.addEventListener('click', changeEarth)

function changeToFirst (event) {
    memeImage.src = event.target.src;
}
image1.addEventListener('click', changeToFirst);

function changeToSecond (event) {
    memeImage.src = event.target.src;
}
image2.addEventListener('click', changeToFirst);

function changeToThird(event) {
    memeImage.src = event.target.src;
}
image3.addEventListener('click', changeToFirst);

function changeToFourth (event) {
    memeImage.src = event.target.src;
}
image4.addEventListener('click', changeToFirst);