const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {}; //convierte el array en objeto

lista1.map( //map ayuda a recorrer el array
    function(elemento){
        if (lista1Count[elemento]) {//condicion si lla existe se suma 
        lista1Count[elemento] += 1; //se suma 1 a cada una de las posisciones de los objetos cada vez que buelve a a aparecer en la lista
        } else { //si no existe solo aparece una sola vez
        lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
)

const moda = lista1Array[lista1Array.length - 1];