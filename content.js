function start() {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Begin Meditation';
  const body = document.querySelector('body');
  body.appendChild(title);

  const animationContainer = document.createElement('div');
  animationContainer.id = 'animationContainer';
  body.appendChild(animationContainer);

  const animationFunc = new Animation(animationContainer);
  console.log(document.getElementById('animation').attributes);

  const audio = new Audio('audio.wav');
  audio.play();
}
