var vp = document.getElementById("villaplatzi");
var paper = vp.getContext("2d");

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

var ycerdo = 400;
var xcerdo = 400;

function dibujarPinkPig(xi, yi){
  if(pinkpig.cargaOK)
  {
    paper.drawImage(pinkpig.objeto, xcerdo, ycerdo);
  }
}

function moverPinkPig(evento){
  console.log("prueba");
  var movimientolado = 60;
  var movimientoarriba = 40;
  var limite = 480;
    if(ycerdo>=limite&& xcerdo>=limite){
    alert("you are out!")
    }

  switch(evento.which){
    case teclas.UP:
    ycerdo = ycerdo - movimientoarriba;
    dibujarPinkPig(xcerdo, ycerdo - movimientoarriba);
    break;
    case teclas.DOWN:
    ycerdo = ycerdo + movimientoarriba;
    dibujarPinkPig(xcerdo, ycerdo + movimientoarriba);
    break;
    case teclas.LEFT:
    xcerdo = xcerdo - movimientolado;
    dibujarPinkPig(xcerdo - movimientolado, ycerdo);
    break;
    case teclas.RIGHT:
    xcerdo = xcerdo + movimientolado;
    dibujarPinkPig(xcerdo + movimientolado, ycerdo);
    break;
    default:
    console.log("Otra tecla");
  }
}




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

function dibujar()
{
  if(fondo.cargaOK){
    paper.drawImage(fondo.objeto, 0, 0);
  }
  if(vaca.cargaOK)
  {
  dibujarVacas();
    }
  if(cerdo.cargaOK)
  {
    for(var c = 0; c < 5; c++){
      var x = aleatorio(0, 5)
      var y = aleatorio(0, 5)
      var x = x * 60;
      var y = y * 60;
      paper.drawImage(cerdo.objeto, x, y);
    }
  }
  if(pollo.cargaOK)
  {
    for(var p = 0; p < 5; p++){
      var x = aleatorio(0, 5)
      var y = aleatorio(0, 5)
      var x = x * 60;
      var y = y * 60;
      paper.drawImage(pollo.objeto, x, y);
    }
    if(pinkpig.cargaOK){
      paper.drawImage(pinkpig.objeto, xcerdo, ycerdo);
      console.log('added event');
      document.addEventListener("keyup", moverPinkPig)
    }
}
}


function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujarVacas();
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

function dibujarVacas(){
  for(var v = 0; v < 5; v++)
  {
    var x = aleatorio(0, 5);
    var y = aleatorio(0, 5);
    var x = x * 80;
    var y = y * 80;
    paper.drawImage(vaca.objeto, x, y);
}


}
