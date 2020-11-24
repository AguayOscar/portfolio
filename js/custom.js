$( document ).ready(function() {
    var heights = $(".sameHeight").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".sameHeight").height(maxHeight);
});

// Smooth scroll on homepage
function checkScroll(){
    var startY = $('.navigation-bar').height() - 50; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
            $('.navigation-bar').addClass("scrolled");
        }else{
            $('.navigation-bar').removeClass("scrolled");
        }
    }
  
  if($('.navigation-bar').length > 0){
      $(window).on("scroll load resize", function(){
          checkScroll();
      });
  };

  $('a.page_anchor').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 1500);
  return false;
});

//   setInterval(additionCoffees, 5000);

// function additionCoffees(num){
//   var resultado = Number($('.coffees').html());
//     console.log(resultado);


//     while(resultado <= 5000){
//       console.log(resultado + 2);
//       resultado+=2;
//     }
// }

// var coffees = 3285;
// var current = $('.coffees').html();

// setInterval(function(){
//     coffees+=2;
//     $('.coffees').html(coffees);
// }, 1000 * 60 * 60 * 24); //milliseconds, seconds, minutes, hours

// var count_particles, stats, update;
//   stats = new Stats;
//   stats.setMode(0);
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.left = '0px';
//   stats.domElement.style.top = '0px';
//   document.body.appendChild(stats.domElement);
//   count_particles = document.querySelector('.js-count-particles');
//   update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//       count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
//   };
//   requestAnimationFrame(update);