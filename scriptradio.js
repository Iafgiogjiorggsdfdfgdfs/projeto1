const playlist = document.getElementById("playlist");
const player = document.getElementById("player");
let currentSongIndex = 0;

const musicas = [
    "musicas/Então Pode Ir EmboraHoje Sonhei com VocêEntão Valeu.mp3",
    "musicas/Flor De Plástico.mp3",
    "musicas/Israel  Rodolffo - Marca Evidente.mp3",
    "musicas/Jads  Jadson - Jeito Carinhoso.mp3",
    "musicas/Marília Mendonça - Infiel.mp3",
    "musicas/Marília Mendonça - Leão.mp3",
    "musicas/Marília-Te Amo Demais.mp3",
    "musicas/Planos Impossíveis - Jads e Jadson.mp3",
    "musicas/Se Tiver Coragem  Inevitável  Meu Segredo  Não Imploro Por Amor  Então Pode Ir.mp3",
    "musicas/Jads e Jadson - Letras Garrafais.mp3",

];

let musicaAtual = 0;

function criarPlaylist() {
    musicas.forEach((musicas, index) => {
        const li = document.createElement("li");
        li.textContent = musicas ;
        li.addEventListener("click", () => tocarMusica(index));
        playlist.appendChild(li);
    });
    const playButton = document.getElementById("playButton");
    const player = document.getElementById("player");
    
  }

function tocarMusica(index) {
    musicaAtual = index;
    player.src = musicas[index];
    player.play();
}

function tocarProximaMusica() {
    musicaAtual = (musicaAtual + 1) % musicas.length;
    tocarMusica(musicaAtual);
}

function tocarMusicaAnterior() {
    musicaAtual = (musicaAtual - 1 + musicas.length) % musicas.length;
    tocarMusica(musicaAtual);
}
criarPlaylist();

const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

nextButton.addEventListener("click", tocarProximaMusica);
prevButton.addEventListener("click", tocarMusicaAnterior);

function loadAudio() {
  audio.src = audios[currentTrack];
  audio.load();
}
function play() {
  if (!playing) {
    musicas.play();
    playing = true;
  }
}
function pause() {
  if (playing) {
    audio.pause();
    playing = false;
  }
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
  playing = false;
}
loadAudio();
