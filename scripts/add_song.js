// ------ forms
let form_add = document.forms.add_song;
// ------ inputs
let i_title = form_add.title_song;
let i_author = form_add.author_song;
let i_more = form_add.more_song;
let i_img = form_add.img_song;
let i_audio = form_add.audio_song;

let id_audio = audios.length
document.querySelector('#s_id').textContent = id_audio;

function update_audios_list() {
    id_audio++;
    document.querySelector('#s_id').textContent = id_audio;
}

function change_title() {
    document.querySelector('#s_name').textContent = `"${i_title.value}"`;
    // document.querySelector('#s_name_f').textContent = `${i_title.value}`;
}

function change_author() {
    document.querySelector('#s_author').textContent = `"${i_author.value}"`;
    // document.querySelector('#s_author_f').textContent = `${i_author.value}`;
}

function change_more() {
    document.querySelector('#s_more').textContent = `"${i_more.value}"`;
    // if (i_more.value == "") {
    //     document.querySelector('#s_more_f').textContent = "";
    // }
    // else {
    //     document.querySelector('#s_more_f').textContent = ` (${i_more.value})`;
    // }
}

function change_img() {
    document.querySelector('#s_img').textContent = `${i_img.value.slice(12)}`;
}

function change_audio() {
    document.querySelector('#s_audio').textContent = `${i_audio.value.slice(12)}`;
}



i_title.addEventListener('input', change_title);
i_img.addEventListener('input', change_img);
i_audio.addEventListener('input', change_audio);
i_more.addEventListener('input', change_more);
i_author.addEventListener('input', change_author);