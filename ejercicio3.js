// declaramos las variables a utilizar//
var lista1 = [];
var lista2 = [];
var lista3 = [];
var contador = 5
// for (let i = 0; i < contador; i++) abrimos un ciclo mediante el for donde nos dice que la variable let i es igual a 0//
// y si i es menor a contador y se ejecurata el numero de veces que se establecio en el contador si la respuesta es true da paso al codigo//
for (let i = 0; i < contador; i++) {
    // en la siguiente linea se ingresaran la cantidad de numeros que se hayan asignado en la variable contador, en este caso 5 veces//
    var numero1 = parseInt(prompt("Ingresa los primeros 5 numeros: "));
    // en la variable lista1 se le agrega un .push para que agregue cada numero que se va ingresando a la lista//
    lista1.push(numero1);
    // en la variable lista3 se ingresaran de igual forma los numeros que se digitaron anteriormente.
    lista3.push(numero1);

}
// en este punto se realiza el metodo.sort para que nos arregle de forma ascendente de forma ordenada mediante la (function (a, b) { return a - b })/
lista1.sort(function (a, b) { return a - b });
// en el metodo de alert nos muestra en pantalla la primera lista ordenada de forma ascendente//
alert("La primera lista es: " + lista1)
// for (let i = 0; i < contador; i++) abrimos un ciclo mediante el for donde nos dice que la variable let i es igual a 0//
// y si i es menor a contador y se ejecurata el numero de veces que se establecio en el contador si la respuesta es true da paso al codigo//
for (let i = 0; i < contador; i++) {
    var numero2 = parseInt(prompt("Ingresa los siguientes 5 numeros: "));
    lista2.push(numero2);
    lista3.push(numero2);

}
lista2.sort(function (a, b) { return a - b });
alert("La segunda lista es: " + lista2);
lista3.sort(function (a, b) { return a - b });
alert("El resltado de los numeros ordenados ascendentemente son: " + lista3);