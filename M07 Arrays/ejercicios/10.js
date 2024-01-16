function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:


  if (array.length === 0) {
    return 0; // Devuelve 0 para un array vacío
  }

  if (array.length === 1) {
    return 0; // Devuelve 1 para un array de un solo elemento
  }



let numeromasGrande = Number.NEGATIVE_INFINITY;

let indicemasGrande = -1;


array.forEach((elemento , indice) => {

if(elemento > numeromasGrande) {

numeromasGrande = elemento;
indicemasGrande = indice;
}
});
  


return indicemasGrande;


}

module.exports = encontrarIndiceMayor;
