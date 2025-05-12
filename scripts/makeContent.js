gameList.forEach(site => {
    addGame(site);
})

// playlists.forEach(playlist => {
//     addPlaylists(playlist);
// })

audios.forEach(audio => {
    addAudio(audio);
})

// const get_audios_author_html = (audio, n) => {
//     return `<div class="authorPage__grid__audio music__grid__audioBlock audioBlock${audio.id}">
//                 <img src="${audio.imgLink}" alt="">
//                 <div class="music__grid__audioBlock__forHover"></div>
//                 <div class="authorPage__grid__audio__forClick music__grid__audioBlock__forClick" onclick="playAudio(${n}, '${audio.author}')"></div>
//                 <div class="authorPage__grid__audio__info music__grid__audioBlock__info">
//                     <div class="authorPage__grid__audio__info__name music__grid__audioBlock__info__name txt">${audio.name} <span>${audio.add_name}</span></div>
//                     <div class="authorPage__grid__audio__info__author music__grid__audioBlock__info__author txt">${audio.author}</div>
//                 </div>
//             </div>`
// };

// function addGame(siteInfo) {
//     if (siteInfo.imgLink == '') {
//         siteInfo.imgLink = "img/any.png";
//         siteInfo.color = "#00a1f5";
//     }

//     let blockSiteHTML = `<div class="container__site__forImg flex-center"><img class="imgSites" src="${siteInfo.imgLink}" alt=""></div> 
//                         <div class="container__site__nameSite txt">${siteInfo.name}</div>
//                         `;
//     let grid = document.getElementById("containerGrid");
//     let a = document.createElement('a');
//     a.classList.add("container__site");
//     a.innerHTML = blockSiteHTML;
//     a.href = siteInfo.link;
//     a.target = "_blank";
//     a.onmouseover = `show_cursor_light(${siteInfo.color})`;
//     a.onmouseout = `hidden_cursor_light()`;
//     console.log(a.onmouseout);
//     grid.append(a);
// }

function addGame(siteInfo) {
    if (siteInfo.imgLink == '') {
        siteInfo.imgLink = "img/any.png";
        siteInfo.color = "#00a1f5";
    }

    let a = `
            <a href="${siteInfo.link}" class="container__site" target="_blank" onmouseover="show_cursor_light('${siteInfo.color}')" onmouseout="hidden_cursor_light()">
            <div class="container__site__forImg flex-center"><img class="imgSites" src="${siteInfo.imgLink}" alt=""></div> 
            <div class="container__site__nameSite txt">${siteInfo.name}</div>
            <div class="container__site__forHover" style="background-color: ${siteInfo.color};"></div>
            </a>
            `;
    // let grid = document.getElementById("containerGrid");
    document.getElementById("containerGrid").innerHTML += a;
}

function addPlaylists(playlistInfo) {
    let blockSiteHTML = `<img class="playLists__grid__playlist__img" src="${playlistInfo.imgLink}" alt="">
                            <img class="playLists__grid__playlist__bgImg" src="${playlistInfo.imgLink}" alt="">
                            <div class="playLists__grid__playlist__name txt">${playlistInfo.name}</div>`;
    let grid = document.getElementById("playLists__grid");
    let a = document.createElement('a');
    a.classList.add("playLists__grid__playlist");
    a.innerHTML = blockSiteHTML;
    a.href = playlistInfo.link;
    a.target = "_blank";
    grid.append(a);
}

function makeAP(authorName) {
    let audioList = "";
    //console.log(get_audios_author(authorName))
    let n = 0;
    get_audios_author(authorName).forEach(audio => {
        audioList += get_audios_author_html(audio, n);
        n++;
    });

    document.querySelector('#AP_grid').innerHTML = audioList;
    
    let audio_block_active = document.querySelectorAll(class_audioBlock_now)[1];
    //console.log(audio_block_active);

    if (audio_block_active) {
        audio_block_active.classList.add('music__grid__audioBlock_active');
        //console.log(audio_block_active);
    }

    let author = authors.find(elem => elem.name == authorName);
    let avatar;

    if (author) {
        avatar = author.imgLink;
    }

    else {
        avatar = audios.toReversed().find(elem => elem.author == authorName).imgLink;
    }

    document.getElementById('authorName').innerText = authorName;
    document.getElementById('authorImg').src = avatar;
}

