// event listener for the button click that loads page --> visuals and music

document.addEventListener('DOMContentLoaded', () => {
  const medButton = document.getElementById('load-meditation-page');
  medButton.addEventListener('click', () => {
    if ((medButton.innerHTML = 'Press to start meditation')) {
      start();
      setTimeout(() => {
        medButton.innerText = 'Press to finish meditation';
      }, 2000);
    } else {
      medButton.innerText = 'Press to start meditation';
    }
  });
});
