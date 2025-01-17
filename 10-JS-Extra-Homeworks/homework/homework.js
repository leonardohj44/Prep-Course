// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var arregloClavesValor = Object.entries(objeto);
  return arregloClavesValor;
  /* 
  //otro metodo
  var na=[];
  for(clave in objeto){
    na.push([clave,objeto[clave]]);
  }
  return na;
  */
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objeto = {};
  for (var i = 0; i < string.length; i++) {
    if (objeto.hasOwnProperty(string[i])) {
      objeto[string[i]] = objeto[string[i]] + 1;
    }
    else {
      objeto[string[i]] = 1;
    }
  }
  return objeto

  // otro metodo
  /*
  let letra=[];
  string.split('').forEach((item) => {
    if(!letra.includes(item)) 
      letra.push(item);
  })
  var rep={};
  letra.forEach((item)=>{
    let contador=0;
    string.split('').forEach((items) => {
      if(item==items) contador+=1;
  })
  rep[item]=contador;
})
return rep;
*/
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayus = "";
  var minus = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      minus += s[i];
    }
    else {
      mayus += s[i];
    }
  }
  return mayus + minus
  // otro metodo
  /*
  var mayus = [];
  var minus = [];
  s.split('').forEach((item) => {
    if (item === item.toUpperCase()) {
      mayus.push(item);
    }
    else if (item === item.toLowerCase()) {
      minus.push(item);
    }
  })
  var unir = [...mayus, ...minus];
  return unir.join('');
  */
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var inverso = str.split(" ").map(function (elemento) {
    return elemento.split("").reverse().join("");
  })
  return inverso.join(" ");


  //otro metodo
  /*
  var newDato = [];
  str.split(' ').forEach((item) => newDato.push(item.split('').reverse().join('')));
  return newDato.join(' ');
  */
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var s = numero.toString()
  si = s.split('').reverse().join('');
  if (si === s)
    return "Es capicua";
  else
    return "No es capicua";
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  return cadena.replace(/a/g, "").replace(/b/g, "").replace(/c/g, "");

  // otro metodo
  /*
  var resultado = '';
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] !== 'a' && cadena[i] != 'b' && cadena[i] != 'c') {
      resultado += cadena[i];
    }
  }
  return resultado;
  */
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  return arr.sort((p1, p2) => p1.length - p2.length);
  // otro metodo
  /*return arr.sort(function (palabra1, palabra2) {
    return palabra1.length - palabra2.length;
  })
  */
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var resultado = [];
  arreglo1.forEach(num1 => {
    arreglo2.forEach(num2 => {
      if (num1 === num2) resultado.push(num1);
    })
  })
  return resultado;
  // otro metodo
  /*  
  var newArr = [];
  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        newArr.push(arreglo1[i]);
      }
    }
  }
  return newArr;
  */
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

