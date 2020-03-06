function mostrar()
{

    
var nombre;
var cantidadpersonas;
var cantestadia;
var formadepago;
var seguir="Desea ingresar datos?";

while (confirm(seguir)){

nombre=prompt("Ingrese su nombre")

cantidadpersonas=parseInt(prompt("Ingrese cantidad de personas"));

while(isNaN(cantidadpersonas)){ 

cantidadpersonas=prompt("Error, ingrese un numero valido");}




cantestadia= parseInt(prompt("Ingrese la cantidad de dias"))

while(isNaN(cantestadias)){ 

cantestadia=prompt("Error, ingrese un numero valido"); }



formadepago=parseInt(prompt("Ingrese una forma de pago (Efectivo, Tarjeta, QR)"))

while(formadepago!= "Efectivo" || formadepago != "tarjeta" || formadepago != "QR")

 {formadepago=prompt("Error, ingrese una forma de pago valida")}  







}
































}


