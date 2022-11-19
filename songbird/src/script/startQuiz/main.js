import birdsData from "./birdsData";

const main = document.createElement("main");
const listOfQuestions = document.createElement("div");
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
const durationTime = document.createElement("div");
const choice = document.createElement("div");
const choiceForm = document.createElement("form");

const choiceInfoBird = document.createElement("div");

const containerQuestionInfo = document.createElement("div");
const imageQuestionInfo = document.createElement("img");
const containerQuestionMusicInfo = document.createElement("div");
const nameGuessingBirdInfo = document.createElement("p");
const separatorInfo = document.createElement("div");
const speciesBirdInfo = document.createElement("p");
const separatorSpeciesInfo = document.createElement("div");
const playerInfo = document.createElement("div");
const playerButtonInfo = document.createElement("button");
const progressInfo = document.createElement("div");
const timeContainerInfo = document.createElement("div");
const progressBarInfo = document.createElement("input");
const volumeImageInfo = document.createElement("button");
const soundInfo = document.createElement("input");
const volumeSoundInfo = document.createElement("div");
const currentTimeInfo = document.createElement("div");
const durationTimeInfo = document.createElement("div");
const textInfo = document.createElement("p");


function createElementHtml (nameElement, nameClass, elementContainer) {

  nameElement.classList.add(nameClass);

  elementContainer.append(nameElement);
}

createElementHtml (main, "mainQuiz", document.body);

createElementHtml (wrapper, "wrapper", main);

createElementHtml (listOfQuestions, "list-questions", wrapper);

const questions = ["Разминка", "Воробьиные", "Лесные птицы", "Певчие птицы", "Хищные птицы", "Морские птицы"];

questions.forEach(element => {
  const itemOfQuestion = document.createElement("p");
  
  createElementHtml (itemOfQuestion, "item-questions", listOfQuestions);

  itemOfQuestion.textContent = element;
  
});


createElementHtml (containerQuestion, "container-question", wrapper);

createElementHtml (imageQuestion, "image-question", containerQuestion);

imageQuestion.src = birdsData[0][0].image;

createElementHtml (containerQuestionMusic, "container-question-music", containerQuestion);

createElementHtml (nameGuessingBird, "name-guessing-bird", containerQuestionMusic);

nameGuessingBird.textContent = "*****";

createElementHtml (separator, "separator", containerQuestionMusic);

createElementHtml (player, "player", containerQuestionMusic);

createElementHtml (playerButton, "play", player);

createElementHtml (progress, "progress", player);

createElementHtml (progressBar, "progress-bar", progress);
progressBar.type = "range";
progressBar.min = '0';
progressBar.max = '40';
progressBar.value = '0';

createElementHtml (timeContainer, "time-container", progress);

createElementHtml (currentTime, "current-time", timeContainer);
currentTime.textContent = "00:00";

createElementHtml (durationTime, "duration-time", timeContainer);
durationTime.textContent = "00:00";


createElementHtml (volumeSound, "volume-sound", containerQuestionMusic);

createElementHtml (volumeImage, "volume-image", volumeSound);

createElementHtml (sound, "sound", volumeSound);
sound.type = "range";
sound.min = '0';
sound.max = '100';
sound.value = '40';

let isPlay = false;

const audio = new Audio();


let playNum = 0;

// Play - Pause

function playAudio() {
  if (isPlay === false) {
    audio.src = birdsData[playNum][playNum].audio;
    audio.currentTime = 0;

    isPlay = true;

    audio.play();

  } else {
    audio.pause();

    isPlay = false;
  }

  playerButton.classList.toggle("pause");

  showDurationTime();

  setInterval(progressCurrentTime, 100);
}

playerButton.addEventListener("click", playAudio);

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


createElementHtml (choice, "choice", wrapper);

createElementHtml (choiceForm, "choice-form", choice);


function seeNameList() {
  for (let i = 0; i < birdsData[0].length; i++) {
    
    const input = document.createElement("input");

    input.type = "radio";

    input.id = birdsData[0][i].name;

    input.classList.add("choice-input");

    choiceForm.append(input);
    
    const label = document.createElement("label");

    label.classList.add("choice-label");

    label.setAttribute('for', birdsData[0][i].name);

    label.textContent = birdsData[0][i].name;

    choiceForm.append(label);

  }
}
seeNameList();

