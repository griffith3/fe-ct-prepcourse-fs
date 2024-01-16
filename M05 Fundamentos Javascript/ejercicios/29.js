function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Tu código:

  if (
    (typeof alto === 'number') && (typeof ancho === 'number')
    )
    {     
      
          var resultado = alto * ancho;
  
          return resultado;
  
  
  
    }else
  
    {Error ("Ambos valores deben ser numericos")}
  


}

module.exports = obtenerAreaRectangulo;
