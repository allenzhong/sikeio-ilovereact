
function animateLogo(){
  TweenMax.fromTo('.react-logo',5,{
    css:{
      y: "-50px",
    }
  },{
    css:{
      y: "30px",
    },
    repeat: -1,
    yoyo: true,
    ease: Power2.easeInOut
  }
                 );
}
function animateRobot(){
  var t = new TimelineMax({yoyo: true, repeat: -1});
  t.to("#android-robot", 1, {rotation: "-30deg"})
  .to("#android-robot", 1, {rotation:'-55deg'});
}

function updateSliderControl(){
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++){
    var link = links[i];

    var sectionName = link.getAttribute('href');
    var section = document.querySelector(sectionName);
    var sectionTop = section.offsetTop;
    var sectionBottom = section.offsetTop + section.offsetHeight;

    //alert('sectionTop '+ sectionTop);
    // Check if window.scrollY is between the section.
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

function addSmoothScrolling(){
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++){
    var link = links[i];
    (function(element){
        element.addEventListener("click",function(event) {
        // `event` is the mouse click event
        var sectionName = element.getAttribute('href');
        var section = document.querySelector(sectionName);
        // BUG WARNING! Fix with a closure or ES6 `let`.
        scrollToElement(section);
        event.preventDefault();
      });
    })(link);
  }
}

function scrollToElement(element){
  var topOfElement = element;
  TweenMax.to(window,1,{
    scrollTo:{
      y: topOfElement.offsetTop,
    },
    ease: Power2.easeInOut
  });
}

window.onload = function(){
  animateLogo();
  animateRobot();
  updateSliderControl();
  addSmoothScrolling();
};

window.onscroll = function(){
  updateSliderControl();
}
