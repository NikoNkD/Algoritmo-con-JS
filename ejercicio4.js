// primero declaramos las variables y las listas//
var ratingEmisora = [];
var datospersonas;
// declaramos la variable menuOpciones donde le pedimos que ingrese 1 para continuar con el codigo y otro numero para cerrarlo//
var menuOpciones = prompt("Bienvenidos a su emisora si desea ingresar sus datos digite 1, digite otro numero para salir");
// la condicion if nos muestra que menuOpciones es igual a 1 donde se ejecutara el codigo pidiendo los datos de las personas//
if (menuOpciones == 1) {
    // en el siguiente alert nos muestra en pantalla el texto Ingrese los siguientes dato
    alert("Ingrese los siguientes datos")
    // se ingresan los datos de la persona 1//
    var persona_1 = new Object();//new Object es para crear un objeto//
    persona_1.nombre = prompt("ingrese nombre de la persona 1")
    persona_1.cedula = prompt("ingrese numero de identificación ");
    persona_1.fecha_de_nacimiento = prompt("ingrese fecha de nacimiento");
    persona_1.correo = prompt("ingrese correo");
    persona_1.ciudad_de_residencia = prompt("ingrese ciudad de residencia");
    persona_1.ciudad_origen = prompt("ingrese ciudad de origen");
    persona_1.artista_favorito = prompt("ingrese el nombre de su cantante favorito");
    persona_1.cancion1 = prompt("ingrese el nombre de la canción 1");
    persona_1.cancion2 = prompt("ingrese el nombre de la canción 2");
    persona_1.cancion3 = prompt("ingrese el nombre de la canción 3");
    ratingEmisora.push(persona_1);
// se ingresan los datos de la persona 2//
    var persona_2 = new Object();
    persona_2.nombre = prompt("ingrese nombre de la persona 2")
    persona_2.cedula = prompt("ingrese numero de identificación ");
    persona_2.fecha_de_nacimiento = prompt("ingrese fecha de nacimiento");
    persona_2.correo = prompt("ingrese correo");
    persona_2.ciudad_de_residencia = prompt("ingrese ciudad de residencia");
    persona_2.ciudad_origen = prompt("ingrese ciudad de origen");
    persona_2.artista_favorito = prompt("ingrese el nombre de su cantante favorito");
    persona_2.cancion1 = prompt("ingrese el nombre de la canción 1");
    persona_2.cancion2 = prompt("ingrese el nombre de la canción 2");
    persona_2.cancion3 = prompt("ingrese el nombre de la canción 3");
    ratingEmisora.push(persona_2);
// se ingresan los datos de la persona 3//
    var persona_3 = new Object();
    persona_3.nombre = prompt("ingrese nombre de la persona 3")
    persona_3.cedula = prompt("ingrese numero de identificación ");
    persona_3.fecha_de_nacimiento = prompt("ingrese fecha de nacimiento");
    persona_3.correo = prompt("ingrese correo");
    persona_3.ciudad_de_residencia = prompt("ingrese ciudad de residencia");
    persona_3.ciudad_origen = prompt("ingrese ciudad de origen");
    persona_3.artista_favorito = prompt("ingrese el nombre de su cantante favorito");
    persona_3.cancion1 = prompt("ingrese el nombre de la canción 1");
    persona_3.cancion2 = prompt("ingrese el nombre de la canción 2");
    persona_3.cancion3 = prompt("ingrese el nombre de la canción 3");
    ratingEmisora.push(persona_3);
// se ingresan los datos de la persona 4//
    var persona_4 = new Object();
    persona_4.nombre = prompt("ingrese nombre de la persona 4")
    persona_4.cedula = prompt("ingrese numero de identificación ");
    persona_4.fecha_de_nacimiento = prompt("ingrese fecha de nacimiento");
    persona_4.correo = prompt("ingrese correo");
    persona_4.ciudad_de_residencia = prompt("ingrese ciudad de residencia");
    persona_4.ciudad_origen = prompt("ingrese ciudad de origen");
    persona_4.artista_favorito = prompt("ingrese el nombre de su cantante favorito");
    persona_4.cancion1 = prompt("ingrese el nombre de la canción 1");
    persona_4.cancion2 = prompt("ingrese el nombre de la canción 2");
    persona_4.cancion3 = prompt("ingrese el nombre de la canción 3");
    ratingEmisora.push(persona_4);
// se ingresan los datos de la persona 5//
    var persona_5 = new Object();
    persona_5.nombre = prompt("ingrese nombre de la persona 5")
    persona_5.cedula = prompt("ingrese numero de identificación ");
    persona_5.fecha_de_nacimiento = prompt("ingrese fecha de nacimiento");
    persona_5.correo = prompt("ingrese correo");
    persona_5.ciudad_de_residencia = prompt("ingrese ciudad de residencia");
    persona_5.ciudad_origen = prompt("ingrese ciudad de origen");
    persona_5.artista_favorito = prompt("ingrese el nombre de su cantante favorito");
    persona_5.cancion1 = prompt("ingrese el nombre de la canción 1");
    persona_5.cancion2 = prompt("ingrese el nombre de la canción 2");
    persona_5.cancion3 = prompt("ingrese el nombre de la canción 3");
    ratingEmisora.push(persona_5);
// se ingresan los datos de la persona 6//
    var persona_6 = new Object();
    persona_6.nombre = prompt("ingrese nombre de la persona 6")
    persona_6.cedula = prompt("ingrese numero de identificación ");
    persona_6.fecha_de_nacimiento = prompt("ingrese fecha de nacimiento");
    persona_6.correo = prompt("ingrese correo");
    persona_6.ciudad_de_residencia = prompt("ingrese ciudad de residencia");
    persona_6.ciudad_origen = prompt("ingrese ciudad de origen");
    persona_6.artista_favorito = prompt("ingrese el nombre de su cantante favorito");
    persona_6.cancion1 = prompt("ingrese el nombre de la canción 1");
    persona_6.cancion2 = prompt("ingrese el nombre de la canción 2");
    persona_6.cancion3 = prompt("ingrese el nombre de la canción 3");
    ratingEmisora.push(persona_6);
// se imprime en consola los datos de la persona que los solicita//
    console.log(ratingEmisora[prompt("Ingrese el numero de la persona que desea conocer su informacion de acuerdo al orden de ingreso del 1 al 6") - 1]);
}
// sino si el menuOpciones no es igual a 1 se cierra el codigo//
else if (menuOpciones != 1) {
    alert("Gracias por su visita")
}
