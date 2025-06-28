let audio = document.querySelector('#cat-audio');
let mario = document.querySelector('.cat');

mario.addEventListener('click', () => {
  mario.classList.remove('duble_jump');
  mario.classList.add('jump');
  audio.currentTime = 0;
  audio.play();
});

let pipe = document.querySelector('.green_pipe');

pipe.addEventListener('click', () => {
  mario.classList.remove('jump');
  mario.classList.add('duble_jump');
});
