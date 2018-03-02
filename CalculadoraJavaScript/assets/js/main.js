let resultado = -1;

function borrar_todo(){
    resultado = 0;
    document.getElementById("resultado").value = "0";
}

function uno() {
    if (resultado == 0)
    document.getElementById("resultado").value = "1";
    else
        document.getElementById("resultado").value += "1";

    resultado = -1;

}
function dos() {
    if (resultado == 0)
        document.getElementById("resultado").value = "2";
    else
        document.getElementById("resultado").value += "2";

resultado = -1;
}
function tres() {
    if (resultado == 0)
        document.getElementById("resultado").value = "3";
    else
        document.getElementById("resultado").value += "3";

resultado = -1;
}
function cuatro() {
    if (resultado == 0)
        document.getElementById("resultado").value = "4";
    else
        document.getElementById("resultado").value += "4";

    resultado = -1;
}
function cinco() {
    if (resultado == 0)
        document.getElementById("resultado").value = "5";
    else
        document.getElementById("resultado").value += "5";

    resultado = -1;
}
function seis() {
    if (resultado == 0)
        document.getElementById("resultado").value = "6";
    else
        document.getElementById("resultado").value += "6";

    resultado = -1;
}
function siete() {
    if (resultado == 0)
        document.getElementById("resultado").value = "7";
    else
        document.getElementById("resultado").value += "7";

    resultado = -1;
}
function ocho() {
    if (resultado == 0)
        document.getElementById("resultado").value = "8";
    else
        document.getElementById("resultado").value += "8";

    resultado = -1;
}
function nueve() {
    if (resultado == 0)
        document.getElementById("resultado").value = "9";
    else
        document.getElementById("resultado").value += "9";
    resultado = -1;
}
function cero() {
    if(resultado!=0)
    document.getElementById("resultado").value += "0";

    resultado = -1;
}

function sumar() {
    if (document.getElementById("resultado").value.slice(-1) == "-"
    || document.getElementById("resultado").value.slice(-1) == "*"
    || document.getElementById("resultado").value.slice(-1) == "/")
        document.getElementById("resultado").value ="+";
    else if (document.getElementById("resultado").value.slice(-1) != "" && document.getElementById("resultado").value.slice(-1) != "+")
        document.getElementById("resultado").value += "+";


}

function restar() {
    if (document.getElementById("resultado").value.slice(-1) == "+"
        || document.getElementById("resultado").value.slice(-1) == "*"
        || document.getElementById("resultado").value.slice(-1) == "/")
        document.getElementById("resultado").value ="-";
    else if (document.getElementById("resultado").value.slice(-1) != "-")
        document.getElementById("resultado").value += "-";
}

function dividir() {
    if (document.getElementById("resultado").value.slice(-1) == "-"
        || document.getElementById("resultado").value.slice(-1) == "*"
        || document.getElementById("resultado").value.slice(-1) == "+")
        document.getElementById("resultado").value ="/";
    else if (document.getElementById("resultado").value.slice(-1) != "" && document.getElementById("resultado").value.slice(-1) != "/")
        document.getElementById("resultado").value += "/";
}

function multiplicar() {
    if (document.getElementById("resultado").value.slice(-1) == "-"
        || document.getElementById("resultado").value.slice(-1) == "+"
        || document.getElementById("resultado").value.slice(-1) == "/")
        document.getElementById("resultado").value ="*";
    else if (document.getElementById("resultado").value.slice(-1) != "" && document.getElementById("resultado").value.slice(-1) != "*")
        document.getElementById("resultado").value += "*";
}

function igual() {
    if (document.getElementById("resultado").value <2){

    } else if (document.getElementById("resultado").value.slice(-1) == "-"
        || document.getElementById("resultado").value.slice(-1) == "*"
        || document.getElementById("resultado").value.slice(-1) == "+" || document.getElementById("resultado").value.slice(-1) == "/"){

        resultado = document.getElementById("resultado").value.slice(0,-1);
        resultado = eval(resultado)
        document.getElementById("resultado").value = resultado;
    } else {
        resultado = document.getElementById("resultado").value;
        resultado = eval(resultado)
        document.getElementById("resultado").value = resultado;
    }


}

function borrar() {
    if (document.getElementById("resultado").value != "" || document.getElementById("resultado").value.length != 1){
        let borrar = document.getElementById("resultado").value.slice(0,-1);
        document.getElementById("resultado").value = borrar;
    }
}