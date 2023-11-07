var listaPersonas = [];

for (let i = 0; i < 1; i++) {
    let persona = {
        // el objeto persona se va a resetear si esta dentro del for, volver a empezar.
        // *:* es para darle un valor a una propiedad de un objeto.
        nombre: null, //esto es un texto vacio
        numeroIdentificacion: null,
        fechaNacimiento: null,
        correoElectronico: null,
        ciudadResidencia: null,
        ciudadOrigen: null,
        cancionesFavoritas: [],
    };
    //persona.nombre=promt ejecuta algo y devuelve un valor y guarda una variable en donde se le llame.
    //con el punto accede a las caracteristicas de esa persona.
    persona.nombre = prompt("Ingrese el nombre");
    persona.numeroIdentificacion = prompt("Ingrese el numero de cedula");
    persona.fechaNacimiento = prompt("Ingresa fecha de nacimiento");
    persona.correoElectronico = prompt("Ingrese el correo electronico");
    persona.ciudadResidencia = prompt("Ingrese ciudad de residencia");
    persona.ciudadOrigen = prompt("Ingrese la ciudad de origen");
    //log es una funcion que muestra un mensaje en consola.
    console.log(persona);
    // la funcion de la linea 26 se encargar de ir metiendo los datos recogisdos de cada persona y almacenarlos en la variable listaPersonas.
    listaPersonas.push(persona);
    for (let j = 0; j < 1; j++) {
        let cancionFavorita = {
            artista: null,
            titulo: null,
        };
        cancionFavorita.titulo = prompt("Ingrese el nombre de la cancion favorita " + (j + 1));
        cancionFavorita.artista = prompt("Ingrese la artista favorita " + (j + 1));
        persona.cancionesFavoritas.unshift(cancionFavorita);
    }

}
let numero = parseInt(prompt("Ingrese un numero de la persona que desea ver la informacion \n1- Uno \n2- Dos \n3- Tres \n4- Cuatro \n5- Cinco \n6- Seis " )) - 1; 
//listaPersonas.numero = prompt()//
//con el punto se accede a las propiedades de un objeto
//listaPersonas[numero].nombre;

alert("Informacion de la persona seleccionada es: " + listaPersonas[numero].nombre);
console.table(listaPersonas);

/*prompt ('<Texto que se muestra al usuario>', '<valor por defecto>') => 
 * El valor por defecto se refiere al que aparece en la caja de texto donde escribe el usuario, por eso lo dejamos vacío ' '.*/


