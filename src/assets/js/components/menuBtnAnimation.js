const menuBtnAnimation = () => {
  let $portfolioBtn = $('.portfolio-btn');

  $portfolioBtn.mouseover(function(){
    let $portfolioBtnUnderline = $( this ).next( '.portfolio-btn-underline' );

    TweenMax.to($portfolioBtnUnderline, 0.5, {
      scaleX:1,
      ease: Power4.easeInOut,
    })
  });

  $portfolioBtn.mouseleave(function(){
    let $portfolioBtnUnderline = $( this ).next( '.portfolio-btn-underline' );

    TweenMax.to($portfolioBtnUnderline, 0.5, {
      scaleX:0,
      ease: Power4.easeInOut,
    })
  });

}

export default menuBtnAnimation;
