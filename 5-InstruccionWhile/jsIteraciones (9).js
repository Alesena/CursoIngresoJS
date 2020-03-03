function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo
	var minimo
	var primeraVez=true;
	var respuesta='si';

	while(respuesta!='no')
{   var numero=prompt("ingrese un numero");
	numero= parseInt(numero); 

	while(isNaN(numero))

	numero =prompt("Error de caracter, ingrese un numero");

	numero= parseInt(numero);  

respuesta=prompt("desea continuar?");	
if (primeraVez)
{primeraVez=false;
maximo=numero;
minimo=numero;  }
else if (numero > maximo) 
(maximo=numero);
	if (numero < minimo)
(minimo=numero);}  

	
	 document.getElementById("maximo").value = maximo;
	 document.getElementById("minimo").value =minimo;




}//FIN DE LA FUNCIÓN