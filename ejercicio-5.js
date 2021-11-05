//Crea una funcion que haga un recorrido desde el 0 al 9, y dentro cada iteración aplique un segundo recorrido del 0 al 9. 

//============
function dimensional() {
  for(var h=0; h<10; h++) {
    for(var k=0; k<10; k++) {
      console.log("-->", k);
    }
    console.log(h);
  }
}
dimensional();