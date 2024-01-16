function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

var j = array.length - 1; 


var arrReverso =[];

for (var i = 0; i<array.length; i++) {
  
arrReverso[i] = array[j];

j--;
  
  }

return arrReverso;


  
}

module.exports = invertirArray;
