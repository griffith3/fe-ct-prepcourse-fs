function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:



let mult = [];

mult = array.map((elemento , index)=> elemento * index);

return mult;


  
}

module.exports = multiplicarElementosPorIndice;
