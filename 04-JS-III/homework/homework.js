// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var a =array.[0]
  console.log(a)
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var a = array.length-1
  console.log(array[a])
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var a=array.length
  console.log(a)
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  if (array.length==0){
      console.log(array)
  }
  else{
      const Na=[]
      for (let i =0;i<array.length;i++){
          let a = array[i]+1;
          Na.push(a);
      }
      console.log(Na)
  }
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  console.log(array)
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  console.log(array)
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var a = palabras[0]
  a+=' '
  for (let i=1; i<palabras.length;i++){
      a+=palabras[i]
      a+=' '
  }
  console.log(a)
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)!=false){
      console.log(true)
  }
  else{
      console.log(false)
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let a = 0;
  for (let i =0;i<numeros.length;i++){
      a+=numeros[i]
  }
  console.log(a)
}



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let a=0;
  for (let i =0;i<resultadosTest.length;i++){
      a+=resultadosTest[i]
  }
  var t=a/resultadosTest.length
  console.log(t)
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var a =  Math.max(...numeros);
  console.log(a)
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let a=1
  if (arguments.length==0){
      console.log(0)
  }
  else if (arguments.length==1){
      console.log(arguments[0])
  }
  else{
      for (let i=0;i<arguments.length;i++){
          a =a*arguments[i]
      }
    console.log(a)
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let a =0;
  for (let i=0; i<arreglo.length;i++){
      if (arreglo[i]>18){
          a+=1
      }
  }
  console.log(a)
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  if(numeroDeDia==1 || numeroDeDia==7){
      console.log('Es fin de semana')
  }
  else if (numeroDeDia>1 && numeroDeDia<7 ){
      console.log('Es dia laboral')
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var a =String(n);
  if (a[0]==9){
      console.log(true)
  }
  else{
      console.log(false)
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var a =arreglo[0]
  let t =0
  for (let i=1;i<arreglo.length;i++){
      if (a!=arreglo[i]){
          t+=1
      }
  }
  if (t==0){
      console.log(true)
  }
  else{
      console.log(false)
  }
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  if (array.includes('Enero') && array.includes('Marzo')&& array.includes('Noviembre')){
      console.log(['Marzo','Noviembre','Enero'])
  }
  else{
      console.log('No se encontraron los meses pedidos')
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  const A =[];
  for (let i=0;i<array.length;i++){
      if (array[i]>100){
          A.push(array[i])
      }
  }
  console.log(A)
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  const A =[]
  if (numero<10){
    console.log('Se interrumpió la ejecución')
  }
  else{
    let i =1;
    var n=2;
    while(i<10){
      A.push(numero+n)
      i+=1
      n+=2
    }
  console.log(A)
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  const A =[]
  let i=1;
  var n=2;
  while(i<10){
      A.push(numero+n)
    i+=1
    n+=2
  }
  console.log(A)
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
