function mostrar()

{ var marca;

var peso;

var pesomaspesado=0;

var temperatura;

var temperaturapar=0;

var marcamaspesada=0;

var flag=0;

var flag2=0;

var productosbajocero=0;

var promedio=0;
 
var pesototal=0;

var pesomaximo;

var pesominimo;

var seguir="Desea cargar datos?";


while (confirm(seguir)) {
    
    marca=prompt("Ingrese una marca ");

    peso=parseInt(prompt("Ingrese un peso entre 1 y 100 kg"));

    while (peso<0||peso >100 || isNaN(peso)) {

    peso=prompt("Error, ingrese un peso entre 1 y 100 kg");

    }

    temperatura=parseInt(prompt("Ingrese una temperatura entre -30 y 30 grados"));

    while (temperatura <-30 || temperatura >30 || isNaN(temperatura)){

    temperatura=prompt("Error, ingrese una temperatura entre -30 y 30 grados")
    }

    if (temperatura % 2 == 0)
    { temperaturapar++;
    
    }

    if (flag==0 || peso>pesomaspesado){
    
    pesomaspesado=peso;

    marcamaspesada=marca;

    flag++;

    }

if (temperatura <0){

   productosbajocero++;

}
 if (flag2==0||pesominimo>peso){

    pesominimo=peso;
 }
 if (flag2==0||pesomaximo<peso){

    pesomaximo=peso;

    flag2++;
 }

promedio++;

pesototal=parseInt(pesototal)+peso;
promediopeso=pesototal/promedio;
 

}

document.write("El numero de temperaturas pares es de: " + temperaturapar+ "</br>"); 
document.write("La marca del producto mas pesado es: " + marcamaspesada + "</br>" );
document.write(" La cantidad de los productos que se conservan bajo 0 es de: " + productosbajocero + "</br>");
document.write("El promedio del peso de los productos es de " + promediopeso + "</br>");
document.write("El peso maximo de los productos es de "+pesomaximo + " kg" + " Y el peso minimo de los productos es de " + pesominimo + " kg" + "</br>");
 }



 