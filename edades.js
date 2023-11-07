// se declaran variables que se van a manejar para resolver el ejercio//
// la variable numero de personas son la cantidad de personas las cuales le tomaremos la edad//
var numero_de_personas = 3
// variable contador_menores, son los cuales tengan menos de 18 años de edad
var contador_menores = 0;
// variable contador_mayores son los cuales tienen de 18 a 60 años de edad //
var contador_mayores = 0;
// variable contador_adultoMa son las personas que tienen entre 61 a 120 años de edad //
var contador_adulMa = 0;
// variable edad_min es la que nues muestra la persona con la edad mas baja //
var edad_min;
// variable edad_max nos va mostrar la persona con el mayor numero de edad //
var edad_max;
// var persona se abre con [] en forma de lista, nos va mostrar todas las edades que ingresemos//
var persona = [];
// var menores_de_edad se abre con [] en forma de lista donde nos almacena todas las personas que sean menores de edad //
var menores_de_edad = [];
// var mayores_de_edad se abre con [] en forma de lista donde almacena todas las edades entre 18 a 60 años //
var mayores_de_edad = [];
// var adulMayor se abre con [] en forma de lista donde almacena las personas con edades entre 61 a 120 años //
var adulMayor = [];
// esta variable edad es la que solicita las edades de las personas
var edad;
// variable suma es la que se encarga de sumar todas las edades ingresadas //
var suma = 0;
// se abre un forma en forma de bucle el cual repite la funcion en numero_de_personas determinadas cumpliendo la condicion//
for (let i = 0; i < numero_de_personas; i++) { // ingresarEdad es una funcion que nos permite que el codigo no se cierre en caso de ingresar un numero fuera de los parametros establecidos//
    ingresarEdad(i)
}
// en las console.log imprimimos todo lo que se quiere ver en consola- las respuestas//
console.log("El numero de personas menores de edad son: ", contador_menores);
console.log("El numero de personas mayores de edad son: ", contador_mayores)
console.log("El numero de adultos mayores son: ", contador_adulMa)
// edad_min = Math.min(...persona); funcion que permite identificar edad mas baja ingresada y luego la imprimimos en consola//
edad_min = Math.min(...persona);
console.log("La edad mas baja es: ", edad_min);
//edad_max = Math.max(...persona); esta funcion nos permite identificar la persona con la mayor edad ingresada y luego la imprime en consola//
edad_max = Math.max(...persona);
console.log("La edad mas alta es: ", edad_max);
// variable promedio_edad se encarga de hacer la formula del total suma dividido el numero_personas para que nos de un promedio de edad //
var promedio_edad = parseInt(suma / numero_de_personas);
// se imprime en consola la edad promedio de las 10 edades que se ingresen//
console.log("El promedio de las edades es: ", promedio_edad)
// function ingresarEdad(i) nos permite volver a ingresar un valor en caso de superar los parametros establecidos que son de 1 a 120//
// Se establecen las condiciones necesarias para que se ejecute el codigo//
function ingresarEdad(i) {
    // Se solicitan al usuario las edades y se utiliza el parseInt para que los numeros sean enteros y el prompt para que abra la barra para escribir y luego + (i + 1) se van sumando +1
    var edad = parseInt(prompt("Ingresa la edad de la persona " + (i + 1)));
    // en esta condicion if establecemos que edad tiene que ser mayor o igual a 1 y edad tiene que ser menor o igual a 120//
    if (edad >= 1 && edad <= 120) { 
        // en estas condiciones establecemos los puntos dados en el taller//
        if (edad !== 0) {
            persona.push(edad);
            suma = suma + edad;
        }
        if (edad < 18) {
            menores_de_edad.push(edad);
            contador_menores += 1;
        }
        if (edad >= 18 && edad <= 60) {
            mayores_de_edad.push(edad);
            contador_mayores += 1;
        }
        if (edad > 60 && edad <= 120) {
            adulMayor.push(edad);
            contador_adulMa += 1;
        }
    }
    // En este punto del else nos enviara una alerta en caso de que el numero ingresado sea menos a 1 o mayor a 120 //
    else {
        alert("Error la edad debe estar entre 1 y 120 años, ingrese nuevamente")
        ingresarEdad(i)

    }

}