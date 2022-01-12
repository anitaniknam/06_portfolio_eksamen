window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  window.addEventListener("resize", windowResize);
  windowResize();

  //   TODO: Spil lyd til baggrundsmusik
  document.querySelector("#baggrundsmusik").volume = 0.1;
  document.querySelector("#baggrundsmusik").play();
  document.querySelector("#baggrundsmusik").currentTime = 0;
  document.querySelector("#baggrundsmusik").repa = 0;
}

function windowResize() {
  console.log("windowResize");
  let widthScreen = document.querySelector("#screen").clientWidth;

  //Klik på sound til for at få sound fra
  document.querySelector("#sound_til").addEventListener("click", soundFra);
  //Klik på sound fra for at få sound til
  document.querySelector("#sound_fra").addEventListener("click", soundTil);
}

// Lyden slåes fra ved at trykke på sound knap
function soundFra() {
  console.log("soundFra");
  document.querySelector("#sound_til").classList.add("hide");
  document.querySelector("#sound_fra").classList.remove("hide");
  document.querySelector("#baggrundsmusik").pause();
  document.querySelector("#sound_fra").addEventListener("click", soundTil);
}

// Lyden slåes til ved at trykke på sound knap
function soundTil() {
  console.log("soundTil");
  document.querySelector("#sound_fra").classList.add("hide");
  document.querySelector("#sound_til").classList.remove("hide");
  document.querySelector("#baggrundsmusik").play();
}
