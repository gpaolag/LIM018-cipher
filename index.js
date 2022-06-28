import cipher from './cipher.js';



const btndecifrar= document.getElementById("btndecifrar");
btndecifrar.addEventListener("click",decifrar);

const btncifrar= document.getElementById("btncifrar");
btncifrar.addEventListener("click",cifrar);

const btnborrar=document.getElementById("borrar");
btnborrar.addEventListener("click",borrar);

function borrar() {
  document.getElementById('words').value="";
  document.getElementById('position').value="";
}

function validacion(){
  if(document.getElementById('words').value =="" && document.getElementById('position').value==""){
        alert("ingrese los valores");
    }else if(document.getElementById('words').value =="" ){

        alert("Ingrese un mensaje");}
    else if( document.getElementById('position').value==""){
        alert('Ingrese un numero de llave');
    }
}
function cifrar(){
  validacion();
  const wordc= document.getElementById('words').value;
  const offset= document.getElementById('position').value;
  document.getElementById("res").value = cipher.encode(offset,wordc);
}

function decifrar(){
  validacion();
  const wordde= document.getElementById('words').value;
  const offsetde= document.getElementById('position').value;
  document.getElementById("res").value = cipher.decode(offsetde,wordde);
}

var btncopiar = document.querySelector('#copiar');
btncopiar.addEventListener('click', copy);
function copy() {
  var respuesta = document.querySelector('#res');
  respuesta.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
}

