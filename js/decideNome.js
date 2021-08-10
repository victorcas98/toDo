let victor = document.getElementById('victor');
let dora = document.getElementById('dora');
let dario = document.getElementById('dario');
let uriel = document.getElementById('uriel');
let siro = document.getElementById('siro');
let giullia = document.getElementById('giullia');

let body = document.getElementById('body');

victor.addEventListener("click", mudaNome);

function mudaNome(){
    document.body.classList.add('red');
}