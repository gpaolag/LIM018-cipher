import cipher from './cipher.js';



const btndecifrar= document.getElementById("btndecifrar");
btndecifrar.addEventListener("click",decifrar);

const btncifrar= document.getElementById("btncifrar");
btncifrar.addEventListener("click",cifrar);

function cifrar(){
  const wordc= document.getElementById('words').value;
  const offset= document.getElementById('position').value;
  document.getElementById("res").value = cipher.encode(offset,wordc);
}

function decifrar(){
  const wordde= document.getElementById('words').value;
  const offsetde= document.getElementById('position').value;
  document.getElementById("res").value = cipher.decode(offsetde,wordde);
}

