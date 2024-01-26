chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "load-page") {

        const animationContainer = document.createElement('div');
        animationContainer.id = 'animationContainer';
        document.querySelector('body').appendChild(animationContainer);

        const title = document.createElement('h1');
        title.id = 'title';
        title.innerText = 'Begin Meditation';
        animationContainer.appendChild(title);
    
      const animationFunc = new Animation();

    }
  });