import birdsData from "./birdsData";
import defaultImage from '../../assets/default-image.png';
// import audioRight from "../../assets/right.mp3";


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

const buttonNext = document.createElement("button");

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

imageQuestion.src = defaultImage;

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

let questionNumber = 0;

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let playNum = 0;

// Play - Pause

async function playAudio() {
  
  if (isPlay === false) {
    audio.currentTime = 0;

    if (isPlayInfo = true) {
      isPlayInfo = false;
      myAudio.pause();
      playerButtonInfo.classList.remove("pause");
    }

    isPlay = true;
    

    await audio.play();
  

  } else {
    audio.pause();

    isPlay = false;
  }

  playerButton.classList.toggle("pause");

  showDurationTime();

  setInterval(progressCurrentTime, 100);
  
}

playerButton.addEventListener("click", playAudio);

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

// let questionNumber = 0;

function seeNameList() {
  for (let i = 0; i < birdsData[questionNumber].length; i++) {
    
    const input = document.createElement("input");

    input.type = "radio";

    input.id = birdsData[questionNumber][i].name;

    input.classList.add("choice-input");

    choiceForm.append(input);
    
    const label = document.createElement("label");

    label.classList.add("choice-label");

    label.setAttribute('for', birdsData[questionNumber][i].name);

    label.textContent = birdsData[questionNumber][i].name;

    choiceForm.append(label);

  }
}
seeNameList();

function fistQuestionAudio(){
  
  const res = birdsData[questionNumber];
  const data = res[getRandomNum(0, res.length)];
  audio.src = data.audio;
  questionNumber++;

  compareNameBird(data);
  itemOfQuestionStyle();
}
fistQuestionAudio();

function itemOfQuestionStyle() {
  const itemQuestions = document.querySelectorAll(".item-questions");

  itemQuestions.forEach( (item, index) => {

    item.classList.remove("item-questions-active");

    if(questionNumber - 1 === index) {
      item.classList.add("item-questions-active");
    }
    
    // console.log(index)
  })
}

// show Duration Time

createElementHtml (choiceInfoBird, "choice-info", choice);
choiceInfoBird.textContent = 'Послушайте плеер. Выберите птицу из списка';

createElementHtml (buttonNext, "button-next", wrapper);

buttonNext.textContent = "Next";
buttonNext.style.pointerEvents = 'none';

function getQuestion() {
  const res = birdsData[questionNumber];
  const data = res[getRandomNum(0, res.length)];
  const questionAudio = data.audio;
  audio.src = questionAudio;

  imageQuestion.src = defaultImage;
  nameGuessingBird.textContent = "*****";
  buttonNext.classList.remove("button-next-active");
  buttonNext.style.pointerEvents = 'none';
  choiceInfoBird.textContent = 'Послушайте плеер. Выберите птицу из списка';
  audio.pause();
  isPlay = false;
  playerButton.classList.remove("pause");
  myAudio.pause();
  isPlayInfo = false;

  choiceForm.textContent = '';
  seeNameList();
  
  nextQuestion();
  compareNameBird(data);
  itemOfQuestionStyle();
}

// const audioRightI = new Audio(audioRight);



const myAudio = new Audio();
let isPlayInfo = false;

const audioNew = new Audio();

function compareNameBird(data){
  
  const labels = document.querySelectorAll(".choice-input");
  labels.forEach( element => {
    element.addEventListener("click", () => {
      audioNew.src = './right.mp3';
      audioNew.play();
      myAudio.pause();
      isPlayInfo = false;
      playerButtonInfo.classList.remove("pause");
      choiceInfoBird.textContent = '';
      showInfoBird(element, data);
      if(data.name === element.id) {
        audioNew.src = './wrong.mp3';
        audioNew.play();
        element.classList.add('choice-input-active');
        imageQuestion.src = data.image;
        nameGuessingBird.textContent = data.name;
        audio.pause();
        isPlay = false;
        playerButton.classList.remove("pause");
        buttonNext.classList.add("button-next-active");
        buttonNext.style.pointerEvents = '';

        // audioRightI.play();
      }
      
      playerButtonInfo.classList.remove("pause");
    });
  });
}

