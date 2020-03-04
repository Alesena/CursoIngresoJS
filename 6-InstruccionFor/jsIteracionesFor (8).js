function mostrar()
{var numero
    var primo
numero= parseInt(prompt("Ingrese un numero"));

for (i=2; i<= numero; i++)
{ if (numero % i == 0 && numero != 2)
    { primo = alert("no es un numero primo");
    break;

    } else 
    {if (numero % i !== 1 || numero ==3)

        primo = alert("es un numero primo");
        break;


    }

if (numero <=1) {
    primo = alert("no es un numero primo");
}
}





}//FIN DE LA FUNCIÓN