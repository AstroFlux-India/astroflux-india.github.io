window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.querySelector('.navbar').style.background = '#111';
    }
    else {
        document.querySelector('.navbar').style.background = 'none';
    }
})

function easeInOutCubic(x) {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    }

const lenis = new Lenis(wrapper=document.querySelector(".scroll-container"), easing = (t) => easeInOutCubic(), duration=0.5)

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)