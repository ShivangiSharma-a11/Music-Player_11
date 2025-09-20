let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

const audio = document.getElementById("song");
const volumeControl = document.getElementById("volume-control");
volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

let songInfo = [
  {
    songName: "Khalasi",
    singerName: "Aditya Gadhvi",
    albumName: "Coke Studio-Bharat",
  },
  { songName: "Raabta", singerName: "Arijit Singh", albumName: "Raabta" },
  {
    songName: "Channa Mereya",
    singerName: "Arijit Singh",
    albumName: "Ae Dil Hai Mushkil",
  },
];

let currentSongIndex = 0;

document.getElementById("song-name").innerHTML =
  songInfo[currentSongIndex].songName;
document.getElementById("singer-name").innerHTML =
  songInfo[currentSongIndex].singerName;
document.getElementById("album-name").innerHTML =
  songInfo[currentSongIndex].albumName;

function nextSong() {
  currentSongIndex++;
  if (currentSongIndex >= songInfo.length) currentSongIndex = 0;
  updateSongInfo();
}

function previousSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) currentSongIndex = songInfo.length - 1;
  updateSongInfo();
}

function updateSongInfo() {
  document.getElementById("song-name").innerHTML =
    songInfo[currentSongIndex].songName;
  document.getElementById("singer-name").innerHTML =
    songInfo[currentSongIndex].singerName;
  document.getElementById("album-name").innerHTML =
    songInfo[currentSongIndex].albumName;
}
