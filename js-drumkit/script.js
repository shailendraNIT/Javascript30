const removeTransition = (e) => {
  console.log("transitionEnd");

  if (e.propertyName !== "transform") return;
  console.log("remo");
  e.target.classList.remove("playing");
};

const playAudio = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  if (!audio) return;

  const key = document.querySelector(`div[data-key="${e.code}"]`);
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach((key) => {
  console.log("key", key);
  return key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playAudio);
