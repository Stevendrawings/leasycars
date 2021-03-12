
window.onload = function(){

/* ==============
     JAVASCRIPT
   ============== */
   
var btnGold = document.getElementById("lineGold"); // Selectionne un ID dans le html
btnGold.addEventListener("click", function(){ // fait reference à la syntaxe jQuery => $("selector").click( function() { }
var sel = document.querySelector(".hamburgergold");
// classList permet d'ajouter un element css il y a d'autre exemple comme celui ci classList.remove() etc
sel.classList.toggle("closed"); });

if ($('#scrollBot').length > 0) {

  var last_scroll_top = 0;
  $(window).on('scroll', function() {

    scroll_top = $(this).scrollTop();

   window.requestAnimationFrame(function(){ 

    if(scroll_top === 0) {
      $('.menu li a').css({ color: "#fff" })
      $("#scrollBot")
          .css({ 
            transition: 'ease-out .2s',
            position : "absolute",
            padding: "35px 0 35px 0",
            background: "transparent",
            top: '0',
            boxShadow: '0 4px 10px -10px rgba(0,0,0,0)' 
          })

      $(".cls-3").css({ fill: "#fff" })

      $('.hamburgergold span').css({ background: "#fff"})

    } else if(scroll_top > 226){

      if(scroll_top < last_scroll_top) {
        $('.menu li a').css({ color: "#000" })
        $('.hamburgergold span').css({ background: "#000"})
       $("#scrollBot")
          .css({
            transform: "translate3d(0px, 0px, 0px)",
            position: "fixed", 
            top: '0' }) 
    } else if(scroll_top > last_scroll_top){
        $("#scrollBot")
          .css({ 
            background: "#fff",
            padding: "0",
            boxShadow: '0 4px 10px -10px rgba(0,0,0,.6)'
          })
        $("#scrollBot")
          .css({ 
            padding: "10px 0 10px 0",
            transform: "translate3d(0px, -102px, 0px)", })
            $(".cls-3").css({  fill: "#000" })
        }
    }
      last_scroll_top = scroll_top;
  
    }) }) }

/* ==============
        GSAP
   ============== */

gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#block",
      start: "top top",
      end: "+=1000",
      x: "50%",
      scrub: true,
      pin: true,
    }
  }).to('.border-faq', {
    width: "100%",
    ease: "power1",
    pin: true
}).from('.size-1', 1, {autoAlpha: 0})

}