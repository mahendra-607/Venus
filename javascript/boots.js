// First carousel
$('.your-class').slick({
  slidesToShow:1,
  slidesToScroll:1,
  infinite:true,
  touchMove:false,
  autoplay:true,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: true,
	      arrows: false,
      }
    }
  ]
});

// How and Who section

$('.main-class').slick({
  slidesToShow:1,
  slidesToScroll:1,
  infinite:true,
  touchMove:false,
  autoplay:true,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: true,
	      arrows: false,
      }
    }
  ]
});

// Blog section carousel

$('.sec-core').slick({
  slidesToShow:3,
  slidesToScroll:1,
  infinite:true,
  touchMove:true,
  autoplay:false,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
	      arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
	      arrows: false,
      }
    }]
});

// animation on header

$( document ).ready(function() {
  $(window).bind('scroll', function () {
			if ($(window).scrollTop() > 65) {
					$(".navbar-sec").addClass('animation');
			} else {
				$(".navbar-sec").removeClass('animation'); 
			}
		});
});