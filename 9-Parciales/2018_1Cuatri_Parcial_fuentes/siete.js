function mostrar()
{   var nota 
    var sexo
    var acumuladornotas = 0;
    var promedionotas;
    var notabaja;
    var sexobajo;
    var contadorvmas6 = 0;

    for (var i =0; i <5 ;i++)
    {nota = parseInt(prompt("Ingrese nota (0-10): "))
    while (nota<0 || nota >10 || isNaN(nota)) {nota = parseInt(prompt("Nota invalida. Ingrese nota (0-10): ")) }
     
    sexo = prompt("Ingrese sexo (f-m): ");
    while (sexo != "m" && sexo != "f" ) {sexo= prompt("Sexo invalido. Ingrese sexo (f - m") }
acumuladornotas = acumuladornotas + nota;

if (i==0 || nota<notabaja){notabaja=nota;
sexobajo= sexo; }
 }
 if (sexo=="m"&&nota >=6) {contadorvmas6++}

 promedionotas=acumuladornotas/5;

 alert("promedionotas: " + promedionotas)



}
