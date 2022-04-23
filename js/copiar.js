var botonCopiar = document.querySelector(".copiar-elemento");

botonCopiar.addEventListener("click", function()
{
    navigator.clipboard.writeText("");
    var textoACopiar = document.getElementById("mensaje-codificado").value + document.getElementById("mensaje-decodificado").value;
        console.log(textoACopiar);
    navigator.clipboard.writeText(textoACopiar).then(() => 
    {
        alert("Texto copiado al portapapeles, precione las teclas CTRL + V para pegar el texto!");
    });
});