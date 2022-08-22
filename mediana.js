
function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


const lista1 = [100, 200, 500, 400000000,];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0){ /* si la divicion entre 2 y  numerito no nos da residuo el numero es par */
        return true;
    } else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1]; //le resta una poscision al elemento del medio que en este caso es 500
    const elemento2 = lista1[mitadLista1]; //toma como elemento del medio al 500

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
}else{

    mediana = lista1[mitadLista1];
}




/* --------------------------------------- */
/* const lista1 = [100, 200, 500, 800, 400000000,];
ejemplo de mediana
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
}else{
    mediana = lista1[mitadLista1];
} */

const ordenarNumbers = [1, 4, 7, 2, 3, 896, 2334, 400, 100]
ordenarNumbers.sort((a, b) => a - b)
console.log(ordenarNumbers);