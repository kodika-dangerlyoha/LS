const get_audios_author_html = (audio, n) => {
    return `<div class="authorPage__grid__audio music__grid__audioBlock audioBlock${audio.id}">
                <img src="${audio.imgLink}" alt="">
                <div class="music__grid__audioBlock__forHover"></div>
                <div class="authorPage__grid__audio__forClick music__grid__audioBlock__forClick" onclick="playAudio(${n}, '${audio.author}')"></div>
                <div class="authorPage__grid__audio__info music__grid__audioBlock__info">
                    <div class="authorPage__grid__audio__info__name music__grid__audioBlock__info__name txt">${audio.name} <span>${audio.add_name}</span></div>
                    <div class="authorPage__grid__audio__info__author music__grid__audioBlock__info__author txt">${audio.author}</div>
                </div>
            </div>`
};

// const get_mini_MP_html = (audioInfo, nVolume) => {
//     return `<div class="mini_musicPlayer__volumeRangeBlock">
//                 <input type="range" id="volumerange" value = "${nVolume}">
//             </div>
//             <div class="mini_musicPlayer__imgBlock" onclick="openMusicPlayer()">
//                 <img src="${audioInfo.imgLink}" alt="">
//             </div>
//             <div class="mini_musicPlayer__interface">
//                 <div class="mini_musicPlayer__interface__trackname txt">${audioInfo.name} <span>${audioInfo.add_name}</span> </div>
//                 <div class="mini_musicPlayer__interface__author txt" onclick="openAuthor('${audioInfo.author}')">${audioInfo.author}</div>
//             </div>`
// };

const get_mini_MP_html = (audioInfo, nVolume, num, author) => {
    return `<div class="mini_musicPlayer__volumeRangeBlock">
                <input type="range" id="volumerange" value = "${nVolume}">
            </div>
            <div class="mini_musicPlayer__imgBlock" onclick="openMusicPlayer()">
                <img src="${audioInfo.imgLink}" alt="">
            </div>
            <div class="mini_musicPlayer__interface">
                <div class="mini_musicPlayer__interface__title">
                    <div class="mini_musicPlayer__interface__author txt" onclick="openAuthor('${audioInfo.author}')">${audioInfo.author}</div>
                    <span> - </span>
                    <div class="mini_musicPlayer__interface__trackname txt">${audioInfo.name} <span>${audioInfo.add_name}</span> </div>
                </div>
                <div class="mini_musicPlayer__interface__buttons">
                    <div class="mini_musicPlayer__interface__button" onclick="playAudio(${num}, '${author}')">
                        <img src="img/icons/play.png" alt="" id="icoPlayAudio_mini">
                    </div>
                    <div class="mini_musicPlayer__interface__button mini_musicPlayer__interface__button_rightArr" onclick="changeAudio(1, '${author}')">
                        <img src="img/icons/rArr.png" alt="">
                    </div>
                </div>
            </div>`
};

const get_audio_html = (audioInfo) => {
    return `<div class="music__grid__audioBlock audioBlock${audioInfo.id}">
                <img src="${audioInfo.imgLink}" alt="">
                <div class="music__grid__audioBlock__forHover"></div>
                <div class="music__grid__audioBlock__forClick" onclick="playAudio(${audioInfo.id}, 'all')"></div>
                <div class="music__grid__audioBlock__info">
                    <div class="music__grid__audioBlock__info__name txt">${audioInfo.name} <span>${audioInfo.add_name}</span></div>
                    <div class="music__grid__audioBlock__info__author txt">${audioInfo.author}</div>
                </div>
            </div>`
};

const get_author_html = (info) => {
    return `<div class="authors__author authors__author${info.id}">
                <div class="authors__author__bg">
                    <img src="${info.banner_link}" alt="">
                    <div></div>
                </div>
                <div class="authors__author__inner">
                    <div class="authors__author__inner__link" onclick="openAuthor('${info.name}')"></div>
                    <div class="authors__author__inner__left">
                        <div class="authors__author__inner__avatar"><img src="${info.imgLink}" alt=""></div>
                        <div class="authors__author__inner__name txt">${info.name}</div>
                    </div>
                    <div class="authors__author__inner__right">
                        <button type="button" title="play" onclick="playAudio(0, '${info.name}')">
                            <img src="img/icons/play.png" alt="">
                        </button>
                    </div>
                </div>
            </div>`
};