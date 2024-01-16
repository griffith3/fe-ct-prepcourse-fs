function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:


  let arrPares = [];
  var j = 0;

  for (let i = 0; i<array.length; i++){

    
      if (array[i] % 2 === 0){

      arrPares[j]=array[i];
                      j++;
                           }

                                      }


return arrPares;



}

module.exports = filtrarNumerosPares;
