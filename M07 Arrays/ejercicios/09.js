function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

let mayorque10 = 0;


array.forEach (elemento =>{
  
  if (elemento > 10)

  mayorque10++;
  
});
  
  return mayorque10;




}

module.exports = contarElementosMayoresA10;
