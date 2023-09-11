const h2 = documnet.createElement("h2");
h2.textCoontent = "This content added by JavaScript";
document.querySelector("bod").appendChild(h2);
function showDropdown() {
  document.getElementById("dropdown").classList.add("show")
}
var aduioPlayer =
document.getElementById("audioPlayer");

function playSong() {
  aduioPlayer.contentWindow.postMessage('play', '*');
}
function pauseSong(){
  aduioPlayer.contentWindow.postMessage('pause', '*');
}
document.querySelector('.hover-play').addEventListener('mouseover', playsong);
document.querySelector('.hover-play').addEventListener('mouseout', pauseSong);

