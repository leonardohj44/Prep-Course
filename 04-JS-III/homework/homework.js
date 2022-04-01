// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i=0; i<array.length; i++){
    array[i]=array[i]+1;
  } //for
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  s=palabras[0];
  for (let i=1;i<palabras.length; i++){
    s = s + " " + palabras[i];
  } // for
  return s;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.length==0) {
    return false;
  }
  for (let i=0;i<array.length; i++){
    if (array[i]===elemento) {
      return true;
    } // if
  return false;
  } // for
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var s=0;
  for(let i=0; i<numeros.length; i++){
    s = s + numeros[i];
  } // for
  return s;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var s=0;
  for(let i=0; i<resultadosTest.length; i++){
    s = s + resultadosTest[i];
  } // for 
  return s/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  grande=Number.MIN_SAFE_INTEGER;
  for(let i=0; i<numeros.length; i++){
    if (numeros[i]>grande) {
      grande=numeros[i];
    } // if
  } // for
  return grande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  longitud=arguments.length;
  if (longitud==0) return 0;
  if (longitud==1) return arguments[0];
  var p=1;
  for(let i=0; i<longitud; i++){
    p=p*arguments[i];
  } // for
  return p;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var c=0;
  for (let i=0;i<arreglo.length; i++){
    if (arreglo[i]>18)
      c++;
  } // for
  return c;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch(numeroDeDia){
    case 1 : ;
    case 7 : return "Es fin de semana"; break;
    case 2 :;
    case 3 :;
    case 4 :;
    case 5 :;
    case 6: return "Es dia Laboral"; break;
  } // switch
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var s=n.toString();
  if (s[0]=='9') {
    return true;
  }
  else {return false;}
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  len=arreglo.length;
  var c=0; //contar, número de pares a comparar
  for(let i=0; i<len-1; i++) {
    if(arreglo[i]===arreglo[i+1]) 
      c++;
  } // for
  if (c==len-1) return true;
  else return false;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var na=[];
  var c=0;
  for(let i=0; i<array.length; i++){
    if(array[i]=="Enero") {c++; na.push(array[i]);}
    if(array[i]=="Marzo") {c++; na.push(array[i]);}
    if(array[i]=="Noviembre") {c++; na.push(array[i]);}
  } // for
  if (c==3) return na;
  else return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var na=[];
  for(let i=0; i<array.length; i++){
    if(array[i]>100) {na.push(array[i]);}
  } // for
  return na;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var na=[];
  var s=0;
  var f=0;
  for(let i=1; i<=10; i++){
    na.push(numero+=2);
    s=s+numero;
    if (s==i) {f=1; break;}
  } // for
  if (f==1) return "Se interrumpió la ejecución";
  else return na;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var av=[];
  for(var i=0; i<10;i++){
    if(i==5){
      continue;  
    } else {
      numero+=2;
      av.push(numero);
    }
  } // for
  return av;
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
