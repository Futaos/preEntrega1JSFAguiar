// ¡¡Bienvenidos, jugadores!! Es hora de enfrentarse al juego de toda la vida, pero contra la Computadora. Suerte contra la máquina 🎮🤖.

//Se define la función para que la computadora elija de forma aleatoria las opciones válidas: 1, 2 ó 3.
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Si no eliges alguna de las tres opciones válidas (1, 2 ó 3), pierdes contra la computadora.
function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🥌";
  } else if (jugada == 2) {
    resultado = "Papel 📃";
  } else if (jugada == 3) {
    resultado = "Tijera ✂️";
  } else {
    resultado = "MAL ELEGIDO";
  }
  return resultado;
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

//Define la cantidad de partidas a jugar, hasta que alguno tenga un máx de 3 victorias.
while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3);
  jugador = prompt("Elige: 1 para Piedra🥌, 2 para Papel📃, 3 para Tijera✂️");
  // alert("Elegiste " + jugador)

  alert("PC elige " + eleccion(pc));
  alert("Tú eliges " + eleccion(jugador));

  // Los escenarios que se presentan segun la opción elegida por el jugador y la pc.
  if (pc == jugador) {
    alert("EMPATE");
  } else if (jugador == 1 && pc == 3) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else if (jugador == 2 && pc == 1) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else if (jugador == 3 && pc == 2) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else {
    alert("PERDISTE");
    perdidas = perdidas + 1;
  }
}

//Mensaje al Jugador con la cantidad de victorias y derrotas.
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
