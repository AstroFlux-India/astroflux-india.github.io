document.querySelector('.hero video').play();
let slogan_first_part = new SplitType('.hero > h1');
let cool_effect_word = new SplitType('.effect-word .fancy');
let cool_effect_word_2 = new SplitType('.effect-word .second');
let main_title = new SplitType('.title-container > h1');
let to_title = new SplitType('.cool-effect-container > h1');
let navbar_links = document.querySelectorAll('.navbar li');
let arrow_img = document.querySelector('.hero a');
let aboutImages = document.querySelectorAll('.about img');

this.document.querySelectorAll('.hero-content .effect-word .fancy .char').forEach(char => {
    char.classList.add('non-seeable');
})

setTimeout(() => {
    let i = 0;
    this.document.querySelectorAll('.hero > h1 .word').forEach(char => {
        char.style.transform = "translateY(0)";
        char.style.transitionDelay = i*75 + 'ms';
        i++;
    })
}, 750)

setTimeout(() => {
    this.document.querySelector('.hero > h1').style.opacity = 0;
}, 2500)

setTimeout(() => {
    let i = 0;
    this.document.querySelectorAll('.title-container > h1 .char').forEach(char => {
        char.style.transform = "translateY(0)";
        char.style.transitionDelay = i*50 + 'ms';
        i++;
    })
}, 2500)

setTimeout(() => {
    let i = 0;
    this.document.querySelectorAll('.cool-effect-container > h1 .char').forEach(char => {
        char.style.transform = "translateY(0)";
        char.style.transitionDelay = i*50 + 'ms';
        i++;
    })
}, 2700)

setTimeout(() => {
    let i = 0;
    navbar_links.forEach(char => {
        char.style.transform = "translateY(0)";
        char.style.opacity = 1;
        char.style.transitionDelay = i*50 + 'ms';
        i++;
    })
}, 2900)

let i = 0;
this.document.querySelectorAll('.hero-content .effect-word .fancy .char').forEach(char => {
    setTimeout(() => {
        char.classList.remove('non-seeable');
    }, 3000+(i*50));
    i++;
})

setTimeout(() => {
    this.document.querySelector('.cool-effect-container p').style.transform = "translateY(-50%)";
    this.document.querySelector('.cool-effect-container p').style.opacity = 1;
}, 3300)

setTimeout(() => {
    arrow_img.style.transform = 'translateY(0)';
    arrow_img.style.opacity = 1;
}, 3300)


document.querySelector('.effect-word').addEventListener('mouseover', () => {
    let i = 0;
    this.document.querySelectorAll('.hero-content .effect-word .fancy .char').forEach(char => {
        char.style.transform = "translateY(-110%)";
        char.style.transitionDelay = i*50 + 'ms';
        i++;
    })

    i = 0;
    this.document.querySelectorAll('.hero-content .effect-word .second .char').forEach(char => {
        char.style.transform = "translateY(-100%)";
        char.style.transitionDelay = i*50 + 'ms';
        i++;
    })
})

document.querySelector('.effect-word').addEventListener('mouseleave', () => {
    let i = 0;
    this.document.querySelectorAll('.hero-content .effect-word .fancy .char').forEach(char => {
        char.style.transform = "translateY(0%)";
        char.style.transitionDelay = i*50 + 'ms';
        i++;
    })

    i = 0;
    this.document.querySelectorAll('.hero-content .effect-word .second .char').forEach(char => {
        char.style.transform = "translateY(0%)";
        char.style.transitionDelay = i*50 + 'ms';
        i++;
    })
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

window.addEventListener('scroll', () => {
    translation = ((window.scrollY/window.innerHeight) - 4) * 2;
    document.querySelector('.topics h1').style.transform = 'translateX(' + translation + '%)';
    rotation = ((window.scrollY/window.innerHeight) - 4.5) * 50;
    document.querySelector('.orbit-animation').style.transform = 'rotate(' + rotation + 'deg)';
    if (window.scrollY > 0) {
        document.querySelector('.navbar').style.background = '#111';
    }
    else {
        document.querySelector('.navbar').style.background = 'none';
    }
})

window.addEventListener('scroll', function() {
    if (document.getElementById('about').getBoundingClientRect().top < (window.innerHeight/3)) {
        let i = 0;
        document.querySelector('.about h2').style.transform = 'translateY(0)';
        document.querySelector('.about h2').style.opacity = 1;
        document.querySelector('.about h2').style.transitionDelay = i*100 + 'ms';
        i++;
        document.querySelectorAll('.about img').forEach(img => {
            img.style.transform = 'translateY(0)';
            img.style.opacity = 1;
            img.style.transitionDelay = i*100 + 'ms';
            i++;
        })
        document.querySelector('.about h1').style.transform = 'translateY(0)';
        document.querySelector('.about h1').style.opacity = 1;
        document.querySelector('.about h1').style.transitionDelay = i*100 + 'ms';
        i++;
        document.querySelector('.about p').style.transform = 'translateY(0)';
        document.querySelector('.about p').style.opacity = 1;
        document.querySelector('.about p').style.transitionDelay = i*10 + 'ms';
    }

    if (document.querySelector('.team').getBoundingClientRect().top < (window.innerHeight/3)) {
        let i = 0;
        document.querySelector('.team h1').style.transform = 'translateY(0)';
        document.querySelector('.team h1').style.opacity = 1;
        document.querySelector('.team h1').style.transitionDelay = i*100 + 'ms';
        i++;
        document.querySelector('.team a').style.transform = 'translateY(0)';
        document.querySelector('.team a').style.opacity = 1;
        document.querySelector('.team a').style.transitionDelay = i*100 + 'ms';
    }
})