function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  var div = numero;
  var cuenta = 0;
  
  while (div != 0)
  
  {
      var operation = numero % div;
      div --;
  
      if (operation === 0) {
          cuenta ++;}
  }
  
  if (cuenta === 2)
  {
  return true;
  }
  
  else
  return false;



}

module.exports = esNumeroPrimo;
