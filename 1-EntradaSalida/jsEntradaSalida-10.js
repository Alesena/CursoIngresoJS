/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{var numero1;
    var numero2;
    var descuento;
    parseInt(descuento = 1.25);
    numero1 = parseInt(document.getElementById("importe").value);
    numero2 = (numero1 / descuento);
    document.getElementById("resultado").value = numero2
	
}
