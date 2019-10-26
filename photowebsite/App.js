const navButtonMe = document.querySelector('.nav-button-aboutme');
const navSeokin = document.querySelector('.nav-Seokin');

const t1 = new TimelineLite({ paused: true, reversed: true });

t1.to('.cover', 1, {
  width: '60%',
  ease: Power2.easeOut
})
  .to(
    'nav', 1, {
      height: '100%',
      ease: Power2.easeOut
    },
    '-= 0.5'
  )
.fromTo('.nav-Seokin',
   0.5,
  {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
  },
  {
    opacity: 1,
    x: 0,
    onComplete : function(){
      navSeokin.style.pointerEvents = 'auto';
      console.log('done');
    }
  }
);

  navButtonMe.addEventListener('click', (e) => {
    if(t1.isActive()){
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
    toggleTween(t1)
  });
  function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
  }
