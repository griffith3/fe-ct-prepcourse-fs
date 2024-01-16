function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:


  var arrDerecho = string.split('');

  var arrReverso =[];
  
  var j = arrDerecho.length - 1;
  
  
  
  for (var i = 0; i<arrDerecho.length; i++) {
  
  arrReverso[i] = arrDerecho[j];
  j--;
  
  }
  
  let textoinvertido = arrReverso.join('');


  textoinvertido = textoinvertido.replace(/\s/g, '');
  string = string.replace(/\s/g, '');


if (textoinvertido.toLowerCase() === string.toLowerCase()) {return true;}

else {return false;}
}

module.exports = esPalindromo;
