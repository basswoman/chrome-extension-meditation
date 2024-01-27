function start() {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Begin Meditation';
  const body = document.querySelector('body');
  body.appendChild(title);

  const animationContainer = document.createElement('div');
  animationContainer.id = 'animationContainer';
  body.appendChild(animationContainer);

  let animationFunc = new Animation(animationContainer);
  console.log(document.getElementById('animation').attributes);

  const breathButton = document.getElementById('breathButton');
  breathButton.addEventListener('click', animationFunc.boundAdjust);
}

function end () {
  const body = document.querySelector('body');
  body.innerHTML = '<button id="load-meditation-page">Press to start meditation</button><script src="main.js"></script>'
}