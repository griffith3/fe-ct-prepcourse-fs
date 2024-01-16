function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:


  array.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b; // Ordenar números de menor a mayor
    } else if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b); // Ordenar cadenas alfabéticamente
    } else {
      // Si los tipos son diferentes, dejar que JavaScript maneje la comparación
      return typeof a < typeof b ? -1 : 1;
    }
  });
  
  return (array);

  

}

module.exports = ordenarArray;