function addAudio(audioInfo) {
    if (audioInfo.imgLink == "") {
        audioInfo.imgLink = "img/audioImg/photo_2024-01-04_03-30-21.jpg";
    }
    if (!audioInfo.add_name) {
        audioInfo.add_name = "";
    }
    // let blockSiteHTML = `<img src="${audioInfo.imgLink}" alt="">
    //                         <div class="music__grid__audioBlock__forHover"></div>
    //                         <div class="music__grid__audioBlock__forClick" onclick="playAudio(${audioInfo.id}, 'all')"></div>
    //                         <div class="music__grid__audioBlock__info">
    //                             <div class="music__grid__audioBlock__info__name txt">${audioInfo.name} <span>${audioInfo.add_name}</span></div>
    //                             <div class="music__grid__audioBlock__info__author txt">${audioInfo.author}</div>
    //                         </div>`;
    // let blockSiteHTML = get_audio_html(audioInfo);
    // let grid = document.getElementById("music__grid");
    // let div = document.createElement('div');
    // div.classList.add("music__grid__audioBlock");
    // div.classList.add(`audioBlock${audioInfo.id}`);
    // div.innerHTML = blockSiteHTML;
    // grid.append(div);
    document.getElementById("music__grid").innerHTML += get_audio_html(audioInfo);
}

function addMusicplayer(audioInfo, author, num) {
    if (audioInfo.imgLink == "") {
        audioInfo.imgLink = "img/audioImg/photo_2024-01-04_03-30-21.jpg";
    }
    let grid = document.getElementById("musicPlayer");
    grid.innerHTML = "";
    if (!audioInfo.add_name) {
        audioInfo.add_name = "";
    }
    let blockSiteHTML = `<div onclick="openMusicPlayer()" id="block_imgAlbum"><img class = "musicPlayer__imgAlbum" src="${audioInfo.imgLink}" alt=""></div>
                            <div class="musicPlayer__bg">
                                <div class="musicPlayer__nameAudio txt">${audioInfo.name} <span>${audioInfo.add_name}</span></div>
                                <div class="musicPlayer__author txt" onclick="openAuthor('${audioInfo.author}')">${audioInfo.author}</div>
                                <div class="musicPlayer__interface">
                                    <div class="musicPlayer__interface__button musicPlayer__interface__button_leftArr" onclick="changeAudio(-1, '${author}')">
                                        <img src="img/icons/rArr.png" alt="">
                                    </div>
                                    <div class="musicPlayer__interface__button" onclick="playAudio(${num}, '${author}')">
                                        <img src="img/icons/play.png" alt="" id="icoPlayAudio">
                                    </div>
                                    <div class="musicPlayer__interface__button musicPlayer__interface__button_rightArr" onclick="changeAudio(1, '${author}')">
                                        <img src="img/icons/rArr.png" alt="">
                                    </div>
                                </div>
                                <div class="musicPlayer__rangeBox">
                                    <input type="range" id="rangeTrack" step="0.01" onchange="onchange_audioRange()">
                                </div>
                            </div>
                        `;
    
    let div = document.createElement('div');
    div.classList.add("musicPlayer");
    div.innerHTML = blockSiteHTML;
    grid.append(div);
}

function addMiniMusicPlayer(audioInfo, author, num) {
    if (audioInfo.imgLink == "") {
        audioInfo.imgLink = "img/audioImg/photo_2024-01-04_03-30-21.jpg";
    }

    if (!audioInfo.add_name) {
        audioInfo.add_name = "";
    }
    
    // let blockSiteHTML = get_mini_MP_html(audioInfo, nVolume, num, author);
    document.querySelector('#inner_mini_mp').innerHTML = get_mini_MP_html(audioInfo, nVolume, num, author);
}