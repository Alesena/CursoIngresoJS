function mostrar()
{var nombre
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


