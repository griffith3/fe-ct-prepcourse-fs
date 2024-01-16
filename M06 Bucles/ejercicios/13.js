function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:

if (typeof(num)== 'number'){

        let arrayDigitos = num.toString().split('');


                  if (   (arrayDigitos.includes('.')) || (arrayDigitos.includes(',')) )

                                                         {return false;}


                                                           else return true;
  
  

                              } else return false;


}

module.exports = esEntero;
