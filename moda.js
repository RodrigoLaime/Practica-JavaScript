const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {}; //convierte el array en objeto

lista1.map(
  //map ayuda a recorrer el array
  function (elemento) {
    if (lista1Count[elemento]) {
      //condicion si lla existe se suma
      lista1Count[elemento] += 1; //se suma 1 a cada una de las posisciones de los objetos cada vez que buelve a a aparecer en la lista
    } else {
      //si no existe solo aparece una sola vez
      lista1Count[elemento] = 1;
    }
  }
);

const lista1Array = Object.entries(lista1Count).sort(
  //
  function (valorAcumulado, nuevoValor) {
    return valorAcumulado[1] - nuevoValor[1]; //
  }
);

const moda = lista1Array[lista1Array.length - 1];

/* 
function elementoArray() */

/* ejemplo */

/* function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


const lista11 = [100, 200, 500, 400000000,];

const mitadLista1 = parseInt(lista11.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0){ /* si la divicion entre 2 y  numerito no nos da residuo el numero es par 
        return true;
    } else{
        return false;
    }
}

let mediana;

if(esPar(lista11.length)){
    const elemento1 = lista1[mitadLista1 - 1]; //le resta una poscision al elemento del medio que en este caso es 500
    const elemento2 = lista1[mitadLista1]; //toma como elemento del medio al 500

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
}else{a

    mediana = lista1[mitadLista1];
} */
