class Animation {
  constructor (element) {
    this.animation = document.createElement();
    this.animation.id = 'animation';
    element.appendChild(this.animation);
    
    this.inhaleSpeed = 400 // increment between 
    this.holdTime = 2000
    this.exhaleSpeed = 800
  }

  // a method for the growth animation
  grow () {
    function increase () {
        const currentHeight = Number(this.animation.height.replace('%', ''));
        this.animation.setAttribute('height', `${currentHeight * 1.5}%`)
        const currentLength = Number(this.animation.length.replace('%', ''));
        this.animation.setAttribute('length', `${currentLength * 1.5}%`)
    }
  }

  // a method for the shrink animation
  shrink () {

  }
}