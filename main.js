// event listener for the button click that loads page --> visuals and music

document.addEventListener('DOMContentLoaded', () => {
  const medButton = document.getElementById('load-meditation-page');
  medButton.addEventListener('click', () => {
    start();
    setTimeout(() => {
      medButton.innerText = 'Press to finish';
    }, 2000);
  });
});
