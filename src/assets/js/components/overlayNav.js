const overlayNav = () => {
  let overlayNav = document.querySelector('.overlay-nav');
  let toggleNav = document.querySelector('.toggle-nav');
  let toggleSlide = document.querySelector('.toggle-slide');

  const menuOpen = new TimelineMax({ paused:true, reversed:true }),
        menuClose = new TimelineMax({ paused:true, reversed:true })

  menuOpen.to(overlayNav, .5, { opacity: 1, ease: Power2.easeOut })
  menuClose.to(toggleSlide, .5, { x: -100, ease: Power2.easeOut })

  toggleNav.addEventListener('click', () => {
    menuOpen.reversed() ? menuOpen.restart() : menuOpen.reverse();
    menuClose.reversed() ? menuClose.restart() : menuClose.reverse();
  })
}

export default overlayNav
