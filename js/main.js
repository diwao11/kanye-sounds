function playSound(e){
    //console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //console.log(audio)
    if(!audio) return; //stops function from running
    audio.currentTime = 0; //rewind to the start
    audio.play();
    //console.log(key)
    key.classList.add('playing');
  }

  function removeTransition(e){
    // console.log(e)
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
    console.log(this)
  }
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))

  window.addEventListener('keydown', playSound)
