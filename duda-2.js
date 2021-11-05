//Cual es el valor final de Z?
var z = 10; //Esta variable no esta afecta a la funcion
function a() {
  var z = 15; //Z no afecta a ningun valor de fuera de la funcion. 
  console.log(z); //Esto imprime en pantalla
  return z;
}
z = a() // El valor que retorna a se asigna a Z
console.log(z);