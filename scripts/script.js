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
        document.querySelector('.bgAlbum').style.opacity = "0.1";
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

function copy_code() {
    let value_for_copy = document.querySelector('#code').textContent;
    let code_color = document.querySelector('#code_inf');
    navigator.clipboard.writeText(value_for_copy)
    .then(() => {
        console.log('Скопировано', value_for_copy);
        code_color.style.backgroundColor = "#23d981";
        if (value_for_copy == undefined || value_for_copy == "undefined") {
            code_color.style.backgroundColor = "rgb(255, 0, 0)";
        } 
        else {
            update_audios_list();
        }
    })
    .catch(error => {
        console.error(`Текст не скопирован ${error}`);
        code_color.style.backgroundColor = "rgb(255, 0, 0)";
    })

    code_color.style.display = "none";
    setTimeout(function() {
        code_color.style.display = "block";
    }, 1)
}

function open_add_song() {
    let add_song = document.querySelector('#add_song_global');
    document.querySelector('#code_inf').style.backgroundColor = "rgba(255, 255, 255, 0)";
    if (!document.querySelector('.addSong_open')) {
        add_song.style.display = "flex";
        setTimeout(function() {
            add_song.classList.add('addSong_open');
        }, 1)
        document.body.style.overflow = "hidden";
        return
    }

    add_song.classList.remove('addSong_open');
    document.body.style.overflow = "auto";
    setTimeout(function() {
        add_song.style.display = "none";
    }, 501)
}

setTimeout(function() {
    document.querySelector('#forLoading').style.opacity = "0";
}, 1000)

setTimeout(function() {
    document.querySelector('#forLoading').style.display = "none";
}, 1600)


openPage(0, 'containerGrid');