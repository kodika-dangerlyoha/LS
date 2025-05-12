window.addEventListener('scroll', function() {
    scrollTop = window.pageYOffset;
    if (scrollTop == 0) {
        document.getElementById('headerbgBlur').style.opacity = "0";
        document.getElementById('header').style.boxShadow = "0 0 40px -20px rgba(0, 0, 0, 0)";
    }
    else {
        document.getElementById('headerbgBlur').style.opacity = "1";
        document.getElementById('header').style.boxShadow = "0 0 40px -20px rgba(0, 0, 0, 1)";
    }
});

function openPage(n, namePage) {
    if (document.querySelectorAll('.navs__nav')[n] != document.querySelector('.navs__nav_active')) {
        document.querySelector('.navs__nav_active').classList.remove('navs__nav_active');
        document.querySelectorAll('.navs__nav')[n].classList.add('navs__nav_active');
    }

    document.querySelectorAll('.page').forEach(elem => {
        elem.style.display = "none";
    })

    if (namePage == "containerGrid") {
        displayMode = "grid";
    }

    document.querySelector(`#${namePage}`).style.display = displayMode;
    APopen = false;
}

function openMusicPlayer() {
    if (MPopen) {
        document.querySelector('#header').style.opacity = "1";
        document.querySelector('.bgAlbum').style.opacity = "0";
        document.querySelector('.mainBlock').classList.remove('mainBlock_hideBG');
        document.getElementById('musicPlayer').style.display = "none";
        openPage(1, 'musicBox');

        MPopen = false;
    }
    else {
        document.querySelectorAll('.page').forEach(elem => {
            elem.style.display = "none";
        })
        document.querySelector('#header').style.opacity = "0";
        document.querySelector('.bgAlbum').style.opacity = "0.3";
        document.getElementById('musicPlayer').style.display = "flex";
        document.querySelector('.mainBlock').classList.add('mainBlock_hideBG');

        MPopen = true;
        APopen = false;
    }
}

function openPlaylists() {
    if (checkOpenPlaylists == true) {
        // document.querySelector(".music__grid").style.gridTemplateColumns = "repeat(3, minmax(0px, 1fr))";
        document.getElementById("h2_playlists").style.textAlign = "center";
        document.getElementById('playLists__grid').style.display = "none";
        document.getElementById('h2_playlists').style.marginBottom = "0px";
        checkOpenPlaylists = false;
    }
    else {
        // document.querySelector(".music__grid").style.gridTemplateColumns = "repeat(2, minmax(0px, 1fr))";
        document.getElementById("h2_playlists").style.textAlign = "left";
        document.getElementById('playLists__grid').style.display = "grid";
        document.getElementById('h2_playlists').style.marginBottom = "30px";
        checkOpenPlaylists = true;
    }
}

function openMusic() {
    if (checkOpenMusic == true) {
        document.getElementById('music__grid').style.display = "none";
        document.getElementById('h2_music').style.marginBottom = "0px";
        checkOpenMusic = false;
    }
    else {
        document.getElementById('music__grid').style.display = "grid";
        document.getElementById('h2_music').style.marginBottom = "30px";
        checkOpenMusic = true;
    }
}



function openAuthor(authorName) {
    if (APopen) {
        document.getElementById('authorPlaylist').style.display = "none";
        openPage(1, 'musicBox');

        APopen = false;
    }
    else {
        makeAP(authorName);

        document.querySelector('#header').style.opacity = "1";
        document.querySelector('.bgAlbum').style.opacity = "0";
        document.getElementById('musicPlayer').style.display = "none";
        openPage(1, 'musicBox');

        MPopen = false;

        document.querySelectorAll('.page').forEach(elem => {
            elem.style.display = "none";
        })
        
        document.getElementById('authorPlaylist').style.display = "flex";

        APopen = true;
    }
}

openPage(0, 'containerGrid');