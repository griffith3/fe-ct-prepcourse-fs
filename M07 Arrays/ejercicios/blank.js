
array = [
  'Marzo',
  'Diciembre',
  'Abril',
  'Junio',
  'Julio',
  'Noviembre',
  'Enero',
  'Mayo',
  'Febrero',
];


let nuevoarreglo = [];

if ( array.includes ('Enero') && array.includes ('Marzo') && array.includes ('Noviembre') ) {



      for (let i=0; i<array.length;i++) {

            if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre' ) {

                      nuevoarreglo.push(array[i]);

                                                                                            }


                                        }




                                                                                               }



console.log (nuevoarreglo.length);