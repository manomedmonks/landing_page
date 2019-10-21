$(document).ready(function() {


    var header_height = $(".header").innerHeight();
    $(".doctor-discription-banner").css("margin-top", header_height);

// $(".tab-heading ").click(function () {
//     $(".tab-heading").not(this).parents(".listing-tab").removeClass("active-tab");
//     $(this).parents(".listing-tab").toggleClass("active-tab");

//     $('html, body').animate({
//         scrollTop: $(this).parents(".listing-tab").offset().top - header_height
//     }, 800, 'linear');

// });






$('.whatsapp-img , .remove-chat').on("click", function (o) {

        $('.chat-box').toggle();
    }),
    setInterval(function () {
        $('.chat-box').css('transform', 'scale(1)');
    }, 2000);





  });