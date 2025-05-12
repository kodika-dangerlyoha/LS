// let audios_now;

function get_audios_author(author) {
    if (author == "all") {
        return audios;
    }
    else if (author) {
        return audios.filter(audio => audio.author === author);
    }
}

function changeClasslistAudioBlocks(num) {
    document.querySelectorAll('.music__grid__audioBlock').forEach(elem => {
        elem.classList.remove('music__grid__audioBlock_active');
    })
    document.querySelectorAll(`.audioBlock${num}`).forEach(elem => {
        elem.classList.add('music__grid__audioBlock_active');
    })
    class_audioBlock_now = `.audioBlock${num}`;
    // document.querySelectorAll('.music__grid__audioBlock')[num].classList.add('music__grid__audioBlock_active');
}

function getAudioFile(num, author) {
    // let audio = audios_now[audios_now.findIndex(audio => audio.id == num)];
    let audio = get_audios_author(author)[num];
    console.log(audio);

    audioFile = new Audio(audio.file);
    addMusicplayer(audio, author);
    addMiniMusicPlayer(audio);
    audioFile.volume =  document.getElementById('volumerange').value / 100;
    document.querySelector('#bgImgAlbum').src = audio.imgLink;

    audioRange = document.getElementById('rangeTrack');
    audioRange.max = audioFile.duration;
    audioRange.value = 0;
}

function playAudio_animation(i) {
    if (i) {
        document.querySelector('.bgAlbum').style.filter = "grayscale(0)";
        document.querySelector('#block_imgAlbum').style.filter = "grayscale(0)";
        document.querySelector('#block_imgAlbum').style.transform = "scale(1)";
        document.querySelector('.musicPlayer__imgAlbum').style.boxShadow = "0 0 60px -20px rgba(0, 0, 0, 1)";
        return
    }

    document.querySelector('.bgAlbum').style.filter = "grayscale(1)";
    document.querySelector('#block_imgAlbum').style.filter = "grayscale(1)";
    document.querySelector('#block_imgAlbum').style.transform = "scale(0.98)";
    document.querySelector('.musicPlayer__imgAlbum').style.boxShadow = "0 0 30px 0px rgba(0, 0, 0, 0)";
}

function playAudio(num, author) {
    if (num != currnum) {
        audioFile.pause();
        getAudioFile(num, author);
        audioFile.play();
        playAudio_animation(true);
        document.title = `${audios[num].name} - ${audios[num].author}`;
        var favicon = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
        favicon.forEach(function(element) {
            element.setAttribute('href', audios[num].imgLink);
        });

        audioRange.max = audioFile.duration;

        audioPlaying = true;
        document.querySelector('#icoPlayAudio').src = "img/icons/pause.png";
        currnum = num;

        changeClasslistAudioBlocks(num);
    }
    else {
        if (audioPlaying) {
            audioFile.pause();
            audioPlaying = false;

            document.querySelector('#icoPlayAudio').src = "img/icons/play.png";
            playAudio_animation(false);
        }
        else {
            audioFile.play();
            audioPlaying = true;

            document.querySelector('#icoPlayAudio').src = "img/icons/pause.png";
            playAudio_animation(true);
        }
    }
}

getAudioFile(0, "all");

// for (let sec = 0; sec <= audioFile.duration; sec++) {
//     setTimeout(function (){
//         audioRange.value = audioFile.currentTime;
//     }, 1000)
// }

function changeAudio(i, author) {
    currnum += i;
    let audio = get_audios_author(author);
    if (currnum < 0) {
        playAudio(audio.length - 1, 'all');
    }
    else if (currnum > audio.length - 1) {
        playAudio(0, 'all');
    }
    else {
        audioFile.pause();
        getAudioFile(currnum, author);
        audioFile.play();
        document.title = `${audio[currnum].name} - ${audio[currnum].author}`;
        playAudio_animation(true);

        var favicon = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
        favicon.forEach(function(element) {
            element.setAttribute('href', audio[currnum].imgLink);
        });
    
        audioRange.max = audioFile.duration;
    
        audioPlaying = true;
        document.querySelector('#icoPlayAudio').src = "img/icons/pause.png";
    
        changeClasslistAudioBlocks(currnum);
    }
}

// document.querySelector('#volumerange').addEventListener("change", function() {
//     console.log("------------------------------------");
//     audioFile.currentTime = this.value;
//     console.log(this.value);
//     console.log(audioFile.currentTime);
//     console.log("------------------------------------");
// });

// document.getElementById('volumerange').addEventListener("change", function() {
//     console.log("------------------------------")
//     audioFile.volume = this.value / 100;
// });

// document.getElementById('volumerange').onchange = function(){
//     audioFile.volume = document.getElementById('volumerange').value / 100;
// }

function checkVolume() {
    nVolume = document.getElementById('volumerange').value;
    audioFile.volume = document.getElementById('volumerange').value / 100;
}

setInterval(checkVolume, 2);

function onchange_audioRange() {
    audioFile.currentTime = audioRange.value;
    checkDuration();
}

function checkDuration() {
    audioRange.max = audioFile.duration;
    audioRange.value = audioFile.currentTime;

    if (audioFile.currentTime == audioFile.duration) {
        changeAudio(1, 'all');
    }
}

setInterval(checkDuration, 1000);



// console.log(audioRange);
// console.log(audioRange.value);