function showInfoBird(element, data) {

birdsData[questionNumber-1].forEach(elem => {

  if(elem.name ==  element.id) {
    createElementHtml (containerQuestionInfo, "container-question-info", choiceInfoBird);

    createElementHtml (imageQuestionInfo, "image-question-info", containerQuestionInfo);

    imageQuestionInfo.src = elem.image;

    createElementHtml (containerQuestionMusicInfo, "container-question-music-info", containerQuestionInfo);

    createElementHtml (nameGuessingBirdInfo, "name-guessing-bird-info", containerQuestionMusicInfo);

    nameGuessingBirdInfo.textContent = elem.name;

    createElementHtml (separatorInfo, "separator-info", containerQuestionMusicInfo);

    createElementHtml (speciesBirdInfo, "species-bird-info", containerQuestionMusicInfo);

    speciesBirdInfo.textContent = elem.species;

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

  async function playAudioInfo() {
    if (isPlayInfo === false) {
      myAudio.src = elem.audio;
      myAudio.currentTime = 0;

      if (isPlay = true) {
        isPlay = false;
        audio.pause();
        playerButton.classList.remove("pause");
      }

      isPlayInfo = true;

      await myAudio.play();

    } else {
      isPlayInfo = false;

      myAudio.pause();
    }

    playerButtonInfo.classList.toggle("pause");
  
    showDurationTimeInfo();

    setInterval(progressCurrentTimeInfo, 100);
  }

  playerButtonInfo.addEventListener("click", playAudioInfo);

// show Duration Time

  function showDurationTimeInfo() {
    let myAudioLength = elem.duration;
    let myAudioTime = Math.round(myAudio.currentTime);

    progressBarInfo.style.width = (myAudioTime * 100) / myAudioLength + "%";

    durationTimeInfo.textContent = myAudioLength;
  }

// progress Current Time

  function progressCurrentTimeInfo() {
    progressBarInfo.ontimeupdate = (myAudio.currentTime / myAudio.duration) * 100 + "%";

    currentTimeInfo.textContent = formatTime(myAudio.currentTime);
  }

// click progress Current Time on progressBar

  progressBarInfo.addEventListener(
    "click",
    (e) => {
      const timelineWidth = window.getComputedStyle(progressBar).width;
      const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * myAudio.duration;
      myAudio.currentTime = timeToSeek;
    },
    false
  );

// progress Bar play

myAudio.ontimeupdate = function () {
    progressBarInfo.max = myAudio.duration;
    progressBarInfo.value = myAudio.currentTime;
  };

// audio volume

  soundInfo.addEventListener(
    "click",
    (e) => {
      const volumeLineWidth = window.getComputedStyle(soundInfo).width;
      const volumeToSeek = e.offsetX / parseInt(volumeLineWidth);
      myAudio.volume = volumeToSeek;
    },
    false
  );

// on or off the sound

  function onSoundInfo() {
    if (myAudio.volume > 0) {
      myAudio.volume = 0;
      soundInfo.value = 0;
    } else {
      myAudio.volume = 0.4;
      soundInfo.value = 40;
    }

    volumeImageInfo.classList.toggle("volume-image-off");
  }

  volumeImageInfo.addEventListener("click", onSoundInfo);

  createElementHtml (textInfo, "text-info", choiceInfoBird);

  textInfo.textContent = elem.description;
  }
})

  
  
}

function nextQuestion() {
  questionNumber++;
  if (questionNumber === 6) {
    // questionNumber = 0;
    buttonNext.textContent = '';
    const link = document.createElement("a");
    
    link.href = "results.html";
    link.textContent = "Next";
  
    createElementHtml (link, "link", buttonNext);


  }
}

buttonNext.addEventListener("click", getQuestion);

const audioN = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
// const buttons = document.querySelectorAll(".kauvec_adelon");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//   audio.play();
//   });
// });