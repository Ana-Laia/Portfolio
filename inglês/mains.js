const tituloHelloWorld = document.querySelector('h1');
typeWriter(tituloHelloWorld);

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() =>
            elemento.innerHTML += letra, 130 * i
    )
    })
}