$(document).ready(function() {


    var header_height = $("header").innerHeight();
    $(".banner").css("margin-top", header_height);



$('.testimonial').owlCarousel({
    items:1,
    nav:true,
    autoplay:true,
    loop:true,
});

  $(".free-call-button,.coloum-action a,.footer-contact ul li a").click(function(){
    $("body").addClass("active-landing-form"),
    setTimeout(function() {
      $('#landing-form input[type="text"]').focus();
    }, 1000);
  });

  $(".remove-sidebar").click(function(){
    $("body").removeClass("active-landing-form");
  });


    $(".navbar-toggler").click(function(){
      $(this).toggleClass("actie-navar");

    });

  $(".remove-chat").click(function(){
    $(this).hide();
    $(".chating-box").hide();
  });

  setInterval(function () {
    $('.chating-box').css('transform', 'scale(1)');
    $('.remove-chat').css('transform', 'scale(1)');
  }, 2000);



  if ($(window).width() > 768) {
    $('.coloum-action a,.footer-contact ul li a').on('click', function(event) {
      var target = $($(this).attr('href'));
      if (target.length) { event.preventDefault();
        $('html, body').animate({           
          scrollTop: target.offset().top - header_height },  500)
      }
    });
  }


  });