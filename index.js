const hambuger = document.querySelector('.hamburger-container');
const closeMenu = document.querySelector('.close-icon-container')
const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-links');
hambuger.addEventListener('click', () => {
     navList.classList.add('show-menu');
     gsap.from('.nav-links',{x:-100,stagger:.1,opacity:0})
})
closeMenu.addEventListener('click', () => {
     navList.classList.remove('show-menu');
})

closeMenu.addEventListener('mouseenter', () => {
     gsap.to('.close-icon-container svg',{rotation:360,duration:1,ease:'bounce',})
})
closeMenu.addEventListener('mouseleave', () => {
     gsap.to('.close-icon-container svg',{rotation:-360,duration:1,ease:'bounce',})
})

// ! confetti Animation
gsap.to('.confetti-img',{y:-20,duration:3,repeat:-1,yoyo:true,ease:'power.in'}) 



navLinks.forEach((links) => {
     links.addEventListener('click', () => {
          navList.classList.remove('show-menu');
     })
})