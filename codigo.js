function sumar(){
    var num1 = document.getElementById("num1").value;
    console.log(num1)
    console.log(document.getElementById("num1").value)
    var num2 = document.getElementById("num2").value;
    console.log(num2)
    var suma = Number(num1) + Number(num2);
    console.log(suma)
    document.getElementById("resultado").value = suma;
    document.getElementById("resultado").style.backgroundColor="blue";
    document.getElementById("resultado").style.color="white";

}




function SubeBaja(sumaresta){
    var valor = document.getElementById("Ascensor").innerHTML
    valor = Number(valor) + Number(sumaresta)
    document.getElementById("Ascensor").innerHTML = valor 
}


function subir(){
    document.getElementById("contador").innerHTML = Number(document.getElementById("contador").innerHTML) +1
}


function bajar(){
    document.getElementById("contador").innerHTML = document.getElementById("contador").innerHTML -1
}


function subir(){
    var valor = document.getElementById("contador").innerHTML
    valor++
    document.getElementById("contador").innerHTML = valor 
}


function bajar(){
    var valor = document.getElementById("contador").innerHTML
    valor--
    document.getElementById("contador").innerHTML = valor 
}



function cambiarNombre(){
    console.log('Esto es un mensaje en la consola')
    document.getElementById("texto1").innerText = "Hola pepe" //Se sustituye hola mundo por hola pepe porque es una cadena. 
    console.log('salgo de cambiar nombre') //Cuando se pulsa en el boton se cambia el hola mundo a hola pepe
}

