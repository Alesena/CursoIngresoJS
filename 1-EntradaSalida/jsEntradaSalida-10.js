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

/*var nombre
    var cantidadpersonas=0
    var cantdias=0
    var formapago
    var cantidadinvitados =nombre+cantidadpersonas;
    var maxpersonas
    var promedioreserva
    var cantidadreservas=0
var respuesta
do 
{ nombre=prompt("Ingrese su nombre");
    
    continuar = respuesta=prompt("Desea seguir cargando datos?");

 }

while (respuesta=="s"||respuesta=="Si"||respuesta=="si")

{cantidadpersonas=parseInt(prompt("Ingrese la cantidad de personas"))

while (isNaN(cantidadpersonas)) {cantidadpersonas=prompt("Error, ingrese un numero valido")}

continuar = respuesta=prompt("Desea seguir cargando datos?");

cantdias=parseInt(prompt("Ingrese la cantidad de dias"))

while(isNaN(cantdias)) {cantidias=prompt("Error, ingrese un numero valido")}

continuar = respuesta=prompt("Desea seguir cargando datos?");

formapago=prompt("Ingrese la forma de pago" + "Efectivo, tarjeta o QR")

while (!(formapago == " efectivo" || formapago == "tarjeta" ||formapago == "QR"))

{formapago=prompt("Error, ingrese una forma de pago valida")}

continuar = respuesta=prompt("Desea seguir cargando datos?");


}




}
