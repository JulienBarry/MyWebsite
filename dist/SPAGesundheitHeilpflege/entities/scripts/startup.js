

//https://formvalidation.io/guide/plugins/materialize/



$(window).load(function() {

  $(function(){ 
    setTimeout(function () {
      $('.se-pre-con').fadeOut('slow', function () {
        $(this).remove();
      });
    }, 1500);  
  });  

 /* -------------- */

    //update this with your js_form selector
    var form_id_js = "javascript_form";

    var data_js = {
        "access_token": "aw1njefkbx5akez4bjugpxsr" // sent after you sign up
    };

    function js_onSuccess() {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }

    function js_onError(error) {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }

    var sendButton = document.getElementById("js_send");

    function js_send() {
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
        var message = document.querySelector("#" + form_id_js + " [name='text']").value;
        var lastname = document.querySelector("#" + form_id_js + " [name='last_name']").value;
        var firstname = document.querySelector("#" + form_id_js + " [name='first_name']").value;
        var email = document.querySelector("#" + form_id_js + " [name='email']").value;

        data_js['subject'] = "Anmeldung: "+subject;
        data_js['text'] = "E-Mail von: "+firstname+" "+lastname+" ("+email+") \n \n"+message;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

/* -------------- */


  $(document).ready(function(){
    $('.dropdown-content').dropdown();
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $('nav a').css("font-family", "Gabriola");
  $('nav a').css("font-size", "20pt");


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
    $('footer .white-text').css("font-size", "20pt !important");
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
      aud.volume = 1;
      $('#FormDropdown').val('Gespräche in der Natur');
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
      $('#FormDropdown').val('Entspannung durch Klangmassage');
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
      $('#FormDropdown').val('Klangreise');
    }

    if (pathname == '/ernaehrung') {
      $('nav').css("background-color", "#bfe2ca");
      $('nav a').css("color", "black");
      $('#PhaseX').css("background-image", "url('../../assets/ErnaehrungImgP4.jpg')");
      $('#FormDropdown').val('vitalstoffreiche Ernährung - gesundes Wasser');
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

    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $('.arrow').addClass('arrowNone');
        $('.arrow').removeClass('arrow');
      } else if ($(window).scrollTop() <= 90) {
        $('.arrowNone').addClass('arrow');
        $('.arrow').removeClass('arrowNone');
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
        });
     });

})(jQuery);


