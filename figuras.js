/* Codigo del cuadrado -------------------------*/
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados cuadrados miden. " + ladoCuadrado + "cm");


const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perrimetro del cuadrado es: " + perimetroCuadrado) + "cm";


const areaCuadrado = ladoCuadrado * 4;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

/* codigo del triangulo --------------------------*/

console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4; 

console.log("los lados del triangulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo + "cm")

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es:" + perimetroTriangulo + "cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es de: " + areaTriangulo + "cm^2") 
console.groupEnd();

/* codigo del circulo ---------------------------*/
console.group("Circulo");

/* radio */
const radioCirculo = 4;
console.log("El radio del circulo es de " + radioCirculo + "cm")

/* diametro */
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es de " + diametroCirculo + "cm")


/* PI */
const PI = Math.PI;  /* o directamente usar 3.1415
 */
console.log("PI es: " + PI);

/* circunferencia */
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es de " + perimetroCirculo + "cm")


/* area */
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es de " + areaCirculo + "cm^2")

console.groupEnd();
/*  */