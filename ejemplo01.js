/*6- programa que pida dos números y nos diga cual es el mayor, el menor y si son iguales 
7- Al programa anterior: si los números no son un números o son menores o iguales a cero, 
nos lo vuelva a pedir*///break para los for para romper el codigo//
let numero_1 = null, numero_2 = null;
ingresarNumero()
function ingresarNumero() {
    if (numero_1 == null){
        numero_1 = prompt("Ingrese el primero numero");
        if (isNaN(numero_1)) {
            numero_1 = null;
            ingresarNumero()
            return
        }
    }
    if (numero_2 == null){
        numero_2 = prompt("Ingrese el segundo numero");
        if (isNaN(numero_2)) {
            numero_2 = null;
            ingresarNumero()
            return
        }
    }
    numero_1 = parseInt(numero_1)
    numero_2 = parseInt(numero_2)
    if (numero_1 > numero_2) {
        alert("El numero mayor es: " + numero_1)
        alert("El numero menor es: " + numero_2)
    }
    else if (numero_1 < numero_2) {
        alert("El numero mayor es: " + numero_2)
        alert("El numero menor es: " + numero_1)
    }
    // el else es para que algo ingrese por defecto
    else {
        alert("Los numeros son iguales: " + numero_1)
    }

}
