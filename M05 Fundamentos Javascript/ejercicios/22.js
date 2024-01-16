function resta(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de la resta.
  // Tu código:


  if (
    (typeof x === 'number') && (typeof y === 'number')
    )
    {     
      
          var resultado = x - y;
  
          return resultado;
  
  
  
    }else
  
    {Error ("Ambos valores deben ser numericos")}
  
  }



module.exports = resta;