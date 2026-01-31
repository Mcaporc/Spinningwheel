let btn = document.getElementById("bouton");
let roue = document.getElementById("roue");
let troll = document.getElementById("gorilla")
let spinning = false; // empêche de cliquer pendant la rotation
let currentRotation = 0; // mémorise la rotation précédente

btn.addEventListener("click", () => {
  if (spinning) return; // ignore les clics pendant la rotation
  spinning = true;

  // Choisis un nombre de tours + un angle aléatoire
  let tours = Math.floor(Math.random() * 3) + 3; // 3 à 5 tours
  let angleFinal = Math.floor(Math.random() * 360); // angle aléatoire
  let rotation = currentRotation + tours * 360 + angleFinal;

  roue.style.transform = `rotate(${rotation}deg)`;
  currentRotation = rotation; // mémorise l'angle final

  setTimeout(() => {
    spinning = false;
    troll.style.display = "block";
  }, 6000);
});
