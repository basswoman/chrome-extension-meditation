// event listener for the button click that loads page --> visuals and music

document.addEventListener('DOMContentLoaded', () => {
  const medButton = document.getElementById('load-meditation-page');

  document
    .getElementById('load-meditation-page')
    .addEventListener('click', () => {
      if (medButton.innerText === 'Press to start meditation') {
        start();
        setTimeout(() => {
          medButton.innerText = 'Press to finish meditation';
        }, 2000);
        const audio = new Audio('audio.wav');
        audio.play();
        audio.volume = 0.1;
        medButton.id = 'newMedButton';
      } else {
        console.log('hello')
        setTimeout(() => {
          medButton.innerText = 'Press to start meditation';
        }, 2000);
      //   reload(true);
        const audio = new Audio('audio.wav'); 
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 0;
      }
    });

  // document.getElementById('newMedButton').addEventListener('click', () => {
  // });
});
