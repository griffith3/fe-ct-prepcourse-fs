// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCubo(num) {
  // Retorna el valor de "num" elevado al cubo.
  // Tu código:


  if ( typeof num === 'number'){
    var cuadrado = Math.pow(num, 3);
  
    return cuadrado;
  
    }
}

module.exports = elevarAlCubo;
