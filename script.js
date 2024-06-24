function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

window.alert('Hi! This is my first portfolio (Oi! Esse é meu primeiro portfólio)');
