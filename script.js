const memeText = document.querySelector("#meme-text");
const memeInput = document.querySelector("#text-input");

memeInput.addEventListener('input', function(event){
    event.target.value = this.value; 
    memeText.innerHTML = this.value;
})
