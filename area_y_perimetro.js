//se declara la variable var con el nombre *figura* = *prompt* el cual permite que muestre un dialogo//
// y permite abrir una barra para escribir en donde se digita lo solicitado// // el \n1- , \n2-, \n3-, \n4-, son como para generar un tipo de lista el cual la cual se ordena hacia abajo//
// cada uno va tener una solucion al problema dado//
var figura = prompt("Seleccione la figura a la cual desea conocer el Perimetro y el Area \n1- Triangulo \n2- Rectangulo \n3- Cuadrado \n4- Circulo");
// si *figura es igual a 1 O figura es igual a tringulo que es la figura 1 puesta en el prompt//
if (figura == 1 || figura == "triangulo" || figura == "Triangulo" || figura == "TRIANGULO") {
    // se declara cada variable *var* con la formula para sacar el area y el perimetro de la figura y mediante//
    //parseInt que analiza si contiene un valor entero(), prompt que permite abrir el exto de dialogo e indica mediante //
    // un texto opcional lo que debe realizar el usuario//
    var lado_a = parseInt(prompt("ingrese las medidas del lado a"));
    var lado_b = parseInt(prompt("ingrese las medidas del lado b"));
    var lado_c = parseInt(prompt("ingrese las medidas del lado c"));
    //esta variable perimetro muestra mediante var la formula que se aplica//
    var perimetro = lado_a + lado_b + lado_c
    // luego se imprime en consola mediante un texto que muestra el resultado del perimetro y la variable (perimetro) antes puesta//
    console.log("El perimetro del triangulo es: ", perimetro)
    //la variable altura igual que en los lados se pone con parseInt y prompt con su respectivo texto//
    var altura = parseInt(prompt("ingrese las medidas de la altura"));
    //se declara el resultado de la variable var *area* y se pone la respectiva formula par hallar el area//
    var area = (lado_b * altura) / 2
// luego se imprime en consola con su respectivo texto y el resultado de la variable *area*//
    console.log("El area del triangulo es: ", area)
}
// si no *else if* el cual se ejecuta cuando el if sea false, seguimos con el mismo codigo que la figura anterior//
else if (figura == 2 || figura == "rectangulo" || figura == "Rectangulo") {
    var base = parseInt(prompt("ingrese las medidas de la base"));
    var altura = parseInt(prompt("ingrese las medidas de la altura"));
    var perimetro = base + base + altura + altura;
    console.log("El perimetro del rectangulo es:", perimetro)
    var area = (base * altura)
    console.log("El area del rectangulo es: ", area)
    // el proceso se repite poniendo por medio de parseInt() prompt() e imprimiendo en consola los resultados//
}
else if (figura == 3 || figura == "cuadrado" || figura == "Cuadrado") {
    var lado = parseInt(prompt("ingrese la medida de uno de sus lados"));
    var perimetro = (lado * 4);
    console.log("El perimetro del cuadrado es:", perimetro)
    var area = (lado * lado)
    console.log("El area del cuadrado es: ", area)
}
else if (figura == 4 || figura == "circulo" || figura == "Circulo") {
    var radio = parseInt(prompt("ingrese la medida del radio"));
    var perimetro = (2 * Math.PI * radio);
    console.log("El perimetro del circulo es:", perimetro)
    var area = (Math.PI * radio)
    console.log("El area del circulo es: ", area)
}
// en caso de ingresar un numero fuera de los rangons del prompt saldra el anuncio que debe ingresar una opcion valida/
// y asi de esta manera se cerrara el codigo y no dejara seguirlo funcionando//
else
    console.log("Ingresa una opcion valida")