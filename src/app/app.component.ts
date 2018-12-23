import { Component } from '@angular/core';
import { fadeInAnimation } from './_animations/fadeInAnimation';
import { I18nSelectPipe } from '@angular/common';

declare var textFit: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation]
})
export class AppComponent {
  title = 'Enormedia';
  latitude= 53.1378685;
  longitude= 8.2143853;

  ngOnInit() {
    //scrollify variables
    var scrollWieso;
    var scrollWie;
    var scrollWas; 
    var scrollWer; 
    
function addSection1Animations(section){
  $(section+'-question').addClass('animated fadeInDown delay-1s fast');
  $(section+'-divider').addClass('animated fadeInDown delay-1s fast');
  $(section+'-buzzword').addClass('animated fadeInDown delay-1s slow');
  $(section+'-details').addClass('animated fadeInDown delay-2s slow');
  $(section+'-list').addClass('animated fadeInDown delay-2s slow');
  $(section+'-list-divider-top').addClass('animated fadeInDown delay-2s slow');
  $(section+'-list-divider-bottom').addClass('animated fadeInDown delay-2s slow');
  $(section+' .angle-right-container').addClass('animated fadeInRight delay-2s slow');
  $(section+' .angle-left-container').addClass('animated fadeInLeft delay-2s slow');
  $(section+' .angle-down-container').addClass('animated fadeInUp delay-2s slow');
}

function removeSection1Animations(section){
  $(section+'-question').removeClass('animated fadeInDown delay-1s fast');
  $(section+'-divider').removeClass('animated fadeInDown delay-1s fast');
  $(section+'-buzzword').removeClass('animated fadeInDown delay-1s slow');
  $(section+'-details').removeClass('animated fadeInDown delay-2s slow');
  $(section+'-list').removeClass('animated fadeInDown delay-2s slow');
  $(section+'-list-divider-top').removeClass('animated fadeInDown delay-2s slow');
  $(section+'-list-divider-bottom').removeClass('animated fadeInDown delay-2s slow');
  $(section+' .angle-right-container').removeClass('animated fadeInRight delay-2s slow');
  $(section+' .angle-left-container').removeClass('animated fadeInLeft delay-2s slow');
  $(section+' .angle-down-container').removeClass('animated fadeInUp delay-2s slow');    
}
    function addWieso2Animations(){
      $('#wieso2-numbers').addClass('animated fadeInRightBig delay-1s fast');
      $('#wieso2-haushalt').addClass('animated fadeInLeftBig delay-1s slow');
      $('#partner1').addClass('animated fadeInLeftBig delay-2s slow');
      $('#partner2').addClass('animated fadeInRightBig delay-2s fast');
      $('#wieso2-verlag-number').addClass('animated fadeInLeftBig delay-3s slow');
      $('#wieso2-verlag-label').addClass('animated fadeInLeftBig delay-3s slow');
      $('#wieso2-druck-number').addClass('animated fadeInRightBig delay-3s fast');
      $('#wieso2-druck-label').addClass('animated fadeInRightBig delay-3s fast');
      $('#wieso2-header').addClass('animated fadeInDown delay-1s fast');
      $('#wieso2-details').addClass('animated fadeInDown delay-1s slow');
  $('#wieso2 .angle-right-container').addClass('animated fadeInRight delay-2s slow');
  $('#wieso2 .angle-left-container').addClass('animated fadeInLeft delay-2s slow');
  $('#wieso2 .angle-down-container').addClass('animated fadeInUp delay-2s slow');
    }
    function removeWieso2Animations(){
      $('#wieso2-numbers').removeClass('animated fadeInRightBig delay-1s fast');
      $('#wieso2-haushalt').removeClass('animated fadeInLeftBig delay-1s slow');
      $('#partner1').removeClass('animated fadeInLeftBig delay-2s slow');
      $('#partner2').removeClass('animated fadeInRightBig delay-2s fast');
      $('#wieso2-verlag-number').removeClass('animated fadeInLeftBig delay-3s slow');
      $('#wieso2-verlag-label').removeClass('animated fadeInLeftBig delay-3s slow');
      $('#wieso2-druck-number').removeClass('animated fadeInRightBig delay-3s fast');
      $('#wieso2-druck-label').removeClass('animated fadeInRightBig delay-3s fast');
      $('#wieso2-header').removeClass('animated fadeInDown delay-1s fast');
      $('#wieso2-details').removeClass('animated fadeInDown delay-1s slow');
  $('#wieso2 .angle-right-container').removeClass('animated fadeInRight delay-2s slow');
  $('#wieso2 .angle-left-container').removeClass('animated fadeInLeft delay-2s slow');
  $('#wieso2 .angle-down-container').removeClass('animated fadeInUp delay-2s slow'); 
    }

    function addWieso3Animations(){
      $('#wieso3-header').addClass('animated fadeInDown delay-1s fast');
      $('#wieso3-details').addClass('animated fadeInDown delay-1s slow');
    }

    function removeWieso3Animations(){
      $('#wieso3-header').removeClass('animated fadeInDown delay-1s fast');
      $('#wieso3-details').removeClass('animated fadeInDown delay-1s slow');
      $('#wieso3-details')
    }

    function addWie2Animations(){
    }
    function removeWie2Animations(){
      
    }

    function addWas2Animations(){
    }
    function removeWas2Animations(){
      
    }

    function addWer2Animations(){
    }
    function removeWer2Animations(){
      
    }

    

    function addWie3Animations(){

    }

    function removeWie3Animations(){
      
    }

    function addWas3Animations(){

    }

    function removeWas3Animations(){
      
    }

    function addWer3Animations(){

    }

    function removeWer3Animations(){
      
    }

    function initWiesoScrollify(){
      
      scrollWieso = $.scrollify({
        section : ".wieso-sub-section",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {
          if($.scrollify.current().attr('id')=="wieso1"){
            addSection1Animations('#wieso1')
          }
          if($.scrollify.current().attr('id')=="wieso2"){
            addWieso2Animations()
              }
              if($.scrollify.current().attr('id')=="wieso3"){
                addWieso3Animations()
                  }
        },
        after:function(index) {
          if($.scrollify.current().attr('id')!="wieso1"){
            removeSection1Animations('#wieso1')
        }
        if($.scrollify.current().attr('id')!="wieso2"){
          removeWieso2Animations();
            }
            if($.scrollify.current().attr('id')!="wieso3"){
              removeWieso3Animations();
                }
        },
        afterResize:function() {},
        afterRender:function() {}
      });
      addSection1Animations('#wieso1');
      scrollWie = null;
      scrollWas = null;
      scrollWer = null;  
      console.log("initWieso");
    };

    function initWieScrollify(){
 
      scrollWieso = null;
      scrollWie = $.scrollify({
        section : ".wie-sub-section",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {
          if($.scrollify.current().attr('id')=="wie1")
      {
        addSection1Animations('#wie1')
      }
        },
        after:function(index) {
          if($.scrollify.current().attr('id')!="wie1")
      {
        removeSection1Animations('#wie1')
      }
        },
        afterResize:function() {},
        afterRender:function() {}
      });
      addSection1Animations('#wie1');
      scrollWas = null;
      scrollWer = null;
      console.log("initWie");

    };

    function initWasScrollify(){
      
      scrollWieso = null;
      scrollWie = null;
      scrollWas = $.scrollify({
        section : ".was-sub-section",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {
          if($.scrollify.current().attr('id')=="was1")
      {
        addSection1Animations('#was1');
      }
        },
        after:function(index) {
          if($.scrollify.current().attr('id')!="was1")
      {
        removeSection1Animations('#was1')
      }
        },
        afterResize:function() {},
        afterRender:function() {}
      });
      addSection1Animations('#was1');
      scrollWer = null;
      console.log("initWas");
    };

    function initWerScrollify(){
      
      scrollWieso = null;
      scrollWie = null;
      scrollWas = null;
      scrollWer = $.scrollify({
        section : ".wer-sub-section",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {
          if($.scrollify.current().attr('id')=="wer1")
      {
        addSection1Animations('#wer1')
      }
        },
        after:function(index) {
          if($.scrollify.current().attr('id')!="wer1")
      {
        removeSection1Animations('#wer1')
      }
        },
        afterResize:function() {},
        afterRender:function() {}
      });
      addSection1Animations('#wer1');
      console.log("initWer");
    };

    function sidebarWieso(number){
      initWiesoScrollify();
      $('#fullpage').fullpage.moveTo('home',0);
      var i = 1;
      window.setTimeout(function(){   
         }, 2000);

    while(i<number){
      $.scrollify.next();
      console.log("wieso next "+ i)
      i++;
    }
      /* $('html, body').animate({
          scrollTop: $("#was"+number).offset().top
        }, 1000); */
  }

  function sidebarWie(number){
    initWieScrollify();
    $('#fullpage').fullpage.moveTo('home',1);
    var i = 1;
    window.setTimeout(function(){   
    }, 2000);
    while(i<number){
      $.scrollify.next();
      console.log("wie next "+ i)
      i++;
    }
    /* $('html, body').animate({
        scrollTop: $("#was"+number).offset().top
      }, 1000); */
}

    function sidebarWas(number){
      initWasScrollify();
      $('#fullpage').fullpage.moveTo('home',2);      
      var i = 1;
      window.setTimeout(function(){   
      }, 2000);
    while(i<number){
      $.scrollify.next();
      console.log("was next "+ i)
      i++;
    }
      /* $('html, body').animate({
          scrollTop: $("#was"+number).offset().top
        }, 1000); */
  }


  function sidebarWer(number){
    initWerScrollify();
    $('#fullpage').fullpage.moveTo('home',3);
    var i = 1;
    window.setTimeout(function(){   
    }, 2000);
    while(i<number){
      $.scrollify.next();
      console.log("wer next "+ i)
      i++;
    }
    /* $('html, body').animate({
        scrollTop: $("#was"+number).offset().top
      }, 1000); */
}

    $(document).ready(function () {

      //check element is in viewport
      $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        
        return elementBottom > viewportTop && elementTop < viewportBottom;
        };


      initWiesoScrollify();

      $("#loading").delay(3000).fadeOut("slow");
      $('#fullpage').fullpage({
        licenseKey: '',
        anchors: ['home'],
        controlArrows: false
        
      });

        $('.sidebarCollapse').on('click', function () {
          console.log('collapse');
            $('#sidebar').toggleClass('active');
            $('.sidebarCollapse').toggleClass('active');
            
        });
        $('#sidebarClose').on('click', function () {
          console.log('collapse');
          $('#sidebar').toggleClass('active');
          $('.sidebarCollapse').toggleClass('active');         
      });

        $('#sidebar a').on('click', function () {
          $('#sidebar').toggleClass('active');
          $('#sidebarCollapse').toggleClass('active');   
      });

        $('#sectionContent').on('click', function (){
          if($('#sidebar').hasClass('active')){
            $('#sidebar').toggleClass('active');
            $('#sidebarCollapse').toggleClass('active');   
          }
        })
      
        $("#sidebar-wieso-1").click(function() {
          sidebarWieso(1);
      });

        $("#sidebar-wieso-2").click(function() {
          sidebarWieso(2);
      });

      $("#sidebar-wieso-3").click(function() {
        sidebarWieso(3);
    });

      $("#sidebar-wie-1").click(function() {
        sidebarWie(1);
    });


      $("#sidebar-wie-2").click(function() {
        sidebarWie(2);
    });

    $("#sidebar-wie-3").click(function() {
      sidebarWie(3);
  });

  $("#sidebar-wie-4").click(function() {
    sidebarWie(4);
});
    $("#sidebar-was-1").click(function() {
      sidebarWas(1);
  });
    $("#sidebar-was-2").click(function() {
      sidebarWas(2);
  });

  $("#sidebar-was-3").click(function() {
    sidebarWas(3);
});

  $("#sidebar-was-4").click(function() {
    sidebarWas(4);
});

$("#sidebar-was-5").click(function() {
  sidebarWas(5);
});
$("#sidebar-was-6").click(function() {
  sidebarWas(6);
});

$("#sidebar-was-7").click(function() {
  sidebarWas(7);
});

$("#sidebar-wer-1").click(function() {
  sidebarWer(1);
});
  $("#sidebar-wer-2").click(function() {
    sidebarWer(2);
});
$("#sidebar-wer-3").click(function() {
  sidebarWer(3);
});

    $(".sub-navbar-wieso").click(function() {
      initWiesoScrollify();
      $('#fullpage').fullpage.moveTo('home',0);
      
  });
  $(".sub-navbar-wie").click(function() {
    initWieScrollify();
    $('#fullpage').fullpage.moveTo('home',1);   
});
$(".sub-navbar-was").click(function() {
  initWasScrollify();
  $('#fullpage').fullpage.moveTo('home',2); 
});
$(".sub-navbar-wer").click(function() {
  initWerScrollify();
  $('#fullpage').fullpage.moveTo('home',3);
  
});

$("#wieso1-right-arrow").click(function() {
  removeSection1Animations('#wieso1');
  initWieScrollify();
  $('#fullpage').fullpage.moveTo('home',1);
});

$("#wieso1-angle-down-container").click(function() {
  removeSection1Animations('#wieso1');
  $.scrollify.next();
});

$("#wie1-angle-down-container").click(function() {
  removeSection1Animations('#wie1');
  $.scrollify.next();
});

$("#was1-angle-down-container").click(function() {
  removeSection1Animations('#was1');
  $.scrollify.next();
});

$("#wer1-angle-down-container").click(function() {
  removeSection1Animations('#wer1');
  $.scrollify.next();
});

$("#wieso2-angle-down-container").click(function() {
  removeWieso2Animations();
  $.scrollify.next();
});

$("#wie2-angle-down-container").click(function() {
  removeWie2Animations();
  $.scrollify.next();
});

$("#was2-angle-down-container").click(function() {
  removeWas2Animations();
  $.scrollify.next();
});

$("#wer2-angle-down-container").click(function() {
  removeWer2Animations();
  $.scrollify.next();
});

$("#wieso3-angle-down-container").click(function() {
  removeWieso3Animations();
  $.scrollify.next();
});

$("#wie3-angle-down-container").click(function() {
  removeWie3Animations();
  $.scrollify.next();
});

$("#was3-angle-down-container").click(function() {
  removeWas3Animations();
  $.scrollify.next();
});

$("#wer3-angle-down-container").click(function() {
  removeWer3Animations();
  $.scrollify.next();
});


$('#wie1 .angle-right-button').on('click', function () {
  removeSection1Animations('#wie1');
  initWasScrollify();
  console.log("click right")
  $('#fullpage').fullpage.moveTo('home',2);
});

$('#wie1 .angle-left-button').on('click', function () {
  removeSection1Animations('#wie1');
  initWiesoScrollify();
  console.log("click left")
  $('#fullpage').fullpage.moveTo('home',0);
});

$('#was1 .angle-right-button').on('click', function () {
  removeSection1Animations('#was1');
  initWerScrollify();
  console.log("click right")
  $('#fullpage').fullpage.moveTo('home',3);
});

$('#was1 .angle-left-button').on('click', function () {
  removeSection1Animations('#was1');
  initWieScrollify();
  console.log("click left")
  $('#fullpage').fullpage.moveTo('home',1);
});

$('#was-list-anzeigen').on('click', function () {
  removeSection1Animations('#was1');
  $.scrollify.move("#2");
});

$('#was-list-verteilung').on('click', function () {
  removeSection1Animations('#was1');
  $.scrollify.move("#3");
});

$('#was-list-druck').on('click', function () {
  removeSection1Animations('#was1');
  $.scrollify.move("#4");
});

$('#was-list-plakate').on('click', function () {
  removeSection1Animations('#was1');
  $.scrollify.move("#5");
});

$('#was-list-digital').on('click', function () {
  removeSection1Animations('#was1');
  $.scrollify.move("#6");
});

$('#was-list-rundfunk').on('click', function () {
  removeSection1Animations('#was1');
  $.scrollify.move("#7");
});




$('#wer1 .angle-left-button').on('click', function () {
  removeSection1Animations('#wer1');
  initWasScrollify();
  console.log("click left")
  $('#fullpage').fullpage.moveTo('home',2);
});


textFit($('#wieso1-question-container'),{
  widthOnly: true,
  maxFontSize: 320
});

textFit($('#wieso1-buzzword'),{
  widthOnly: true,
  maxFontSize: 320
  
});



textFit($('#wieso2-umsatz-number'),{
  widthOnly: false,
  maxFontSize: 160
});
textFit($('#wieso2-umsatz-label'),{
  widthOnly: false,
  maxFontSize: 16
});
textFit($('#wieso2-haushalt-number'),{
  widthOnly: false,
  maxFontSize: 160
});
textFit($('#wieso2-haushalt-label'),{
  widthOnly: false,
  maxFontSize: 16
});
textFit($('#wieso2-verteilpartner-number'),{
  widthOnly: false,
  maxFontSize: 160
});
textFit($('#wieso2-verteilpartner-label'),{
  widthOnly: false,
  maxFontSize: 16
});
textFit($('#wieso2-promotion-number'),{
  widthOnly: false,
  maxFontSize: 160
});
textFit($('#wieso2-promotion-label'),{
  widthOnly: false,
  maxFontSize: 16
});
textFit($('#wieso2-partner-home-number'),{
  widthOnly: false,
  maxFontSize: 320
});
textFit($('#wieso2-partner-home-label'),{
  widthOnly: false,
  maxFontSize: 16
});

textFit($('#wieso2-verlag-number'),{
  widthOnly: false,
  maxFontSize: 320
});
textFit($('#wieso2-verlag-lable'),{
  widthOnly: false,
  maxFontSize: 16
});

textFit($('#wieso2-druck-number'),{
  widthOnly: false,
  maxFontSize: 320
});
textFit($('#wieso2-druck-lable'),{
  widthOnly: false,
  maxFontSize: 16
});
    });
  }
}