var nombre = 'Rodrigo'
var apellido = 'Laime'
var usuario = 'Rodrigo'
var edad = 20
var email = 'blabla@gmail.com'
var mayorEdad = true
var ahorro = 9000
var deudas = 5000

/* concatenar */
var nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);
/* var nombreCompleto = nombre +' '+ apellido;
console.log(nombreCompleto); */

/* resta */
var Dinero = ahorro - deudas
console.log(Dinero);


/* concatenar */
const name = " Rodrigo Laime"
const lastName = "Roque"
const completeName = lastName + name;
const nickName = " Rodri"

/* console.log("Mi nombre es " + completeName + ", pero prefiero que me digas" + nickName + ".");
 */
/* lo convierto en una funcion */
function quienSoy(){
    console.log(`Mi nombr es ${completeName} pero prefiero que me digas ${nickName} .`);
};
quienSoy()

/* funcion traer el elemento */
const tiposSuscripciones3 = ['Free','Basic','Expert','Expert+']

function primerElemento3(b) {
    console.log(`El primer elemento del array es ${b[3]}`);
};
primerElemento2(tiposSuscripciones3);


/* funcion traer los elementos 1 a 1 */
const tiposSuscripciones7= ['Free','Basic','Expert','Expert+']

function elementos(l) {
    l.forEach((elemento,index) => console.log(`El elemento ${index} del array es ${elemento}`));
}
elementos(tiposSuscripciones7)




/* Condicionales */ /* SWITCH */
const tipoDeSuscripcion = "Free"
switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puede tomar casi todos los cursos de Platzi durante un mess");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
 };
 /* IF, ElSE, ELSE IF */
 function TipoSuscripcion (Suscripcion) {
    if(Suscripcion === 'Basic'){
        console.log("Puede tomar casi todos los cursos de Platzi durante un mess");
     } else if(Suscripcion === 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
     } else if(Suscripcion === 'ExpertPlus'){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
     } 
     else{
        console.log("Solo puedes tomar los cursos gratis");
     };
 };
TipoSuscripcion("Free");

/* CICLOS */ /* For */
const array = [1,2,3,4,5,6]
function recorrer(array){
    for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
    };
};
recorrer();

const array2 = [1,2,3,4,5,6]
function recorrer2(array2){
    for (let i = 20; i >= 5; i--) {
        console.log("El valor de i es: " + i);
    };
};
recorrer2();

/* While */
var i = 0 /* numero chico */
while(i < 5){
    console.log("El valor de i es:" + i);
    i++;
}

var r = 10 /* numero grande */
while(r >= 5){
    console.log("El valor de i es:" + r);
    r--;
}


/* otras funciones mal*/

/*mal
 function juego() {
    let resultado;
    do {
      resultado = parseInt(prompt('¿Cuál es el resultado de "2 + 2"?'));
    } while ( resultado !== 4 );
    if (resultado === 4);
    returnconsole.log('¡Eres un GENIO!');
  };
juego(4); */



/* mal
var solucion = 0
do{
    solucion = Number(prompt('Cuanto es 2+2?'))
}while(solucion!==4) */





/* mal
var endOfProgram = false

while(!endOfProgram){

var respuesta = Number(prompt("¿Cuánto es 2 + 2? "))
    if (respuesta == 4){
    console.log("¡Correcto!")
    endOfProgram = true
    }
    else{
        console.log('Volvemos a empezar...')
    }
}; */

/* funciones bien */
const tiposSuscripciones = ['Free','Basic','Expert','Expert+']

const primerElemento = (array) => console.log(`El primer elemento del array es ${array[0]}`)

primerElemento(tiposSuscripciones)
/* ------ */
const tiposSuscripciones2 = ['Free','Basic','Expert','Expert+']

function primerElemento2(a) {
    console.log(`El primer elemento del array es ${a[3]}`);
};

primerElemento2(tiposSuscripciones2);

/* funcion bien */

const tiposSuscripciones5 = ['Free','Basic','Expert','Expert+']

const elementos = (array) => array.forEach((elemento,index) => console.log(`El elemento ${index} del array es ${elemento}`))

elementos(tiposSuscripciones5)
/* --------- */
const tiposSuscripciones6= ['Free','Basic','Expert','Expert+']

function elementos(r) {
    r.forEach((elemento,index) => console.log(`El elemento ${index} del array es ${elemento}`));
}
elementos(tiposSuscripciones6)



/* funcion que recive cualquier paraemetro */
var estudiante = {
    nombre:'Juan',
    apellido:'Ruano',
    edad:23,
    trabajando:false
}

const datosEstudiante = (objeto) => {
    for(var prop in objeto){ //prop hace referencia la propiedad del objeto
        console.log(`La propiedad ${prop} tiene como valor ${objeto[prop]}`)
    }
}

datosEstudiante(estudiante)