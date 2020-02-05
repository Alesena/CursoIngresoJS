/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{ var numero1
    var numero2
    var aumento
    parseInt(aumento = 1.10);
    numero1 = parseInt(document.getElementById("sueldo").value);
    numero2 = numero1*aumento;
    document.getElementById("resultado").value = numero2;
    
    

    
}
