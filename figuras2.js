/* Codigo del cuadrado -------------------------*/
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}

/* codigo del triangulo --------------------------*/

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base + altura) / 2;
}

console.groupEnd();

/* codigo del circulo ---------------------------*/
console.group("Circulo");

/* radio */

/* diametro */
function diametroCirculo(radio) {
    return radio * 2;
}

/* PI */
const PI = Math.PI;  /* o directamente usar 3.1415
 */
console.log("PI es: " + PI);

/* circunferencia */
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


/* area */
function areaCirculo(radio){
    return (radio + radio) + PI;
}

console.groupEnd();

/* FUNCIONES---interactuar con html------------------------- */

/* cuadrado */

/* funcion para recivir lo que escriben los usuarios en el input */
function CalcularPerimetroCuadrado(){ /* esta funcion se llama en html con ouclick="" en el input */
    const input = document.getElementById("InputCuadrado")/* permite conectar con la etiqueta input de html */
    const value = input.value; /* permite conectar unicamnete con el valor de la etiqueta de html */
    /* generamos una alerta que va a recivir el usuario */
    const perimetro = perimetroCuadrado(value); /* reutilizamos la funcion de perimetroCuadrado con el valor de la const value */
    alert(perimetro); /* generar una alerta con el valor de la const perimetro */
}

function CalcularAreaCuadrado(){ 
    const input = document.getElementById("InputCuadrado")
    const value = input.value; 
    const area = areaCuadrado(value); 
    alert(area);
}

/* Triangulo */
function CalcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const perimetro = perimetroTriangulo(value);
    alert(perimetro); 
}


