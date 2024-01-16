function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  if (numeros.length > 0) {
    

    for (let i = 0; i < numeros.length; i++) {
  
      let buscar = numeros[i];
      
      for (let j= i+1; j < numeros.length;j++){
 
        if(buscar === numeros[j]) { return buscar;}
          
                                              }

                                              }

                                      

    }




    
  }

  













module.exports = encontrarElementoRepetido;