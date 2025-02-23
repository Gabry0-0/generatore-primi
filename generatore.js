let a = [1, 1, 23, 432, 5, 2];
let indice = 0;
let elementoHTML = document.getElementById("numero");

function mostraProssimo() {
    elementoHTML.textContent = a[indice];
    indice++;
    if (indice < a.length) {
        setTimeout(mostraProssimo, 1000); // 1000 millisecondi = 1 secondo
    }
}

mostraProssimo();
