class Animation {
  constructor (element) {
    this.animation = document.createElement('div');
    this.animation.id = 'animation';
    element.appendChild(this.animation);
    
    this.inhaleSpeed = 400; // increment between 
    this.holdTime = 2000;
    this.exhaleSpeed = 800;
    this.boundGrow = this.grow.bind(this);
    this.boundShrink = this.grow.bind(this);
    setTimeout(this.boundGrow, this.inhaleSpeed); 
  }

  // a method for the growth animation
  grow (iteration = 0) {
    function increase () {
        const animation = document.getElementById('animation')
        const currentHeight = Number(window.getComputedStyle(animation).getPropertyValue('height').replace('px', ''));
        const currentWidth = Number(window.getComputedStyle(animation).getPropertyValue('width').replace('px', ''));
        console.log('before: ', currentHeight, currentWidth)
        animation.style.heigth = `${currentHeight * 1.25892541179}%`;
        animation.style.width = `${currentWidth * 1.25892541179}%`;
        console.log('after: ', currentHeight, currentWidth)
    }
    increase();
    if (iteration < 10) setTimeout (this.boundGrow, this.inhaleSpeed, iteration + 1)
  }

  // a method for the shrink animation
  shrink () {

  }
}