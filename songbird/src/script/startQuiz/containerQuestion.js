import birdsData from "./birdsData";

const wrapper = document.createElement("div");
const containerQuestion = document.createElement("div");
const imageQuestion = document.createElement("img");
const containerQuestionMusic = document.createElement("div");
const nameGuessingBird = document.createElement("p");
const separator = document.createElement("div");
const player = document.createElement("div");
const playerButton = document.createElement("button");
const progress = document.createElement("div");
const timeContainer = document.createElement("div");
const progressBar = document.createElement("input");
const volumeImage = document.createElement("button");
const sound = document.createElement("input");
const volumeSound = document.createElement("div");
const currentTime = document.createElement("div");
const separatorTime = document.createElement("div");
const durationTime = document.createElement("div");

function createElementHtml (nameElement, nameClass, elementContainer) {

  nameElement.classList.add(nameClass);

  elementContainer.append(nameElement);
}

createElementHtml (containerQuestion, "container-question", wrapper);

createElementHtml (imageQuestion, "image-question", containerQuestion);
// console.log(birdsData[playNum].image)

imageQuestion.src = birdsData[0][0].image;

createElementHtml (containerQuestionMusic, "container-question-music", containerQuestion);

createElementHtml (nameGuessingBird, "name-guessing-bird", containerQuestionMusic);

nameGuessingBird.textContent = "*****";

createElementHtml (separator, "separator", containerQuestionMusic);

createElementHtml (player, "player", containerQuestionMusic);

// createElementHtml (playerButton, "player", player);

createElementHtml (playerButton, "play", player);

createElementHtml (progress, "progress", player);

createElementHtml (progressBar, "progress-bar", progress);
progressBar.type = "range";
progressBar.min = '0';
progressBar.max = '40';
progressBar.value = '0';

// createElementHtml (volumeImage, "volume-image", progress);

// createElementHtml (sound, "progress-bar", progress);
// sound.type = "range";
// sound.min = '0';
// sound.max = '100';
// sound.value = '40';

createElementHtml (timeContainer, "time-container", progress);

createElementHtml (currentTime, "current-time", timeContainer);
currentTime.textContent = "00:00";

// createElementHtml (separatorTime, "separator-time", timeContainer);
// separatorTime.textContent = "/";

createElementHtml (durationTime, "duration-time", timeContainer);
durationTime.textContent = "00:00";


createElementHtml (volumeSound, "volume-sound", containerQuestionMusic);

createElementHtml (volumeImage, "volume-image", volumeSound);

createElementHtml (sound, "sound", volumeSound);
sound.type = "range";
sound.min = '0';
sound.max = '100';
sound.value = '40';

// const audio = new Audio();
// audio.src = birdsData.audio;
// audio.play();
let isPlay = false;

const audio = new Audio();

// let audioActive = "";
let playNum = 0;

// Play - Pause

function playAudio() {
  if (isPlay === false) {
    // console.log(birdsData[playNum][playNum].audio);
    audio.src = birdsData[playNum][playNum].audio;
    audio.currentTime = 0;

    isPlay = true;

    audio.play();

    // audioActive = playList[playNum].title;
  } else {
    audio.pause();

    isPlay = false;
  }

  playerButton.classList.toggle("pause");

  showDurationTime();

  setInterval(progressCurrentTime, 100);

  // activeAudio();

  // playNow();

  // itemActive();
}

playerButton.addEventListener("click", playAudio);

// let playNum = 0;

// show Duration Time

function showDurationTime() {
  let audioLength = birdsData[playNum][playNum].duration;
  let audioTime = Math.round(audio.currentTime);

  progressBar.style.width = (audioTime * 100) / audioLength + "%";

  durationTime.textContent = audioLength;
}

// progress Current Time

function progressCurrentTime() {
  progressBar.ontimeupdate = (audio.currentTime / audio.duration) * 100 + "%";

  currentTime.textContent = formatTime(audio.currentTime);
}

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

// click progress Current Time on progressBar

progressBar.addEventListener(
  "click",
  (e) => {
    const timelineWidth = window.getComputedStyle(progressBar).width;
    const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeToSeek;
  },
  false
);

// progress Bar play

audio.ontimeupdate = function () {
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;
};

// item Active

// function itemActive() {
//   for (let i = 0; i < playItems.length; i++) {
//     if (playList[playNum].title == playItems[i].textContent) {
//       playItems[i].classList.add("active");
//       playItems[i].classList.add("pause-item");
//     } else {
//       playItems[i].classList.remove("active");
//       playItems[i].classList.remove("pause-item");
//     }
//   }
// }

// audio volume

sound.addEventListener(
  "click",
  (e) => {
    const volumeLineWidth = window.getComputedStyle(sound).width;
    const volumeToSeek = e.offsetX / parseInt(volumeLineWidth);
    audio.volume = volumeToSeek;
  },
  false
);

// on or off the sound

function onSound() {
  if (audio.volume > 0) {
    audio.volume = 0;
    sound.value = 0;
  } else {
    audio.volume = 0.4;
    sound.value = 40;
  }

  volumeImage.classList.toggle("volume-image-off");
}

volumeImage.addEventListener("click", onSound);