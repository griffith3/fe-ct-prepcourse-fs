var array = [];

array[0] = 'E';
array[1] = 'L';
array[2] = 'I';



var j = array.length - 1; 


var arrReverso =[];

for (var i = 0; i<array.length; i++) {
  
arrReverso[i] = array[j];

j--;
  
  }

 
console.log (arrReverso);


