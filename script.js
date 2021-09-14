const textInput = document.querySelector('#text-input');

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

