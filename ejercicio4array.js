let persona = []
let nombre;
let cedula;
let fecha_Nacimiento;
let correo;

let persona1 = []
let nombre1;
let cedula1;
let fecha_Nacimiento1;
let correo1;

let persona2 = []
let nombre2;
let cedula2;
let fecha_Nacimiento2;
let correo2;

let ingresar = prompt("Seleccione 1 para ingresar datos")
if (ingresar == "1") {
    nombre=prompt("Ingrese su nombre");
    persona.push(nombre);
    cedula=prompt("Ingrese su cedula");
    persona.push(cedula);
    fecha_Nacimiento=prompt("Ingrese su fecha nacimiento");
    persona.push(fecha_Nacimiento);
    correo=prompt("Ingrese su correo");
    persona.push(correo);

    nombre1=prompt("Ingrese su nombre");
    persona1.push(nombre1);
    cedula1=prompt("Ingrese su cedula");
    persona1.push(cedula1);
    fecha_Nacimiento1=prompt("Ingrese su fecha nacimiento");
    persona1.push(fecha_Nacimiento1);
    correo1=prompt("Ingrese su correo");
    persona1.push(correo1);

    nombre2=prompt("Ingrese su nombre");
    persona2.push(nombre2);
    cedula2=prompt("Ingrese su cedula");
    persona2.push(cedula2);
    fecha_Nacimiento2=prompt("Ingrese su fecha nacimiento");
    persona2.push(fecha_Nacimiento2);
    correo2=prompt("Ingrese su correo");
    persona2.push(correo2);
    let buscar= prompt("digite el numero de la persona que desea conocer los datos del 1 al 3");
    if(buscar=="1"){
        document.write(persona)
    }
    else if(buscar=="2"){
        document.write(persona1)
    }
    else if(buscar=="3"){
        document.write(persona2)
    }
    else{alert("Digite un numero valido")}
}
else{
    alert("ingrese numero valido")
}








