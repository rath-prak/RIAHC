const menuBtnAnimation = () => {
  let portfolioBtn = document.querySelector('.portfolio-btn');
  let portfolioBtnUnderline = document.querySelector('.portfolio-btn-underline');

  this.portfolioBtn.addEventListener('mouseover', () => {
    TweenMax.to(portfolioBtnUnderline, 0.5, {
        scaleX:1,
        ease: Power4.easeInOut,
      })
  })

  this.portfolioBtn.addEventListener('mouseout', () => {
    TweenMax.to(portfolioBtnUnderline, 0.5, {
        scaleX:0,
        ease: Power4.easeInOut,
      })
  })
}

export default menuBtnAnimation;