createElementHtml (choiceInfoBird, "choice-info", choice);

createElementHtml (containerQuestionInfo, "container-question-info", choiceInfoBird);

createElementHtml (imageQuestionInfo, "image-question-info", containerQuestionInfo);

imageQuestionInfo.src = birdsData[0][0].image;

createElementHtml (containerQuestionMusicInfo, "container-question-music-info", containerQuestionInfo);

createElementHtml (nameGuessingBirdInfo, "name-guessing-bird-info", containerQuestionMusicInfo);

nameGuessingBirdInfo.textContent = birdsData[0][0].name;

createElementHtml (separatorInfo, "separator-info", containerQuestionMusicInfo);

createElementHtml (speciesBirdInfo, "species-bird-info", containerQuestionMusicInfo);

speciesBirdInfo.textContent = birdsData[0][0].species;

createElementHtml (separatorSpeciesInfo, "separator-info", containerQuestionMusicInfo);

createElementHtml (playerInfo, "player", containerQuestionMusicInfo);

createElementHtml (playerButtonInfo, "play-info", playerInfo);

createElementHtml (progressInfo, "progress", playerInfo);

createElementHtml (progressBarInfo, "progress-bar-info", progressInfo);
progressBarInfo.type = "range";
progressBarInfo.min = '0';
progressBarInfo.max = '40';
progressBarInfo.value = '0';

createElementHtml (timeContainerInfo, "time-container", progressInfo);

createElementHtml (currentTimeInfo, "current-time-info", timeContainerInfo);
currentTimeInfo.textContent = "00:00";

createElementHtml (durationTimeInfo, "duration-time-info", timeContainerInfo);
durationTimeInfo.textContent = "00:00";


createElementHtml (volumeSoundInfo, "volume-sound", containerQuestionMusicInfo);

createElementHtml (volumeImageInfo, "volume-image-info", volumeSoundInfo);

createElementHtml (soundInfo, "sound-info", volumeSoundInfo);
soundInfo.type = "range";
soundInfo.min = '0';
soundInfo.max = '100';
soundInfo.value = '40';

// Play - Pause

function playAudioInfo() {
  if (isPlay === false) {
    audio.src = birdsData[playNum][playNum].audio;
    audio.currentTime = 0;

    isPlay = true;

    audio.play();

  } else {
    audio.pause();

    isPlay = false;
  }

  playerButtonInfo.classList.toggle("pause");

  showDurationTimeInfo();

  setInterval(progressCurrentTimeInfo, 100);
}

playerButtonInfo.addEventListener("click", playAudioInfo);

// show Duration Time

function showDurationTimeInfo() {
  let audioLength = birdsData[playNum][playNum].duration;
  let audioTime = Math.round(audio.currentTime);

  progressBarInfo.style.width = (audioTime * 100) / audioLength + "%";

  durationTimeInfo.textContent = audioLength;
}

// progress Current Time

function progressCurrentTimeInfo() {
  progressBarInfo.ontimeupdate = (audio.currentTime / audio.duration) * 100 + "%";

  currentTimeInfo.textContent = formatTime(audio.currentTime);
}

// click progress Current Time on progressBar

progressBarInfo.addEventListener(
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
  progressBarInfo.max = audio.duration;
  progressBarInfo.value = audio.currentTime;
};

// audio volume

soundInfo.addEventListener(
  "click",
  (e) => {
    const volumeLineWidth = window.getComputedStyle(sound).width;
    const volumeToSeek = e.offsetX / parseInt(volumeLineWidth);
    audio.volume = volumeToSeek;
  },
  false
);

// on or off the sound

function onSoundInfo() {
  if (audio.volume > 0) {
    audio.volume = 0;
    sound.value = 0;
  } else {
    audio.volume = 0.4;
    sound.value = 40;
  }

  volumeImageInfo.classList.toggle("volume-image-off");
}

volumeImageInfo.addEventListener("click", onSoundInfo);

createElementHtml (textInfo, "text-info", choiceInfoBird);

textInfo.textContent = birdsData[playNum][playNum].description;
