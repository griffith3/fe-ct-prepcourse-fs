function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  var str1 = str1.toLowerCase();
  var str2 = str2.toLowerCase();
  
  var str1 = str1.split('').sort().join('');
  var str2 = str2.split('').sort().join('');
  
  
  
  if (str1 === str2) { return true;}
  else {return false;}






}

module.exports = esAnagrama;
