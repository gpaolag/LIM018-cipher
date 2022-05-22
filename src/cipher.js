const cipher = {
  // ingresaremos los atributos del objeto cipher
  wordCipher:'',
  positionCipher: 0,
};

cipher.encode=function(positionCipher, wordCipher){
  
  wordCipher= wordCipher.toLowerCase();  
  let encodeWord="";
  // en caso el valor del numero sea el total del abecedario devuelve la misma palabra
  if (positionCipher==26 || positionCipher==-26){
    //console.log(this.wordCipher);
    return wordCipher.toUpperCase();
  }

  //en caso el valor del numero sea mayor al total del abecedario, realiza un modulo para obtener el valor optimo
  else if (positionCipher>26){
    let temp= positionCipher%26;
    positionCipher=temp;
  }

  //en caso el valor sea negativo, suma el valor de 26 para obtener el numero correcto a recorrer
  else if (positionCipher<0 && positionCipher>-26) {
    let temp= positionCipher+26;
    positionCipher=temp;
  }

  //en este caso se considera a un numero negativo menor a -26 para primero reducirlo y posterior convertirlo en un numero positivo para recorrer el correcto
  else if (positionCipher<-26){
    let temp=positionCipher%26;
    temp=temp+26;
    positionCipher=temp;
  }

  //separamos la palabra original en un array
  
  let wordSep = wordCipher.split('');
  //encuentro posiciones vacias
  let empty=[];
  wordSep.forEach(function (element, index) {
    if (element===' '){
      empty.push(index);
    }
  });
  //creamos el arrary que modificaremos
  let nuevo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  //guardamos el array original
  let abc= nuevo.slice();
  //extraemos los valores segun la posicion a rotar
  let temp = abc.splice(0,positionCipher);
  //agregamos esos valores al abecedario a modificar
  for (var elemento of temp){
      abc.push(elemento);
  }
  
  //limpiamos temp
  temp.splice(0, temp.length);
  
  //recorremos el array de la palabra y ubicamos su posicion en el abecedario original, luego con la posicion ubico en el array modificado el valor nuevo, todo se guarda en un array
  for (var elemento2 of wordSep){
    temp.push(abc[nuevo.indexOf(elemento2)]);
  }
  //agregamos espacios en blanco
  for (var elem of empty){
    temp.splice(elem,1,' ');  
  }

  //junto todo el array en una palabra para devolver
  encodeWord=temp.join('');
  encodeWord=encodeWord.toUpperCase();
  return encodeWord;
}
cipher.decode=function(positionCipher, wordCipher){
  wordCipher= wordCipher.toLowerCase();  
  let encodeWord="";
  // en caso el valor del numero sea el total del abecedario devuelve la misma palabra
  if (positionCipher==26 || positionCipher==-26){
    //console.log(this.wordCipher);
    return wordCipher.toUpperCase();
  }

  //en caso el valor del numero sea mayor al total del abecedario, realiza un modulo para obtener el valor optimo
  else if (positionCipher>26){
    let temp=positionCipher%26;
    positionCipher=temp;
  }

  //en caso el valor sea negativo, suma el valor de 26 para obtener el numero correcto a recorrer
  else if (positionCipher<0 && positionCipher>-26) {
    let temp=positionCipher+26;
    positionCipher=temp;
  }

  //en este caso se considera a un numero negativo menor a -26 para primero reducirlo y posterior convertirlo en un numero positivo para recorrer el correcto
  else if (positionCipher<-26){
    let temp=positionCipher%26;
    temp=temp+26;
    positionCipher=temp;
  }

  //separamos la palabra original en un array
  let wordSep = wordCipher.split('');  
  //encuentro posiciones vacias
  let empty=[];
  wordSep.forEach(function (element, index) {
    if (element===' '){
      empty.push(index);
    }
  });
  //creamos el arrary que modificaremos
  let nuevo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  //guardamos el array original
  let abc= nuevo.slice();
  //extraemos los valores segun la posicion a rotar
  let temp = abc.splice(0,positionCipher);
  //agregamos esos valores al abecedario a modificar
  for (var elemento of temp){
      abc.push(elemento);
  }
  
  //limpiamos temp
  temp.splice(0, temp.length);
  
  //recorremos el array de la palabra y ubicamos su posicion en el abecedario original, luego con la posicion ubico en el array modificado el valor nuevo, todo se guarda en un array
  for (var elemento2 of wordSep){
    temp.push(nuevo[abc.indexOf(elemento2)]);
  }

  //agregamos espacios en blanco
  for (var elem of empty){
    temp.splice(elem,1,' ');  
  }

  //junto todo el array en una palabra para devolver
  encodeWord=temp.join('');
  encodeWord=encodeWord.toUpperCase();
  return encodeWord;
  //console.log(encodeWord);
}

//console.log(typeof cipher.encode);
//cipher['wordCipher']="fdvd";
//cipher['positionCipher']=3;
//let resp= cipher.decode(cipher.positionCipher, cipher.wordCipher);
//console.log(resp);

export default cipher;
