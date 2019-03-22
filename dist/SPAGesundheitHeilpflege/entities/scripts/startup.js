

$(window).load(function () {

  $(document).ready(function(){
    $('.sidenav').sidenav();
  })

  $('nav a').css("font-family", "Gabriola");
  $('nav a').css("font-size", "20pt");

  setTimeout(function () {
    $('.se-pre-con').fadeOut('slow', function () {
    });
  }, 1500);  
  
  $('textarea').keyup(function () {
    var length = $(this).val().length;

    if (length >= 161) {
      $('textarea').css("overflow-y", "scroll");
    } else {
      $('textarea').css("overflow-y", "hidden");
    }
  });

  function openModal($Modal) {

    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    
    $('body')
      .css("overflow", "hidden")
      .css('margin-right', scrollBarWidth)
      .addClass('showing-modal');
    $Modal.show();

  };

  function closeModal($Modal) {

    $('body')
      .css("overflow", "auto")
      .css('margin-right', '')
      .removeClass('showing-modal');
    $Modal.hide();
  };

  
  var $ModalAnmeldung = $('#modal');
  var $ModalVNahrung = $('#modal-vnahrung');
  var $ModalGWasser = $('#modal-gwasser');
  var $ModalAVS = $('#modal-avs');
  var $ModalKontakt = $('#modal-kontakt');




  $('#register').click(function (event) {
    var $Modal = $ModalAnmeldung;
    event.preventDefault();
    openModal($Modal);
    $Modal
      .click(function () {
        closeModal($Modal);
      })
      .find('.modal-inner').click(function (event) {
        event.stopPropagation();
      });
  });

  $('#BoxInfoVN').click(function (event) {
    var $Modal = $ModalVNahrung;
    event.preventDefault();
    openModal($Modal);
    $Modal
      .click(function () {
        closeModal($Modal);
      })
      .find('.modal-inner').click(function (event) {
        event.stopPropagation();
      });
  });

  $('#BoxInfoGW').click(function (event) {
    var $Modal = $ModalGWasser;
    event.preventDefault();
    openModal($Modal);
    $Modal
      .click(function () {
        closeModal($Modal);
      })
      .find('.modal-inner').click(function (event) {
        event.stopPropagation();
      });
  });

  $('#BoxInfoAVS').click(function (event) {
    var $Modal = $ModalAVS;
    event.preventDefault();
    openModal($Modal);
    $Modal
      .click(function () {
        closeModal($Modal);
      })
      .find('.modal-inner').click(function (event) {
        event.stopPropagation();
      });
  });

  $('#contact').click(function (event) {
    var $Modal = $ModalKontakt;
    event.preventDefault();
    openModal($Modal);
    $Modal
      .click(function () {
        closeModal($Modal);
      })
      .find('.modal-inner').click(function (event) {
        event.stopPropagation();
      });
  });

  $('#kontakt').click(function (event) {
    var $Modal = $ModalAnmeldung;
    closeModal($Modal);
    $Modal = $ModalKontakt;
    event.preventDefault();
    openModal($Modal);
    $Modal
      .click(function () {
        closeModal($Modal);
      })
      .find('.modal-inner').click(function (event) {
        event.stopPropagation();
      });
  });
});


(function ($) {
  $(function () {
    M.AutoInit();
    var pathname = window.location.pathname;

    if (pathname == '/impressum') {
      $('nav').css("background-color", "#bfe2ca");
      $('nav a').css("color", "black");
    }

    if (pathname != '/home') {
      $('nav').removeClass('transparent');
      $('#TitelPX p').text('Angebotsübersicht:');
    }

    if (pathname == '/inspiration') {
      $('nav').css("background-color", "#e1d5bf");
      $('nav a').css("color", "black");
    }

    if (pathname == '/persoenliches') {
      $('nav').css("background-color", "#d0e6e3");
      $('nav a').css("color", "black");
    }

    if (pathname == '/gespraeche') {
      $('nav').css("background-color", "#bfe2ca");
      $('nav a').css("color", "black");
      $('#PhaseX').css("background-image", "url('../../assets/ImgGespraechePAngebote.jpg')");
      var aud = document.getElementById("schritte");
      aud.volume = 0.005;
      $('#FormDropdown').val('1');
    }

    if (pathname == '/entspannung') {
      $(window).scroll(function () {
      
        if ($(window).scrollTop() > 1200 && $(window).scrollTop() < 2200 && (screen.height < 900)) {
          $('.AnmeldeButton').css('display','none');
        } else {
          $('.AnmeldeButton').css('display','block');
        }
      });

      $('nav').css("background-color", "#d1d2c2");
      $('nav a').css("color", "black");
      $('#TitelPX p').css("background-color", "rgba(222, 184, 135, 0.7)");
      $('#PhaseX').css("background-image", "url('../../assets/ImgEntspannungPAngebote.jpg')");
      $('.AnmeldeButton').css("background-color", "#d1d2c2");
      $(".AnmeldeButton").hover(function () {
        $(this).css("background-color", "burlywood")
      }, function () {
        $(this).css("background-color", "#d1d2c2");
      });
      $('#FormDropdown').val('2');
    }

    if (pathname == '/klangreise') {
      $('nav').css("background-color", "#8bacbd");
      $('nav a').css("color", "black");
      $('#PhaseX').css("background-image", "url('../../assets/klangreiseImgPAngebote.jpg')");
      $('.AnmeldeButton').css("background-color", "#8bacbd");
      $(".AnmeldeButton").hover(function () {
        $(this).css("background-color", "#d1d2c2")
      }, function () {
        $(this).css("background-color", "#8bacbd");
      });
      $('#FormDropdown').val('3');
    }

    if (pathname == '/ernaehrung') {
      $('nav').css("background-color", "#bfe2ca");
      $('nav a').css("color", "black");
      $('#PhaseX').css("background-image", "url('../../assets/ErnaehrungImgP4.jpg')");
      $('#FormDropdown').val('4');
    }

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300 && pathname == '/home') {
        $('.transparent').addClass('card-panel teal lighten-2');
        $('nav a').css("color", "black");
      } else if ($(window).scrollTop() <= 300 && pathname == '/home') {
        $('.transparent').removeClass('card-panel teal lighten-2');
        $('nav a').css("color", "white");
        $('.dropdown-content li a').css("color", "black");
      }
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() > 1000) {
        $('.Home').addClass('HomeScrolled');
      } else if ($(window).scrollTop() <= 1000) {
        $('.Home').removeClass('HomeScrolled');
      }
    });

  });

  $(function() {

    $('.dropdown-trigger').dropdown({
          inDuration: 300,
          outDuration: 225,
          hover: true, // Activate on hover
          belowOrigin: true, // Displays dropdown below the button
          alignment: 'right' // Displays dropdown with edge aligned to the left of button
        }
      );
    
        });

})(jQuery);


$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $('.arrow').addClass('arrowNone');
    $('.arrow').removeClass('arrow');
  } else if ($(window).scrollTop() <= 90) {
    $('.arrowNone').addClass('arrow');
    $('.arrow').removeClass('arrowNone');
  }
});

  
