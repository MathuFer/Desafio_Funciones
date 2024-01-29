globalColor = ""; 

document.addEventListener("keydown", function(event) {
  keyDiv = document.getElementById("key");

  switch (event.key) {
    case "a":
      globalColor = "pink";
      break;
    case "s":
      globalColor = "orange";
      break;
    case "d":
      globalColor = "lightblue";
      break;
    case "q":
      crearNuevoDiv("purple");
      break;
    case "w":
      crearNuevoDiv("gray");
      break;
    case "e":
      crearNuevoDiv("brown");
      break;
  }
  keyDiv.style.backgroundColor = globalColor;
});

document.getElementById("azul").addEventListener("click", function() {
  cambiarColor("azul");
});

document.getElementById("rojo").addEventListener("click", function() {
  cambiarColor("rojo");
});

document.getElementById("verde").addEventListener("click", function() {
  cambiarColor("verde");
});

document.getElementById("amarillo").addEventListener("click", function() {
  cambiarColor("amarillo");
});

function cambiarColor(id) {
  document.getElementById(id).style.backgroundColor = 'black';
}

function crearNuevoDiv(color) {
  nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.backgroundColor = color;
  nuevoDiv.style.border = "1px solid black";
  document.body.appendChild(nuevoDiv);
}