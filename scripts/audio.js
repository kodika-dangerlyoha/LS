// let audios_now;

let playlist = 'all';

function get_audios_author(author) {
    if (author == "all") {
        return audios;
    }
    else if (author) {
        return audios.filter(audio => audio.author == author);
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

    audioFile = new Audio(audio.file);
    addMusicplayer(audio, author, num);
    addMiniMusicPlayer(audio, author, num);
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

function play_new_audio(num, author) {
    audioFile.pause();
    getAudioFile(num, author);
    audioFile.play();
    playAudio_animation(true);
    const audio = get_audios_author(author)[num];
    playlist = author;
    document.title = `${audio.name} - ${audio.author}`;
    var favicon = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
    favicon.forEach(function(element) {
        element.setAttribute('href', audio.imgLink);
    });

    audioRange.max = audioFile.duration;

    audioPlaying = true;
    document.querySelector('#icoPlayAudio').src = "img/icons/pause.png";
    document.querySelector('#icoPlayAudio_mini').src = "img/icons/pause.png";
    currnum = num;
    changeClasslistAudioBlocks(audio.id);
}

function playAudio(num, author) {
    if (num != currnum) {
        // audioFile.pause();
        // getAudioFile(num, author);
        // audioFile.play();
        // playAudio_animation(true);
        // const audio = get_audios_author(author)[num];
        // playlist = author;
        // document.title = `${audio.name} - ${audio.author}`;
        // var favicon = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
        // favicon.forEach(function(element) {
        //     element.setAttribute('href', audio.imgLink);
        // });

        // audioRange.max = audioFile.duration;

        // audioPlaying = true;
        // document.querySelector('#icoPlayAudio').src = "img/icons/pause.png";
        // document.querySelector('#icoPlayAudio_mini').src = "img/icons/pause.png";
        // currnum = num;
        // changeClasslistAudioBlocks(audio.id);
        play_new_audio(num, author);
    }
    else if (playlist == author) {
        //else {
            if (audioPlaying) {
                audioFile.pause();
                audioPlaying = false;
    
                document.querySelector('#icoPlayAudio').src = "img/icons/play.png";
                document.querySelector('#icoPlayAudio_mini').src = "img/icons/play.png";
                playAudio_animation(false);
            }
            else {
                audioFile.play();
                audioPlaying = true;
    
                document.querySelector('#icoPlayAudio').src = "img/icons/pause.png";
                document.querySelector('#icoPlayAudio_mini').src = "img/icons/pause.png";
                playAudio_animation(true);
            }
        //}
    }
    else {
        play_new_audio(num, author);
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
    let audios = get_audios_author(author);
    if (currnum < 0) {
        playAudio(audios.length - 1, playlist);
    }
    else if (currnum > audios.length - 1) {
        playAudio(0, playlist);
    }
    else {
        audioFile.pause();
        getAudioFile(currnum, author);
        audioFile.play();
        document.title = `${audios[currnum].name} - ${audios[currnum].author}`;
        playAudio_animation(true);

        var favicon = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
        favicon.forEach(function(element) {
            element.setAttribute('href', audios[currnum].imgLink);
        });
    
        audioRange.max = audioFile.duration;
    
        audioPlaying = true;
        document.querySelector('#icoPlayAudio').src = "img/icons/pause.png";
        document.querySelector('#icoPlayAudio_mini').src = "img/icons/pause.png";
    
        changeClasslistAudioBlocks(audios[currnum].id);
    }
}

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
        changeAudio(1, playlist);
    }
}

setInterval(checkDuration, 1000);