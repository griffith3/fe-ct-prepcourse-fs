function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:


  var arrDerecho = texto.split('');

  var arrReverso =[];
  
  var j = arrDerecho.length - 1;
  
  
  
  for (var i = 0; i<arrDerecho.length; i++) {
  
  arrReverso[i] = arrDerecho[j];
  j--;
  
  }
  
  let textoinvertido = arrReverso.join('');
  
  return (textoinvertido);


}

module.exports = invertirTexto;