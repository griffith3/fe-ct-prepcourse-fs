function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:


switch (mes) {

case 1 :
return (31);

case 3 :
return (31);

case 5 :
return (31);

case 7 :
return (31);

case 8 :
return (31);

case 10 :
return (31);

case 12:
return (31);

case 4 :
return (30);

case 6 :
return (30);

case 9 :
return (30);

case 11 :
return (30);

case 2 :
return (28);

default:
  return (0);





}



}

module.exports = diasEnMes;
