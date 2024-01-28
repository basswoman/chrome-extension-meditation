// event listener for the button click that loads page --> visuals and music

document.addEventListener('DOMContentLoaded', () => {
  const medButton = document.getElementById('load-meditation-page');
  const audio = new Audio('audio.wav');
  document
    .getElementById('load-meditation-page')
    .addEventListener('click', () => {
      if (medButton.innerText === 'Press to start meditation') {
        start();
        setTimeout(() => {
          medButton.innerText = 'Press to finish meditation';
        }, 2000);
        audio.volume = 0.1;
        audio.play();
        medButton.id = 'newMedButton';
      } else {
        end();
        setTimeout(() => {
          medButton.innerText = 'Press to start meditation';
        }, 2000);
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 0;
      }
    });

  // document.getElementById('newMedButton').addEventListener('click', () => {
  // });
});
