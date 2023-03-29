const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //Toggle Nav
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
      
      //Animate Links
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = ''
        }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  
        }
      });
      
      //burger animation
      burger.classList.toggle('toggle');
      
      
    });
}
  navSlide();
 
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  //collapsible

  
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


var selected = null;
$(".icon").click(function() {
  var tempSelected = null;
  if (selected != null) {
    tempSelected = selected;
  }
  selected = $(this);
  $(this).find(".background_circle").css({ display: "block", opacity: "1" });

  var color = $(this).find(".background_circle").css("backgroundColor");
  console.log(color);
  var tl = new TimelineMax();
  tl
    .to($(this).find(".background_circle"), 3, {
      scale: 100,
      transformOrigin: "50% 50%",
      ease: Linear.easeIn
    })
    .to(
      $("body"),
      0,
      {
        backgroundColor: color
      },
      "-=2"
    );

  if (
    tempSelected !== null &&
    $(this).attr("class") !== tempSelected.attr("class")
  ) {
    TweenMax.to(
      tempSelected.find(".background_circle"),
      0,
      {
        opacity: 0,
        scale: 0,
        transformOrigin: "50% 50%",
        ease: Linear.easeIn
      },
      "-=3"
    );
  }
});
