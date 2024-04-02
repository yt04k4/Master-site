let dino = document.getElementById('dino');
let cactus = document.getElementById('cactus');
let bg = document.getElementById('bg')

document.addEventListener("click", function(add) {
  jump();
})
 cactus.classList.add("CactusMove");
 dino.classList.add("dino-stand");
 bg.classList.add("bg_move");
function jump(){
  if (dino.classList != "jump"){
    dino.classList.add("jump");
  }

setTimeout (function(){
  dino.classList.remove("jump");
}, 600)
}
let inAlive = setInterval(function() {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  console.log(dinoTop);
  console.log(cactusLeft);
  if (cactusLeft < 78 && cactusLeft > 15 && dinoTop >= -102){
    cactus.classList.remove("CactusMove");
    bg.classList.remove("dg_move");
    alert("gameover");
    cactus.classList.add("CactusMove");
    bg.classList.add("dg_move");
  }
}, 10)
