function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true

while (contador < 5)
{contador++;
var numero= prompt("ingrese un numero");
numero=parseInt(numero);

while (isNaN(numero)){numero =prompt("Error!! ingrese un numero");
numero=parseInt(numero);
}
 
acumulador += numero;

 }


 
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN