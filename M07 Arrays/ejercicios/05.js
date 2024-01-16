function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:



let longitud = array.length;

for (let i = 0 ; i < longitud; i++) {

if ( array[i].length > 5 ) {

var masde5 = array[i];

break;
                              }



                                } 

return masde5;




}

module.exports = obtenerPrimerStringLargo;
