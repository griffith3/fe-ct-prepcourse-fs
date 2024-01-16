// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:


  if ( typeof num === 'number' && typeof exponent === 'number')
  
  {
    var potencia = Math.pow(num, exponent);
  
    return potencia;
  
    } else
  
    {Error ("Debe ser un valor numerico")}


  
}

module.exports = elevar;