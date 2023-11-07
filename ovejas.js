//Contando ovejas para dormir

/* Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
Haz una función que devuelva una lista con todas las ovejas que sean de color 
rojo  y que además su nombre contenga tanto las letras n Y a, sin importar el orden ,las mayúsculas o espacios. */
let ovejas = [
    {name: "aaron", color: "rojo"},
    {name: "nacy", color: "rojo"},
    {name: "cara", color: "azul"},
    {name: "daniel", color: "rosada"},
    {name: "Nidia",color: "rojo"},
    {name: "fin",color: "morada"},
    {name: "george", color: "blanca"},
];
let filterOvejas = [];

ovejas.forEach(function(oveja,indice){

    if (oveja.color == 'rojo' && oveja.name.toLowerCase().includes('a') && oveja.name.toLowerCase().includes('n')) {

        filterOvejas.push(oveja);
    }

});

console.log(filterOvejas);
