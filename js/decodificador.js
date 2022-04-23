var mensajeDecodificado = [];
var espacioMensajeDecodificado = document.getElementById("mensaje-decodificado");
var botonDecodificar = document.querySelector(".boton-decodificar");
var botonCopiar = document.querySelector(".copiar-elemento");

botonCopiar.classList.add("invisible");

var textoAInvisibilizar1 = document.getElementById("standby");
var textoAInvisibilizar2 = document.getElementById("titulo");
var textoAInvisibilizar3 = document.getElementById("texto-caja-servidor");

botonDecodificar.addEventListener("click", function()
{
    espacioMensajeDecodificado = document.getElementById("mensaje-decodificado");

    var mensaje = document.getElementById("caja-texto-cliente").value;
    if (verificarMensaje(mensaje) == true)
    {
        decodificarMensaje(mensaje);
    }
    else
    {
        textoAInvisibilizar1.classList.remove("invisible");
        textoAInvisibilizar2.classList.remove("invisible");
        textoAInvisibilizar3.classList.remove("invisible");
        espacioMensajeDecodificado.classList.add("invisible");
        espacioMensajeCodificado.classList.add("invisible");
        botonCopiar.classList.add("invisible");

        espacioMensajeDecodificado.textContent = "";
        espacioMensajeCodificado.textContent = "";
        alert("El texto contiene un caracter no válido. Por favor revisa el contenido del mensaje.");
    }
    return;
});

function decodificarMensaje(mensaje)
{
    for (var i = 0; i < mensaje.length; i++)
    {
        if (mensaje[i] == "a" || mensaje[i] == "e" || mensaje[i] == "i" || mensaje[i] == "o" || mensaje[i] == "u")
        {
            switch (mensaje[i])
            {
                case "a":
                {
                    if (mensaje[i+1] == "i")
                    {
                        mensajeDecodificado = mensajeDecodificado + "a";
                        i = i + 1 ;
                        break;
                    }
                    else
                    {
                        mensajeDecodificado = mensajeDecodificado + mensaje[i];
                        break;
                    }
                }
                case "e":
                {
                    if (mensaje[i+1] == "n" && mensaje[i+2] == "t" && mensaje[i+3] == "e" && mensaje[i+4] == "r")
                    {
                        mensajeDecodificado = mensajeDecodificado + "e";
                        i = i + 4;
                        break;
                    }
                    else
                    {
                        mensajeDecodificado = mensajeDecodificado + mensaje[i];
                        break;
                    }
                }
                case "i":
                {
                    if (mensaje[i+1] == "m" && mensaje[i+2] == "e" && mensaje[i+3] == "s")
                    {
                        mensajeDecodificado = mensajeDecodificado + "i";
                        i = i + 3;
                        break;
                    }
                    else
                    {
                        mensajeDecodificado = mensajeDecodificado + mensaje[i];
                        break;
                    }
                }
                case "o":
                {
                    if (mensaje[i+1] == "b" && mensaje[i+2] == "e" && mensaje[i+3] == "r")
                    {
                        mensajeDecodificado = mensajeDecodificado + "o";
                        i = i + 3;
                        break;
                    }
                    else
                    {
                        mensajeDecodificado = mensajeDecodificado + mensaje[i];
                        break;
                    }
                }
                case "u":
                {
                    if (mensaje[i+1] == "f" && mensaje[i+2] == "a" && mensaje[i+3] == "t")
                    {
                        mensajeDecodificado = mensajeDecodificado + "u";
                        i = i + 3;
                        break;
                    }
                    else
                    {
                        mensajeDecodificado = mensajeDecodificado + mensaje[i];
                        break;
                    }
                }
                break;
            }
        }
        else
        {
            mensajeDecodificado = mensajeDecodificado + mensaje[i];
        }
    }
    espacioMensajeDecodificado.textContent = mensajeDecodificado;
    espacioMensajeCodificado.textContent = "";
    mensajeDecodificado = [];
    espacioMensajeDecodificado.classList.remove("invisible");
    botonCopiar.classList.remove("invisible");
    textoAInvisibilizar1.classList.add("invisible");
    textoAInvisibilizar2.classList.add("invisible");
    textoAInvisibilizar3.classList.add("invisible");
    espacioMensajeCodificado.classList.add("invisible");

    ajustarAltura(espacioMensajeDecodificado);

    return;
}