const lista1 = [100, 200, 500, 800, 400000000,];

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
    mediana = lista1[mitadLista1];
}