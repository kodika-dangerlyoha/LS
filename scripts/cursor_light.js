let cursor_light = document.querySelector('#cursor_light');

document.addEventListener('mousemove', (event) => {
    cursor_light.style.left = event.pageX + 'px';
    cursor_light.style.top = event.pageY + 'px';
});

function show_cursor_light(color) {
    cursor_light.classList.remove('cursorLight_hidden');
    cursor_light.style.backgroundColor = color;
}

function hidden_cursor_light() {
    cursor_light.classList.add('cursorLight_hidden');
}

// function mousedown_cursor_light() {
//     console.log('1');
//     cursor_light.classList.add('cursorLight_down');
// }

// function mousedown_cursor_light_stop() {
//     console.log('1');
//     cursor_light.classList.remove('cursorLight_down');
// }