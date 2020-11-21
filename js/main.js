$(function() {
$('.top-slider',).slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/slick-prev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/slick-next.svg" alt="next"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         
        }
      },
      
      {
        breakpoint: 641,
        settings: {
        
        }
      }
      
    ]
  });
 
});

$(function() {
  $('.blockquote__slider').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
           
          }
        },
        
        {
          breakpoint: 320,
          settings: {
          arrows: false
          }
        }
        
      ]
    });
   
  });



// $('.top-slider').slick();
                  