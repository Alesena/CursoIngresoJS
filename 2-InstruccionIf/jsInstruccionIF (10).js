function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
	numero=Math.round(Math.random()*10);

	if (numero>8)
	{alert (numero+" Excelente!")}
	else if (numero>=4&&numero<=8)
	{alert (numero+ " Aprobó")}
	else if (numero<4)
	{alert(numero +(" Vamos, la proxima se puede!"))}

}//FIN DE LA FUNCIÓN