const cipher = {
  // ingresaremos los atributos del objeto cipher
  wordCipher:'',
  positionCipher: 0,

  encode:function(){
    let encodeWord="";
    // en caso el valor del numero sea el total del abecedario devuelve la misma palabra
    if (this.positionCipher==26){
      //console.log(this.wordCipher);
      return this.wordCipher;
    }

    //en caso el valor del numero sea mayor al total del abecedario, realiza un modulo para obtener el valor optimo
    if (this.positionCipher>26){
      let temp=this.positionCipher%26;
      this.positionCipher=temp;
    }

    //en caso el valor sea negativo, suma el valor de 26 para obtener el numero correcto a recorrer
    if (this.positionCipher<0) {
      let temp=this.positionCipher+27;
      this.positionCipher=temp;
    }
    console.log(this.positionCipher);
    //separamos la palabra original en un array
    let wordSep = this.wordCipher.split('');
    //creamos el arrary que modificaremos
    let nuevo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //guardamos el array original
    let abc= nuevo.slice();
    //extraemos los valores segun la posicion a rotar
    temp = abc.splice(0,this.positionCipher);
    //agregamos esos valores al abecedario a modificar
    temp.forEach(function(elemento, indice, array) {
      abc.push(elemento);
    })
    
    //limpiamos temp
    temp.splice(0, temp.length);
    
    //recorremos el array de la palabra y ubicamos su posicion en el abecedario original, luego con la posicion ubico en el array modificado el valor nuevo, todo se guarda en un array
    wordSep.forEach(function(elemento, indice, array){
      temp.push(abc[nuevo.indexOf(elemento)]);
    })

    //junto todo el array en una palabra para devolver
    encodeWord=temp.join('');
    console.log(encodeWord);
  }
};

let nuevo= Object.create(cipher);
nuevo['wordCipher']="casa";
nuevo['positionCipher']=-24;
nuevo.encode();
//console.log(nuevo.encode());

//export default cipher;
