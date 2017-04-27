// Responsiv Menu Funktion
function aabnMenu() {
    var x = document.getElementById("responsivMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

// Menu Scroll Funktion

$("#menuHome").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top - 80
    }, 2000);
});

$("#menuNews").click(function() {
    $('html, body').animate({
        scrollTop: $("#news").offset().top - 80
    }, 2000);
});

$("#menuAbout").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 80
    }, 2000);
});

$("#menuContact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 80
    }, 2000);
});

// Græs Canvas Animeret

var graesCanvas     = document.getElementById('graes'),
    graesContext    = graesCanvas.getContext('2d'),
    graesStak       = [],
    graesBredde     = '100',
    graesHoejde     = '100';

var graesTegning = function(){
  graesContext.fillStyle="#2196F3";
  graesContext.fillRect(0,0,graesBredde,graesHoejde);
  graesStak.forEach(function(el){
      el();
  })
  requestAnimationFrame(graesTegning);
}
var graesAnimation = function(){
  var x = 0;
  var graesHastighed = Math.random()*0.5; 
  var position = Math.random()*graesBredde-graesBredde/2;
  var graesMaxHoejde = Math.random()*20+45;
  var graesStoerrelse = Math.random()*10+5; 
  var c = function(l,u){return Math.round(Math.random()*(u||255)+l||0);}
  var graesFarve = 'rgb('+c(60,10)+','+c(201,50)+','+c(120,50)+')';
  return function(){
    var deviation=Math.cos(x/30)*Math.min(x/40,50),
        tall = Math.min(x/5,graesMaxHoejde),
        size = Math.min(x/50,graesStoerrelse);

    x+=graesHastighed;
    graesContext.save();

    graesContext.strokeWidth=10;
    graesContext.translate(graesBredde/2+position,graesHoejde)
    graesContext.fillStyle=graesFarve;

    graesContext.beginPath();
    graesContext.lineTo(-size,0);
    graesContext.quadraticCurveTo(-size,-tall/2,deviation,-tall);
    graesContext.quadraticCurveTo(size,-tall/2,size,0);
    graesContext.fill();

    graesContext.restore()
  }    
};

for(var x = 0; x<100;x++){graesStak.push(graesAnimation());}
graesCanvas.width = graesBredde;
graesCanvas.height = graesHoejde;
graesTegning();