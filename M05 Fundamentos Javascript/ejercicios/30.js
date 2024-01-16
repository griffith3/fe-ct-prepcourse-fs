function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:



   if (
      (typeof lado === 'number') 
      )
      {     
        
            var resultado = 4 * lado;
    
            return resultado;
    
    
    
      }else
    
      {Error ("Ambos valores deben ser numericos")}
    
}

module.exports = retornarPerimetro;
