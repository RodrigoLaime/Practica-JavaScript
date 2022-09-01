/* madiana General */
const salariosCol = Argentina.map(function (personita) {
  //por cada interacion recivo a mi personita
  return personita.Salary; //por cada personita aparesca el salario
});
const salariosColSorted = salariosCol.sort(
  //sera la lista ordenada
  function (salarioA, salarioB) {
    return salarioA - salarioB; //indicar salarios iguales=0 salarioA<salarioB=-1  salarioA>salarioB= 1
  }
);

//Helpers funcion que no pertenece a la logica pero que se necita para calcular
function esPar(numerito) {
  if (numerito % 2 === 0) {
    //si el reciduo de numerito divido por 2 es par verdadero
    return true;
  } else {
    //si el reciduo de numerito divido por 2 es inpar falso
    return false;
  } //se puede resumir el codigo debajo de function return(numerito % 2===0); y borrar todo el if
} //

/* trabajar la mediana del salario */

//Helpers funcion que no pertenece a la logica pero que se necita para calcular
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
} //

//calculadora de mediana
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2); // parseaInt quita los decimales

  if (esPar(lista.length)) {
    //llamamos la funcion esPar y se lo aplicamos a la lista en su longitud
    const perosnitaMitad1 = lista[mitad - 1];
    const perosnitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([perosnitaMitad1, perosnitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
} //

/* calcular  el 10% de salario */

const medianaGeneralCol = medianaSalarios(salariosColSorted);

const spliceStart = (salariosColSorted.length * 90) / 100; //por donde comiensa a sacar
const spliceCount = salariosColSorted.length - spliceStart; //la cantidad que va a sacar

const salarioColTop10 = salariosColSorted.splice(
  //crear variable que guarde el 10%
  spliceStart,
  spliceCount
);

const medianaTop10Col = medianaSalarios(salarioColTop10);

console.log({
  medianaGeneralCol,
  medianaTop10Col,
});
