function multiplica(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su multiplicación.
  // Tu código:
  if (
    (typeof x === 'number') && (typeof y === 'number')
    )
    {     
      
          var resultado = x * y;
  
          return resultado;
  
  
  
    }else
  
    {Error ("Ambos valores deben ser numericos")}
  
  
}

module.exports = multiplica;