function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if ((a<0)||(b<0)) return 0;

  
  if ((a===0)||(b===0)) return 0;

  else {

          if (a===b) return a;

                var multiplica = 1;

              

              if (a<b) {

                          while ( a <= b){
                          multiplica = a * multiplica;
                          a++;
                                         }
  
                          return Math.trunc(multiplica);

                          } else 




              if(a>b)    {
                        while ( a >= b){
                        multiplica = b * multiplica;
                        b++;
                                        }

                        return (multiplica);
                      }

                      

         }

        }

module.exports = productoEntreNúmeros;