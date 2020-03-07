function mostrar()
{ var tipo;
	var peso;
	var precio;
	var marca;
	var fabricante;

	do {
		tipo=prompt("Ingrese un tipo de prevencion: barbijo, jabon o alcohol. ");
	
		
	} while(isNaN(tipo) && tipo !="barbijo" && tipo!="jabon" && tipo != "alcohol");

	do { 
		precio= prompt("Ingrese el precio entre 100 y 300"); }

	while (isNaN(precio)|| precio <100 || precio >300 )

	do { 
		cantidad=prompt("Ingrese la cantidad entre 1 o 1000 unidades");

		 }
		 while (isNaN(cantidad) || cantidad <1 || cantidad >1000);


	marca=prompt("Ingrese la marca");
	fabricante=prompt("Ingrese el fabricante");



    }


}
