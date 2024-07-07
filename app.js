let numeroSecreto = 0;
let contador=0;
let listaNumerosAleatorios=[];
let numeroMaximo =10;
function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroSecreto===numeroDeUsuario){
        asignarTextoElemento("p",`Acertaste el numero es ${numeroSecreto}!! lo hiciste en ${contador} ${(contador===1) ?"intento" :"intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{ if(numeroSecreto<numeroDeUsuario){
            asignarTextoElemento("p","Fallastes, el numero es menor");
        }else{
            asignarTextoElemento("p","Fallastes, el numero es mayor");
        }
        contador++;
        limpiarCaja();
    }
    return ;
}
function limpiarCaja (){
    document.querySelector("#valorUsuario").value ="";
}
function generaNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosAleatorios);
    console.log(listaNumerosAleatorios.length);
    //Si ya sorteamos todos los numeros posibles
    if(listaNumerosAleatorios.length===numeroMaximo){
        asignarTextoElemento("p","Se han jugado todos los numeros posibles");
    }else{
        //Si el numero generado ya esta incluido en la "listaNumerosAleatorios"
        if(listaNumerosAleatorios.includes(numeroGenerado)){
            return generaNumeroSecreto();
        }else{
            listaNumerosAleatorios.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del Número Secreto");
    asignarTextoElemento("p",`Digita un Número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    contador =1;
}
function reiniciarJuego(){
    //Necesitamos limpiar la caja
    limpiarCaja();
    //Necesitamos indicar mensaje inicial
    //Generar un numero aleatorio
    //Reiniciar el numero de intentos
    condicionesIniciales();
    //Volver a desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","Treu");
}
condicionesIniciales();