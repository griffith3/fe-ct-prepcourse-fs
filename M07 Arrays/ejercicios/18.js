function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:

let sum = num; 

let array = [];

for (let i = 0; i <10; i ++)
{

array[i] = sum + 2;
sum = array[i];

if (sum === i) {

  
  break;
  
}



}


if (sum === num + 2 * 10) {
  // Si se llega al final del bucle, se retorna el arreglo
  return array;
} else {
  return 'Se interrumpió la ejecución';
}








}

module.exports = breakStatement;
