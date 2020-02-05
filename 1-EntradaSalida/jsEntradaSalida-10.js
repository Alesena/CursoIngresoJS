/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{var numero1;
    var numero2;
    var descuento;
    var cien;
    var resultadofinal;
    parseInt(descuento = 25);
    parseInt(cien = 100);
    numero1 = parseInt(document.getElementById("importe").value);
    numero2 = numero1 * descuento / cien;
    resultadofinal = numero1 - numero2;
    numero2 = resultadofinal;
    document.getElementById("resultado").value = numero2;
	
}
