class Animation {
  constructor (element) {
    this.animation = document.createElement('div');
    this.animation.id = 'animation';
    element.appendChild(this.animation);
    
    this.inhaleSpeed = 40; // increment between 
    this.holdTime = 2000;
    this.exhaleSpeed = 80;
    this.boundGrow = this.grow.bind(this);
    this.boundShrink = this.shrink.bind(this);
    setTimeout(this.boundGrow, this.inhaleSpeed); 

    this.breathCycle = document.createElement('h2')
    this.breathCycle.id = 'breathCycle';
    document.querySelector('body').appendChild(this.breathCycle);
  }

  // a method for the growth animation
  grow (iteration = 0) {
    document.getElementById('breathCycle').innerText =`Inhale for ${this.inhaleSpeed / 10} counts`

    const animation = document.getElementById('animation')
    const currentHeight = Number(window.getComputedStyle(animation).getPropertyValue('height').replace('px', ''));
    const currentWidth = Number(window.getComputedStyle(animation).getPropertyValue('width').replace('px', ''));
    animation.style.height = `${currentHeight * 1.02329299228}px`;
    animation.style.width = `${currentWidth * 1.02329299228}px`;

    // console.log(iteration)
    if (iteration < 99) {
        setTimeout (this.boundGrow, this.inhaleSpeed, iteration + 1);
    }else {
        // console.log(iteration)
        document.getElementById('breathCycle').innerText = `Hold`
        setTimeout(this.boundShrink, this.holdTime)
    }
  }

  // a method for the shrink animation
  shrink (iteration = 0) {
    document.getElementById('breathCycle').innerText =`Exhale for ${this.exhaleSpeed / 10} counts`

    console.log('asdfasdfasdfnjknekgehid;')
    function decrease () {
        const animation = document.getElementById('animation')
        const currentHeight = Number(window.getComputedStyle(animation).getPropertyValue('height').replace('px', ''));
        const currentWidth = Number(window.getComputedStyle(animation).getPropertyValue('width').replace('px', ''));
        animation.style.height = `${currentHeight / 1.02329299228}px`;
        animation.style.width = `${currentWidth / 1.02329299228}px`;
    }
    decrease();
    if (iteration < 99) {
        setTimeout (this.boundShrink, this.exhaleSpeed, iteration + 1);
    }else {
        console.log('got here!')
        setTimeout(this.boundGrow, this.inhaleSpeed + 200)
    }
  }
}