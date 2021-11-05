
//Crea una funcion que reciba dos parametros, e imprmir un recorrido desde el primer parametro al segundo parametro. 
//Al final retornar la multiplicación entre los dos parametros. 
//Asi mismo ejecutar la prueba de iteracion en los rangos de 8 a 14. 
//============
function iterar(a, b) {
  for(var c = a; c < b; c++) {
    console.log(c);
  }
  return a * b;
}
iterar(0, 10);
console.log(iterar(0, 10));