function mostrar()
{
var marca 
var peso
var temperatura
var seguir

do 
{
marca = prompt("Ingrese la marca");

while (!(marca == 'pepito' || marca == "teem" || marca == 'llut' || marca == 'fpy')) 

{marca = prompt("Es no es una marca. Ingrese una marca: ");}

peso = parseInt(prompt("Ingrese numero (1 y 100): "))

while (peso < 1 || peso > 100 || isNaN(peso))

{ peso = parseInt(prompt("Numero invalido. Ingrese numero (1 y 100): ")); }

while (temperatura < -30 || temperatura > 30 || isNaN(temperatura))

{ temperatura = parseInt(prompt("Numero invalido. Ingrese numero (-30 y 30): ")); }

seguir(prompt("Quiere continuar?"));
 while (seguir== "s");
 }

