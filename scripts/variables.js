// ---------- script -------------
let displayMode = "block";
let scrollTop = window.pageYOffset;
let MPopen = false;
let APopen = false;
let checkOpenPlaylists = true;
let checkOpenMusic = true;

document.getElementById('music__grid').style.display = "grid";
// document.getElementById('playLists__grid').style.display = "grid";

// ---------- audio --------------
let audioPlaying = false;
let audioFile;
let currnum;
let audioRange;
let volumerange = document.getElementById('volumerange');
let nVolume;
let class_audioBlock_now;

let div = document.createElement('div');
div.classList.add("authorPage");