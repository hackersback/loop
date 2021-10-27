

function k() {
  if (vault.paused) {
    vault.play();
    vault.loop = true;
    x.load();
  }
  else {
    vault.pause();
  }
}

var aryan = document.getElementById("kkr");

var bod = document.getElementById("d")


bod.addEventListener("keydown", move);

function move(e) {
  if (e.keyCode == 88) {
    k();
    aar();
  }
  else if (e.keyCode == 32) {
    k();
    aar();
  }

}




function aar() {
  aryan.classList.toggle("kf");
} 