const ligar = document.getElementById(`ligar`);
const desligar = document.getElementById(`desligar`);
const lamp = document.getElementById(`lamp`);

function seLampadaQuebrar() {
  return lamp.src.indexOf (`quebrada`) > -1
}

function lampLigar() {
  if ( !seLampadaQuebrar () ) {
    lamp.src = `./assets/img/ligada.jpg`;
  }
}

function lampDesligar() {
  if ( !seLampadaQuebrar () ) {
    lamp.src = `./assets/img/desligada.jpg`;
  }
}

function lampQuebrar() {
  lamp.src = `./assets/img/quebrada.jpg`;
}

ligar.addEventListener (`click`, lampLigar);
desligar.addEventListener(`click`, lampDesligar);
lamp.addEventListener(`mouseover`, lampLigar);
lamp.addEventListener(`mouseleave`, lampDesligar);
lamp.addEventListener(`dblclick`, lampQuebrar);