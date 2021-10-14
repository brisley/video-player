const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handleplay);
$pause.addEventListener("click", handlepause);
$backward.addEventListener("click", handlebackward);
$forward.addEventListener("click", handleforward);

function handleplay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("le diste click al botón de play");
}

function handlepause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log("le diste click al botón de pausa");
}

function handlebackward() {
  $video.currentTime = $video.currentTime - 10;
  console.log(
    "le diste click al botón de Retroceder 10 segundos",
    $video.currentTime
  );
}

function handleforward() {
  $video.currentTime = $video.currentTime + 10;
  console.log(
    "le diste click al botón de Adelantar 10 segundos",
    $video.currentTime
  );
}

const $progress = document.querySelector("#progress");

$video.addEventListener("loadedmetadata", handlLoaded);
$video.addEventListener("timeupdate", handlUpdate);

function handlLoaded() {
  $progress.max = $video.duration;
  console.log("ha cargado mi video", $video.duration);
}

function handlUpdate() {
  $progress.value = $video.currentTime;
  // console.log("holi", $video.currentTime);
}

$progress.addEventListener("input", handlInput);

function handlInput() {
  $video.currentTime = $progress.value;
  console.log($progress.value);
}
