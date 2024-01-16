function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:



if (n===1) return n;
if (n===0) return 0;

var suma = 0;

if (n>1) {

  var suma = 0;
  arraynum = []
  
  
  for (var i=0; i<n; i++)  {
  
  arraynum[i]=1+i;
  
  suma  = suma + arraynum[i];
  
  }
  
  
  return suma;



} else if (n<0) {

  var suma = 0;
  arraynum = [];
  
  
  for (var i=0; i<=(Math.abs(n)+1); i++)  {
  
  arraynum[i]=n;
  
  suma  = suma + arraynum[i];
  
  n++;
  
  }


return suma;



}







}

module.exports = sumarHastaN;
