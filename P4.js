function mostrarResultado(resul){
    document.getElementById("CampoResultado").value = resul;

}
function sumar(){
    var numUno = +document.getElementById("numeroUno").value; 
    var numDos = +document.getElementById("numeroDos").value;
    var sumados = Number(+numUno + +numDos);
    mostrarResultado(sumados);

   
}
function restar(){
    var numUno = document.getElementById("numeroUno").value; 
    var numDos = document.getElementById("numeroDos").value;
    var restados = Number(numUno - numDos);    
    mostrarResultado(restados);
 
}
function multiplicar(){

    var numUno = document.getElementById("numeroUno").value; 
    var numDos = document.getElementById("numeroDos").value;
    var multiplicados = Number(numUno * numDos);  
    mostrarResultado(multiplicados);
}

function dividir(){

    var numUno = document.getElementById("numeroUno").value; 
    var numDos = document.getElementById("numeroDos").value;

    if (numDos==0) {

        alert("Ingrese un número válido");
   
    }else if(numUno==0){

        alert("Ingrese un número válido");
       
    } else{
        var divididos = Number(numUno / numDos);  
        mostrarResultado(divididos);
    }

}
function raiz(){

    var numUno = document.getElementById("numeroUno").value; 
    var numDos = document.getElementById("numeroDos").value;

    if (numUno > 0){ 

        var cuadrada = Math.sqrt(numUno);
        mostrarResultado(cuadrada);


    }else if(numDos > 0){

        var cuadrada = Math.sqrt(numDos);
        mostrarResultado(cuadrada);

    }else{
        alert("Ingrese un número válido");
    }
    
    

}
function potencia(){

    var numUno = document.getElementById("numeroUno").value; 
    var numDos = document.getElementById("numeroDos").value;
    var potencia = Math.pow(numUno,numDos);

    mostrarResultado(potencia);

}
function absoluto(){


    var numUno = document.getElementById("numeroUno").value; 
    var numDos = document.getElementById("numeroDos").value;

    var absolut = Math.abs(numUno);
    mostrarResultado(absolut);
    alert("Sólo se toma en cuenta el valor de la primer casilla");
    }
function redondo(){

    var numUno = document.getElementById("numeroUno").value; 
    var numDos = document.getElementById("numeroDos").value;

    var redonTa = Math.round(numUno);
    var redonTaDos = Math.round(numDos);

    if (redonTaDos){
        var redoTa = document.getElementById("prueba");
        redoTa.textContent= "Resultado celda 1: " +redonTa+ " Resultado celda 2: "+redonTaDos;
        mostrarResultado(redonTa);
    }else{
        mostrarResultado(redonTa);
    }

    
}
function random(numUno,numDos){

    let minimo = +document.getElementById("numeroUno").value;
    let maximo = +document.getElementById("numeroDos").value;

    maximo = maximo +1;
    if(minimo==""){ 
        
        alert("Ingrese un número válido");

    }else if (maximo=="") {

        alert("Ingrese un número válido");
   
    }else {
        var randomTres = Math.floor((Math.random() * (maximo-minimo)+minimo));
        mostrarResultado(randomTres);
        }
}
function redondeo (){
    let CampoResultado = +document.getElementById("CampoResultado").value;
    mostrarResultado(Math.round(CampoResultado));
}
function piso(){
    let CampoResultado = +document.getElementById("CampoResultado").value;
    mostrarResultado(Math.floor(CampoResultado));

}
function techo() {

    let CampoResultado = +document.getElementById("CampoResultado").value;
    mostrarResultado(Math.ceil(CampoResultado));

}