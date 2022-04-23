function ajustarAltura(cajaDeTexto)
{
    console.log(cajaDeTexto);
    console.log(cajaDeTexto.scrollHeight);
    cajaDeTexto.style.height = "auto";
    cajaDeTexto.style.height = cajaDeTexto.scrollHeight + "px";
    console.log("Hola!");
}