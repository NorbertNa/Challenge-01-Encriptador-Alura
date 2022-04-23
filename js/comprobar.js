function verificarMensaje(mensaje)
{  
    if (mensaje.length == 0)
    {
        return false;
    }
    for (var i = 0; i < mensaje.length; i++)
    {
        if (validarCaracter(mensaje[i]) == false)
        {       
            return false;
        }
    }
    return true;
}

function validarCaracter(caracter)
{
    var letraAValidar = caracter.charCodeAt(0);
    return (letraAValidar >= 97 && letraAValidar <= 122) || (letraAValidar == 32);
}