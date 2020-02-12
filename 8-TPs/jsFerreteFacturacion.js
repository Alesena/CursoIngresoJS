/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var num1
    var num2 
    var num3
    var suma
    num1=parseInt(document.getElementById("PrecioUno").value); 
	num2=parseInt(document.getElementById("PrecioDos").value);
   num3=parseInt(document.getElementById("PrecioTres").value);
   suma= num1+num2+num3;
   alert(num1+num2+num3);
 }

function Promedio () 
{var num1
    var num2 
    var num3
    var suma
    var tres
    var final
    parseInt(tres=3);
    num1=parseFloat(document.getElementById("PrecioUno").value); 
	num2=parseFloat(document.getElementById("PrecioDos").value);
   num3=parseFloat(document.getElementById("PrecioTres").value);

   suma= num1+num2+num3;
   final= suma/tres;

   alert(final);
	
}
function PrecioFinal () 
{var num1
    var num2 
    var num3
    var suma
    var final
    var iva
    parseInt(iva=1.21);
    num1=parseInt(document.getElementById("PrecioUno").value); 
	num2=parseInt(document.getElementById("PrecioDos").value);
   num3=parseInt(document.getElementById("PrecioTres").value);
   suma= num1+num2+num3;
   final= suma*iva;

   
 
   alert(final);
	
}