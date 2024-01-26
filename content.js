function start () {
    console.log('are we in here?')
            const animationContainer = document.createElement('div');
            animationContainer.id = 'animationContainer';
            document.querySelector('body').appendChild(animationContainer);
    
            const title = document.createElement('h1');
            title.id = 'title';
            title.innerText = 'Begin Meditation';
            animationContainer.appendChild(title);
        
          const animationFunc = new Animation();
    
        }
