var vp = document.getElementById("villaplatzi");
var paper = vp.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

console.log(teclas);

var fondo = {
  url: "tiles.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}

var pollo = {
  url: "pollo.png",
  cargaOK: false
}

var pinkpig = {
  url: "pinkpig,png.png",
  cargaOK: false
}

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

pinkpig.objeto = new Image();
pinkpig.objeto.src = pinkpig.url;
pinkpig.objeto.addEventListener("load", cargarPinkPig);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarPinkPig()
{
  pinkpig.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK){
    paper.drawImage(fondo.objeto, 0, 0);
  }
  if(vaca.cargaOK)
  {
    for(var v = 0; v < 25; v++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      paper.drawImage(vaca.objeto, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    for(var c = 0; c < 30; c++){
      var x = aleatorio(0, 5)
      var y = aleatorio(0, 5)
      var x = x * 60;
      var y = y * 60;
      paper.drawImage(cerdo.objeto, x, y);
    }
  }
  if(pollo.cargaOK)
  {
    for(var p = 0; p < 30; p++){
      var x = aleatorio(0, 5)
      var y = aleatorio(0, 5)
      var x = x * 60;
      var y = y * 60;
      paper.drawImage(pollo.objeto, x, y);
  if(pinkpig.cargaOK)
  {
  paper.drawImage(pinkpig.objeto, 400, 400);
  }
    }
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
