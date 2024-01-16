function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  if (arguments.length === 0) {
    return 0;
  }

  // Inicializa una variable para almacenar el producto
  let producto = 1;

  // Itera sobre los argumentos y multiplica cada uno
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  // Retorna el producto resultante
  return producto;







}







module.exports = multiplicarArgumentos;
