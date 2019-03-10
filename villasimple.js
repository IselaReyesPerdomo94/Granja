var vp = document.getElementById("villaplatzi");
var paper = vp.getContext("2d");
console.log('added event');
document.addEventListener("keyup", moverPinkPig)

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
var xvaca = []
var yvaca = []

var ycerdo = 400;
var xcerdo = 400;

function dibujarVacas(){
  if(vaca.cargaOK){
  for(var v = 0; v < 10; v++)
  {
    xvaca[v] = xvaca[v] !== undefined ? xvaca[v] : aleatorio(1, 300);
    yvaca[v] = yvaca[v] !== undefined ? yvaca[v] : aleatorio(1, 300);

    paper.drawImage(vaca.objeto, xvaca[v], yvaca[v]);
}
}
}

function moverPinkPig(evento){
  console.log("prueba");
  var movimientolado = 60;
  var movimientoarriba = 40;

  switch(evento.which){
    case teclas.UP:
    ycerdo = ycerdo - movimientoarriba;
    dibujar();
    break;
    case teclas.DOWN:
    ycerdo = ycerdo + movimientoarriba;
    dibujar();
    break;
    case teclas.LEFT:
    xcerdo = xcerdo - movimientolado;
    dibujar();
    break;
    case teclas.RIGHT:
    xcerdo = xcerdo + movimientolado;
    dibujar();
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

pinkpig.objeto = new Image();
pinkpig.objeto.src = pinkpig.url;
pinkpig.objeto.addEventListener("load", cargarPinkPig);

function dibujar()
{
  if(fondo.cargaOK){
    paper.drawImage(fondo.objeto, 0, 0);
  }
  if(pinkpig.cargaOK){
    paper.drawImage(pinkpig.objeto, xcerdo, ycerdo);
    }
  if(vaca.cargaOK){
    dibujarVacas()
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
  dibujar();
}

function cargarPinkPig()
{
  pinkpig.cargaOK = true;
  dibujar();
}
