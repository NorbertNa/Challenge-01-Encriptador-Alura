var mensajeCodificado = [];

var espacioMensajeCodificado = document.getElementById("mensaje-codificado");
var botonCodificar = document.querySelector(".boton-codificar");
var botonCopiar = document.querySelector(".copiar-elemento");

botonCopiar.classList.add("invisible");

var textoAInvisibilizar1 = document.getElementById("standby");
var textoAInvisibilizar2 = document.getElementById("titulo");
var textoAInvisibilizar3 = document.getElementById("texto-caja-servidor");

botonCodificar.addEventListener("click", function()
{
    espacioMensajeCodificado = document.getElementById("mensaje-codificado");

    var mensaje = document.getElementById("caja-texto-cliente").value;
    if(verificarMensaje(mensaje) == true)
    {
        codificarMensaje(mensaje);
    }
    else
    {
        textoAInvisibilizar1.classList.remove("invisible");
        textoAInvisibilizar2.classList.remove("invisible");
        textoAInvisibilizar3.classList.remove("invisible");
        espacioMensajeDecodificado.classList.add("invisible");
        espacioMensajeCodificado.classList.add("invisible");
        botonCopiar.classList.add("invisible");

        espacioMensajeCodificado.textContent = "";
        espacioMensajeDecodificado.textContent = "";
        alert("El texto contiene un caracter no válido. Por favor revisa el contenido del mensaje.");
    }
    return;
});

function codificarMensaje(mensaje)
{
    for(var i = 0; i < mensaje.length; i++)
    {
        if(mensaje[i] == "a" || mensaje[i] == "e" || mensaje[i] == "i" || mensaje[i] == "o" || mensaje[i] == "u")
        {
            switch (mensaje[i])
            {
                case "a":
                {
                    mensajeCodificado = mensajeCodificado + "ai";
                    break;
                }
                case "e":
                {
                    mensajeCodificado = mensajeCodificado + "enter";
                    break;
                }
                case "i":
                {
                    mensajeCodificado = mensajeCodificado + "imes";
                    break;
                }
                case "o":
                {
                    mensajeCodificado = mensajeCodificado + "ober";
                    break;
                }
                case "u":
                {
                    mensajeCodificado = mensajeCodificado + "ufat";
                    break;
                }
            }
        }
        else
        {
            mensajeCodificado = mensajeCodificado + mensaje[i];
        }
    }
    espacioMensajeCodificado.textContent = mensajeCodificado;

    espacioMensajeDecodificado.textContent = "";
    mensajeCodificado = [];
    espacioMensajeCodificado.classList.remove("invisible");
    botonCopiar.classList.remove("invisible");
    textoAInvisibilizar1.classList.add("invisible");
    textoAInvisibilizar2.classList.add("invisible");
    textoAInvisibilizar3.classList.add("invisible");
    espacioMensajeDecodificado.classList.add("invisible");

    ajustarAltura(espacioMensajeCodificado);
    
    return;
}
