
$( document ).ready(function() {
    //owl Carousel
   $('.owl-carousel').owlCarousel({
       margin:15,
       loop:true,
       autoplay:true,
       responsiveClass:true,
       responsiveRefreshRate:true, 
       responsive:{
           0: {items:1},
           
           576: {items:1},
           
           768: {items:2},
           992: {items:3},
       }
   });
    //wow animation
    
    new WOW().init();
});