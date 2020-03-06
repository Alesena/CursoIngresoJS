function mostrar()
{
    
    
var alturas;
var alturastotales=0
var promedio=0
var promedioalturas=0
var alturamasbaja;
var sexo;
var flag=0;
var sexomasbajo;
var mujeresmasaltas=0

for(i=0; i<=1; i++){ 

alturas=parseInt(prompt("Ingrese su altura"));

while (alturas<0 || alturas>250|| isNaN(alturas)) {
    alturas = prompt("Error, ingrese altura entre 0 y 250 cm")
}

sexo=prompt("Ingrese (f) si es femenino o (m) si es masculino ");

while(!(sexo == "f" || sexo == "m")){
sexo=prompt("Error, ingrese (f) para femenino o (m) para masculino")}


if(sexo=="f" && alturas > 190)
{ 
mujeresmasaltas++;

}


promedio++;

alturastotales=parseInt(alturastotales)+alturas;

promedioalturas=alturastotales/promedio;

if (flag==0 || alturas<alturamasbaja){

alturamasbaja=alturas;

sexomasbajo=sexo;

flag++;}



}  alert("El promedio de las alturas es de : " + promedioalturas);
alert("La altura mas baja es de: " + alturamasbaja + "Y el sexo de esa persona es de: " 
+ sexomasbajo);
alert("La cantidad de mujeres que superan los 190 cm es: " + mujeresmasaltas);


















}
