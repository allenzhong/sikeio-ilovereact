
function animateLogo(){
  TweenMax.fromTo('.react-logo',5,{
    css:{
      top: "-50px",
    }
  },{
      css:{
        top: "30px",
      },
      repeat: -1,
      yoyo: true,
      ease: Power2.easeInOut
    }
  );
}

window.onload = function(){
  animateLogo();
};
