function areaDelTriangulo(base, altura) {
  // Calcula el área de un triángulo y retorna el resultado.
  // Tu código:


  if (
    (typeof base === 'number') && (typeof altura === 'number')
    )
    {     
      
          var resultado = (base * altura)/2;
  
          return resultado;
  
  
  
    }else
  
    {Error ("Ambos valores deben ser numericos")}
  
}

module.exports = areaDelTriangulo;
