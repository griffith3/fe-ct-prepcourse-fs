function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:


var saludo = "Hola ";
var signo = '!';
var cadena = saludo + nombre + signo;

return cadena;



}

module.exports = obtenerSaludo;