const gameplate = document.getElementById('gameplate');
const rhino = document.getElementById('rhino');
let text = document.getElementById('info');

let status = 1;

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;


    if (e.keyCode == '37') {
        if (status == 3) {
            gameplate.classList.remove('align-right');
            gameplate.classList.add('align-centr');
            status = 2;
            // text.innerHTML = `Влево ${status} --3`;
            // console.log(`Статус ${status}`);

        } else if (status == 2) {
            gameplate.classList.remove('align-centr')
            gameplate.classList.add('align-left');
            status = 1;
            // text.innerHTML = `Влево ${status} --2`;
            // console.log(`Статус ${status}`);
        };
    }

    if (e.keyCode == '39') {
        if (status == 2) {
            gameplate.classList.remove('align-centr');
            gameplate.classList.add('align-right');
            status = 3;
            // text.innerHTML = `Вправо ${status} >>2`;
            // console.log(`Статус ${status}`);

        } else if (status == 1) {
            gameplate.classList.remove('align-left');
            gameplate.classList.add('align-centr');
            status = 2;
            // text.innerHTML = `Вправо ${status} >>1`;
            // console.log(`Статус ${status}`);
        };
    }

}