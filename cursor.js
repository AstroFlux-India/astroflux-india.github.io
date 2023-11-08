let cursor = document.querySelector('.cursor');
window.addEventListener("mousemove", cursorAnimate);
let links = document.querySelectorAll('a');

function cursorAnimate(e) {
    cursor.animate({
        top:e.pageY + 'px',
        left:e.pageX + 'px', 
      }, duration=1000, fill='forwards')
  }

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.style.opacity = 0;
    })
    link.addEventListener('mouseleave', () => {
        cursor.style.opacity = 1;
    })
})