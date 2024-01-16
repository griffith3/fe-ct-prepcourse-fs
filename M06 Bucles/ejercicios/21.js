function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  var resultado = numero;


  
  
  while (numero % 2 === 0) {
  
  
  var ultimo = numero;
  
  numero = numero / 2;
  
 
  
  
  
  }
  
  
  if (ultimo / 2 === 1 ){
  
    return true;
    
  
  } else { 
  
          return false;

}
}
module.exports = esPotenciaDeDos;
