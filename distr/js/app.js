// $(function(){
  
//   $(".iziModal").iziModal({
//    width: 900,
//    radius: 5,
//    padding: 2,
//    group: 'products',
//    loop: true,
//    headerColor: 'rgb(39 39 39)',
//    closeButton: true,
//    navigateArrows: false,
//    overlayColor: 'rgb(0 0 0 / 85%)',
//    onClosed: function(){
     
     
//   },
//    timeoutProgressbarColor: 'rgba(255,255,255,0.5)',
//  });
 
  
//  });
 
 $('.header__carusel').owlCarousel({
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  loop:true,
  margin:10,
  nav:false,
  dots: true,
  animateOut: 'animate__slideOutDown',
  animateIn: 'animate__flipInX',
  items:1,
  margin:30,
  stagePadding:30,
  smartSpeed:450,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$('.carusel__list').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots: true,
    navText: ['',''],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
  })
$('.reviews__carousel').owlCarousel({
    loop:true,
    margin:5,
    nav: true,
    dots: false,
    navText: ['',''],
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
$('.mobiMenu').on('click ', function() {
    if ($('.mobiMenu-icon').hasClass('isOpen')) {
        $('.mobiMenu-label').text('Menu');
        $('.mobiMenu-icon').removeClass('isOpen');
        $('.mobi_list').removeClass('active');
    } else {
      $('.mobiMenu-icon').addClass('isOpen');
      $('.mobiMenu-label').text('Close');
      $('.mobi_list').addClass('active');
      
    }
  });

$('.mobijobs').on('click ', function() {
if ($('.mobijobs-icon').hasClass('isOpen')) {
    $('.mobijobs-label').text('Примеры');
    $('.mobijobs-icon').removeClass('isOpen');
    $('.catalog__navi__mobi__list').removeClass('active');
} else {
    $('.mobijobs-icon').addClass('isOpen');
    $('.mobijobs-label').text('Закрыть');
    $('.catalog__navi__mobi__list').addClass('active');
    
}
});

$(function(){
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if(winTop >= 40){
        $(".static").addClass("sticky-header");
      }else{
        $(".static").removeClass("sticky-header");
      }//if-else
    });//win func.
  });//ready func.
//  var checkbox = document.getElementById("ViewGrid");

//  if (sessionStorage.getItem("mode") == "grid") {
//   grid(); 
// } else {
//   flex();
// }

// checkbox.addEventListener("change", function() {
//   if (checkbox.checked) {
//     grid(); 
//   } else {
//     flex();
//   }
// });
// function grid() {
//   document.querySelector(".product-list").classList.add("grid"); 
//   checkbox.checked = true; 
//   sessionStorage.setItem("mode", "grid");
// }
 

// function flex() {
//   document.querySelector(".product-list").classList.remove("grid"); 
//   checkbox.checked = false; 
//   sessionStorage.setItem("mode", "flex");
// }
 
// function openKids(evt, openKids) {
//   var i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   document.getElementById(openKids).style.display = "block";
//   evt.currentTarget.className += " active";
// }
// document.getElementById("defaultOpen").click();

jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});