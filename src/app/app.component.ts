import { Component } from '@angular/core';
import { fadeInAnimation } from './_animations/fadeInAnimation';

declare var textFit: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation]
})
export class AppComponent {

  constructor() { }

  ngOnInit() {
    //scrollify variables
    var scrollWieso;
    var scrollWie;
    var scrollWas;
    var scrollWer;


    function addWasSectionAnimations(section) {
      $(section + ' .was-header-container').addClass('animated fadeInDown  fast');
      $(section + ' .was-subheader-container').addClass('animated fadeInDown slow');
      $(section + ' .was-details-container').addClass('animated fadeInDown  fast');
      $(section + ' .was-text-wrapper').addClass('animated fadeInDown  fast');
      $(section + ' .was-skill-list-container').addClass('animated fadeInRightBig  slow');
      $(section + ' .angle-right-container').addClass('animated fadeInRight  slow');
      $(section + ' .angle-left-container').addClass('animated fadeInLeft  slow');
      $(section + ' .angle-down-container').addClass('animated fadeInUp  slow');
    }

    function removeWasSectionAnimations(section) {
      $(section + ' .was-header-container').removeClass('animated fadeInDown  fast');
      $(section + ' .was-subheader-container').removeClass('animated fadeInDown slow');
      $(section + ' .was-details-container').removeClass('animated fadeInDown  fast');
      $(section + ' .was-text-wrapper').removeClass('animated fadeInDown  fast');
      $(section + ' .was-skill-list-container').removeClass('animated fadeInRightBig  slow');
      $(section + ' .angle-right-container').removeClass('animated fadeInRight  slow');
      $(section + ' .angle-left-container').removeClass('animated fadeInLeft  slow');
      $(section + ' .angle-down-container').removeClass('animated fadeInUp  slow');
    }

    function addSection1Animations(section) {
      $(section + '-question').addClass('animated fadeInDown  fast');
      $(section + '-divider').addClass('animated fadeInDown  fast');
      $(section + '-buzzword').addClass('animated fadeInDown  slow');
      $(section + '-details').addClass('animated fadeInDown  slow');
      $(section + '-list').addClass('animated fadeInDown  slow');
      $(section + '-list-divider-top').addClass('animated fadeInDown  slow');
      $(section + '-list-divider-bottom').addClass('animated fadeInDown slow');
      $(section + ' .angle-right-container').addClass('animated fadeInRight  slow');
      $(section + ' .angle-left-container').addClass('animated fadeInLeft  slow');
      $(section + ' .angle-down-container').addClass('animated fadeInUp slow');
    }

    function removeSection1Animations(section) {
      $(section + '-question').removeClass('animated fadeInDown fast');
      $(section + '-divider').removeClass('animated fadeInDown fast');
      $(section + '-buzzword').removeClass('animated fadeInDown slow');
      $(section + '-details').removeClass('animated fadeInDown  slow');
      $(section + '-list').removeClass('animated fadeInDown  slow');
      $(section + '-list-divider-top').removeClass('animated fadeInDown  slow');
      $(section + '-list-divider-bottom').removeClass('animated fadeInDown  slow');
      $(section + ' .angle-right-container').removeClass('animated fadeInRight  slow');
      $(section + ' .angle-left-container').removeClass('animated fadeInLeft  slow');
      $(section + ' .angle-down-container').removeClass('animated fadeInUp  slow');
    }
    function addWieso2Animations() {
      $('#wieso2-numbers').addClass('animated fadeInRightBig fast');
      $('#wieso2-haushalt').addClass('animated fadeInLeftBig slow');
      $('#partner1').addClass('animated fadeInLeftBig  slow');
      $('#partner2').addClass('animated fadeInRightBig  fast');
      $('#wieso2-verlag-number').addClass('animated fadeInLeftBig slow');
      $('#wieso2-verlag-label').addClass('animated fadeInLeftBig slow');
      $('#wieso2-druck-number').addClass('animated fadeInRightBig fast');
      $('#wieso2-druck-label').addClass('animated fadeInRightBig fast');
      $('#wieso2-header').addClass('animated fadeInDown fast');
      $('#wieso2-details').addClass('animated fadeInDown slow');
      $('#wieso2 .angle-right-container').addClass('animated fadeInRight  slow');
      $('#wieso2 .angle-left-container').addClass('animated fadeInLeft  slow');
      $('#wieso2 .angle-down-container').addClass('animated fadeInUp  slow');
    }
    function removeWieso2Animations() {
      $('#wieso2-numbers').removeClass('animated fadeInRightBig fast');
      $('#wieso2-haushalt').removeClass('animated fadeInLeftBig slow');
      $('#partner1').removeClass('animated fadeInLeftBig  slow');
      $('#partner2').removeClass('animated fadeInRightBig  fast');
      $('#wieso2-verlag-number').removeClass('animated fadeInLeftBig slow');
      $('#wieso2-verlag-label').removeClass('animated fadeInLeftBig slow');
      $('#wieso2-druck-number').removeClass('animated fadeInRightBig fast');
      $('#wieso2-druck-label').removeClass('animated fadeInRightBig fast');
      $('#wieso2-header').removeClass('animated fadeInDown fast');
      $('#wieso2-details').removeClass('animated fadeInDown slow');
      $('#wieso2 .angle-right-container').removeClass('animated fadeInRight  slow');
      $('#wieso2 .angle-left-container').removeClass('animated fadeInLeft  slow');
      $('#wieso2 .angle-down-container').removeClass('animated fadeInUp  slow');
    }

    function addWieso3Animations() {
      $('#wieso3-header').addClass('animated fadeInDown fast');
      $('#wieso3-details').addClass('animated fadeInDown slow');
      $('#customer-row-1').addClass('animated fadeInLeft fast');
      $('#customer-row-2').addClass('animated fadeInRight slow');
      $('#customer-row-3').addClass('animated fadeInLeft  fast');
      $('#customer-row-4').addClass('animated fadeInRight  slow');
      $('#customer-row-5').addClass('animated fadeInLeft fast');
      $('#wieso3 .angle-right-container').addClass('animated fadeInRight  slow');
    }

    function removeWieso3Animations() {
      $('#wieso3-header').removeClass('animated fadeInDown fast');
      $('#wieso3-details').removeClass('animated fadeInDown slow');
      $('#customer-row-1').removeClass('animated fadeInLeft fast');
      $('#customer-row-2').removeClass('animated fadeInRight slow');
      $('#customer-row-3').removeClass('animated fadeInLeft  fast');
      $('#customer-row-4').removeClass('animated fadeInRight  slow');
      $('#customer-row-5').removeClass('animated fadeInLeft fast');
      $('#wieso3 .angle-right-container').removeClass('animated fadeInRight  slow');
    }

    function addWie2Animations() {

      $('#wie2-header').addClass('animated fadeInDown slow');
      $('#wie2-subheader').addClass('animated fadeInDown  fast');
      $('#wie2-details').addClass('animated fadeInDown  slow');
      $('#wie2-content').addClass('animated fadeInDown fast');
      $('#wie2-carousel-wrapper').addClass('animated fadeInDown fast');
      $('#wie2 .angle-right-container').addClass('animated fadeInRight  slow');
      $('#wie2 .angle-left-container').addClass('animated fadeInLeft  slow');
      $('#wie2 .angle-down-container').addClass('animated fadeInUp  slow');

    }

    function removeWie2Animations() {
      $('#wie2-header').removeClass('animated fadeInDown slow');
      $('#wie2-subheader').removeClass('animated fadeInDown  fast');
      $('#wie2-details').removeClass('animated fadeInDown  slow');
      $('#wie2-content').removeClass('animated fadeInDown fast');
      $('#wie2-carousel-wrapper').removeClass('animated fadeInDown fast');
      $('#wie2 .angle-right-container').removeClass('animated fadeInRight  slow');
      $('#wie2 .angle-left-container').removeClass('animated fadeInLeft  slow');
      $('#wie2 .angle-down-container').removeClass('animated fadeInUp  slow');
    }


    function addWie3Animations() {
      $('#wie3-header').addClass('animated fadeInDown slow');
      $('#wie3-red-header').addClass('animated fadeInDown  slow');
      $('#wie3-detail').addClass('animated fadeInDown  fast');
      $('#wie3 .angle-right-container').addClass('animated fadeInRight  slow');
      $('#wie3 .angle-left-container').addClass('animated fadeInLeft  slow');
      $('#wie3 .angle-down-container').addClass('animated fadeInUp  slow');
    }

    function removeWie3Animations() {
      $('#wie3-header').removeClass('animated fadeInDown slow');
      $('#wie3-red-header').removeClass('animated fadeInDown  fast');
      $('#wie3-detail').removeClass('animated fadeInDown  slow');
      $('#wie3 .angle-right-container').removeClass('animated fadeInRight  slow');
      $('#wie3 .angle-left-container').removeClass('animated fadeInLeft  slow');
      $('#wie3 .angle-down-container').removeClass('animated fadeInUp  slow');
    }


    function addWie4Animations() {
      $('#wie4-text-box').addClass('animated fadeInDown slow');
      $('#wie4-subheader').addClass('animated fadeInDown  slow');
      $('#wie4-header').addClass('animated fadeInDown fast');
      $('#wie4-details').addClass('animated fadeInDown  fast');
      $('#regiopinion-logo').addClass('animated fadeIn slow');
      $('#wie4 .angle-right-container').addClass('animated fadeInRight  slow');
      $('#wie4 .angle-left-container').addClass('animated fadeInLeft  slow');
      $('#wie4 .angle-down-container').addClass('animated fadeInUp  slow');
    }

    function removeWie4Animations() {
      $('#wie4-text-box').removeClass('animated fadeInDown slow');
      $('#wie4-subheader').removeClass('animated fadeInDown  slow');
      $('#wie4-header').removeClass('animated fadeInDown fast');
      $('#wie4-details').removeClass('animated fadeInDown  fast');
      $('#regiopinion-logo').removeClass('animated fadeIn slow');
      $('#wie4 .angle-right-container').removeClass('animated fadeInRight  slow');
      $('#wie4 .angle-left-container').removeClass('animated fadeInLeft  slow');
      $('#wie4 .angle-down-container').removeClass('animated fadeInUp  slow');
    }

    function addWer2Animations() {
      $('#wer2 .angle-right-container').addClass('animated fadeInRight  slow');
      $('#wer2 .angle-left-container').addClass('animated fadeInLeft  slow');
      $('#wer2 .angle-down-container').addClass('animated fadeInUp  slow');
    }
    function removeWer2Animations() {
      $('#wer2 .angle-right-container').removeClass('animated fadeInRight  slow');
      $('#wer2 .angle-left-container').removeClass('animated fadeInLeft  slow');
      $('#wer2 .angle-down-container').removeClass('animated fadeInUp  slow');
    }

    function addWer3Animations() {
      $('#wer3 .angle-right-container').addClass('animated fadeInRight  slow');
      $('#wer3 .angle-left-container').addClass('animated fadeInLeft  slow');
      $('#wer3 .angle-down-container').addClass('animated fadeInUp  slow');
    }

    function removeWer3Animations() {
      $('#wer3 .angle-right-container').removeClass('animated fadeInRight  slow');
      $('#wer3 .angle-left-container').removeClass('animated fadeInLeft  slow');
      $('#wer3 .angle-down-container').removeClass('animated fadeInUp  slow');
    }

    function initWiesoScrollify() {
      /* scrollWie = null;
      scrollWas = null;
      scrollWer = null;
      scrollWieso = null;
      scrollWieso = $.scrollify({
        section: ".wieso-sub-section",
        interstitialSection: ".wieso-footer",
        scrollSpeed: 700,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function () {
          if ($.scrollify.current().attr('id') == "wieso1") {
            addSection1Animations('#wieso1')
            $("#wieso1-mann-background").addClass('animated fadeInUp slow');
            $('#navbarTop').removeClass('navbarHidden');
            $('#enormediaLogo').removeClass('logoHidden');
          }
          if ($.scrollify.current().attr('id') == "wieso2") {
            addWieso2Animations()
          }
          if ($.scrollify.current().attr('id') == "wieso3") {
            addWieso3Animations()
          }
        },
        after: function (index) {
          if ($.scrollify.current().attr('id') != "wieso1") {
            removeSection1Animations('#wieso1');
            $("#wieso1-mann-background").removeClass('animated fadeInUp slow');
            $('#navbarTop').addClass('navbarHidden');
            $('#enormediaLogo').addClass('logoHidden');
          }
          if ($.scrollify.current().attr('id') != "wieso2") {
            removeWieso2Animations();
          }
          if ($.scrollify.current().attr('id') != "wieso3") {
            removeWieso3Animations();
          }
        },
        afterResize: function () {
          console.log("resize Wieso");
          $.scrollify.instantMove("#1");
          $.scrollify.update();
          fitTexts();


        },
        afterRender: function () {
          console.log("render Wieso");

        }
      });

      addSection1Animations('#wieso1');
      $("#wieso1-mann-background").addClass('animated fadeInUp slow');
      console.log($.scrollify); */
    };

    function initWieScrollify() {
/* 
      scrollWie = null;
      scrollWas = null;
      scrollWer = null;
      scrollWieso = null;
      scrollWie = $.scrollify({
        section: ".wie-sub-section",
        interstitialSection: ".wie-footer",
        easing: "easeOutExpo",
        scrollSpeed: 700,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function () {
          if ($.scrollify.current().attr('id') == "wie1") {
            addSection1Animations('#wie1');
            $("#wie1-frau-background").addClass('animated fadeInLeft slow');
            $("#wie1-mann-background").addClass('animated fadeInRight slow');
            $('#navbarTop').removeClass('navbarHidden');
            $('#enormediaLogo').removeClass('logoHidden');
          }
          if ($.scrollify.current().attr('id') == "wie2") {
            addWie2Animations();
          }
          if ($.scrollify.current().attr('id') == "wie3") {
            addWie3Animations();
          }
          if ($.scrollify.current().attr('id') == "wie4") {
            addWie4Animations();
          }
        },
        after: function (index) {
          if ($.scrollify.current().attr('id') != "wie1") {
            removeSection1Animations('#wie1');
            $("#wie1-frau-background").removeClass('animated fadeInLeft slow');
            $("#wie1-mann-background").removeClass('animated fadeInRight slow');
            $('#navbarTop').addClass('navbarHidden');
            $('#enormediaLogo').addClass('logoHidden');
          }
          if ($.scrollify.current().attr('id') != "wie2") {
            removeWie2Animations();
          }
          if ($.scrollify.current().attr('id') != "wie3") {
            removeWie3Animations();
          }
          if ($.scrollify.current().attr('id') != "wie4") {
            removeWie4Animations();
          }
        },
        afterResize: function () {
          $.scrollify.instantMove("#1");
          $.scrollify.update();
          fitTexts();
        },
        afterRender: function () { }
      }); */
      addSection1Animations('#wie1');
      $("#wie1-frau-background").addClass('animated fadeInLeft slow');
      $("#wie1-mann-background").addClass('animated fadeInRight slow');
      console.log($.scrollify);

    };

    function initWasScrollify() {

      /* scrollWie = null;
      scrollWas = null;
      scrollWer = null;
      scrollWieso = null;
      scrollWas = $.scrollify({
        section: ".was-sub-section",
        interstitialSection: ".was-footer",
        easing: "easeOutExpo",
        scrollSpeed: 700,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function () {
          if ($.scrollify.current().attr('id') == "was1") {
            addSection1Animations('#was1');
            $("#was1-hand-rechts-background").addClass('animated fadeInLeft slow');
      $("#was1-hand-links-background").addClass('animated fadeInRight slow');
            $('#navbarTop').removeClass('navbarHidden');
            $('#enormediaLogo').removeClass('logoHidden');
          }
          if ($.scrollify.current().attr('id') == "was2") {
            addWasSectionAnimations('#was2');
          }
          if ($.scrollify.current().attr('id') == "was3") {
            addWasSectionAnimations('#was3');
          }
          if ($.scrollify.current().attr('id') == "was4") {
            addWasSectionAnimations('#was4');
          }
          if ($.scrollify.current().attr('id') == "was5") {
            addWasSectionAnimations('#was5');
          }
          if ($.scrollify.current().attr('id') == "was6") {
            addWasSectionAnimations('#was6');
          }
          if ($.scrollify.current().attr('id') == "was7") {
            addWasSectionAnimations('#was7');
          }
        },
        after: function (index) {
          if ($.scrollify.current().attr('id') != "was1") {
            removeSection1Animations('#was1');
            $("#was1-hand-rechts-background").removeClass('animated fadeInLeft slow');
      $("#was1-hand-links-background").removeClass('animated fadeInRight slow');
            $('#navbarTop').addClass('navbarHidden');
            $('#enormediaLogo').addClass('logoHidden');
          }
          if ($.scrollify.current().attr('id') != "was2") {
            removeWasSectionAnimations('#was2');
          }
          if ($.scrollify.current().attr('id') != "was3") {
            removeWasSectionAnimations('#was3');
          }
          if ($.scrollify.current().attr('id') != "was4") {
            removeWasSectionAnimations('#was4');
          }
          if ($.scrollify.current().attr('id') != "was5") {
            removeWasSectionAnimations('#was5');
          }
          if ($.scrollify.current().attr('id') != "was6") {
            removeWasSectionAnimations('#was6');
          }
          if ($.scrollify.current().attr('id') != "was7") {
            removeWasSectionAnimations('#was7');
          }
        },
        afterResize: function () {
          $.scrollify.instantMove("#1");
          $.scrollify.update();
          fitTexts();
        },
        afterRender: function () { }
      }); */
      addSection1Animations('#was1');
      $("#was1-hand-rechts-background").addClass('animated fadeInLeft slow');
      $("#was1-hand-links-background").addClass('animated fadeInRight slow');
      console.log($.scrollify);
    };

    function initWerScrollify() {

      /* scrollWie = null;
      scrollWas = null;
      scrollWer = null;
      scrollWieso = null;
      scrollWer = $.scrollify({
        section: ".wer-sub-section",
        interstitialSection: ".wer-footer",
        easing: "easeOutExpo",
        scrollSpeed: 700,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function () {
          if ($.scrollify.current().attr('id') == "wer1") {
            addSection1Animations('#wer1');
            $("#wer1-team-background").addClass('animated fadeInUp slow');
            $('#navbarTop').removeClass('navbarHidden');
            $('#enormediaLogo').removeClass('logoHidden');
          }
          if ($.scrollify.current().attr('id') == "wer2") {
            addWer2Animations();
          }
          if ($.scrollify.current().attr('id') == "wer3") {
            addWer3Animations();
          }
        },
        after: function (index) {
          if ($.scrollify.current().attr('id') != "wer1") {
            removeSection1Animations('#wer1');
            $("#wer1-team-background").removeClass('animated fadeInUp slow');
            $('#navbarTop').addClass('navbarHidden');
            $('#enormediaLogo').addClass('logoHidden');
          }
          if ($.scrollify.current().attr('id') != "wer2") {
            removeWer2Animations();
          }
          if ($.scrollify.current().attr('id') != "wer3") {
            removeWer3Animations();
          }
        },
        afterResize: function () {
          $.scrollify.instantMove("#1");
          $.scrollify.update();
          fitTexts();
        },
        afterRender: function () { }
      }); */
      addSection1Animations('#wer1');
      $("#wer1-team-background").addClass('animated fadeInUp slow');
      console.log("initWer");
      console.log($.scrollify);
    };

    function sidebarWieso(number) {
     /*  $.scrollify.instantMove('#1'); */
      initWiesoScrollify();
      $('#fullpage').fullpage.moveTo('home', 0);
     /*  $.scrollify.instantMove('#'+number); */
    }

    function sidebarWie(number) {
     /*  $.scrollify.instantMove('#1'); */
      initWieScrollify();
      $('#fullpage').fullpage.moveTo('home', 1);
     /*  $.scrollify.instantMove('#'+number); */
    }

    function sidebarWas(number) {

      /* $.scrollify.instantMove('#1'); */
      initWasScrollify();
      $('#fullpage').fullpage.moveTo('home', 2);
    /*   $.scrollify.instantMove('#'+number); */
    }


    function sidebarWer(number) {
      /* $.scrollify.instantMove('#1'); */
      initWerScrollify();
      $('#fullpage').fullpage.moveTo('home', 3);
      /* $.scrollify.instantMove('#'+number); */
    }

    function fitTexts() {
      if ($('#wieso1-question-container').is(':visible')) {
        textFit($('#wieso1-question-container'), {
          widthOnly: true,
          maxFontSize: 320
        });
      }

      if ($('#wieso1-buzzword').is(':visible')) {
        textFit($('#wieso1-buzzword'), {
          widthOnly: true,
          maxFontSize: 320
        });
      }

      if ($('#wie1-buzzword').is(':visible')) {
      textFit($('#wie1-buzzword'), {
        widthOnly: true,
        maxFontSize: 320
      });
    }
    if ($('#was1-buzzword').is(':visible')) {
      textFit($('#was1-buzzword'), {
        widthOnly: true,
        maxFontSize: 320
      });

    }
    if ($('#wer1-buzzword').is(':visible')) {
      textFit($('#wer1-buzzword'), {
        widthOnly: true,
        maxFontSize: 320

      });
    }


      if ($('#wieso2-umsatz-number').is(':visible')) {
        console.log('fit umsatz number')
        textFit($('#wieso2-umsatz-number'), {
          widthOnly: false,
          maxFontSize: 160
        });
      }

      if ($('#wieso2-umsatz-label').is(':visible')) {
        textFit($('#wieso2-umsatz-label'), {
          widthOnly: false,
          maxFontSize: 16
        });
      }
      if ($('#wieso2-haushalt-number').is(':visible')) {
        textFit($('#wieso2-haushalt-number'), {
          widthOnly: false,
          maxFontSize: 160
        });
      }
      if ($('#wieso2-haushalt-label').is(':visible')) {
        textFit($('#wieso2-haushalt-label'), {
          widthOnly: false,
          maxFontSize: 16
        });
      }
      if ($('#wieso2-verteilpartner-number').is(':visible')) {
        textFit($('#wieso2-verteilpartner-number'), {
          widthOnly: false,
          maxFontSize: 160
        });
      }
      if ($('#wieso2-verteilpartner-label').is(':visible')) {
        textFit($('#wieso2-verteilpartner-label'), {
          widthOnly: false,
          maxFontSize: 16
        });
      }
      if ($('#wieso2-promotion-number').is(':visible')) {
        textFit($('#wieso2-promotion-number'), {
          widthOnly: false,
          maxFontSize: 160
        });
      }
      if ($('#wieso2-promotion-label').is(':visible')) {
        textFit($('#wieso2-promotion-label'), {
          widthOnly: false,
          maxFontSize: 16
        });
      }
      if ($('#wieso2-partner-home-number').is(':visible')) {
        textFit($('#wieso2-partner-home-number'), {
          widthOnly: false,
          maxFontSize: 320
        });
      }
      if ($('#wieso2-partner-home-label').is(':visible')) {
        textFit($('#wieso2-partner-home-label'), {
          widthOnly: false,
          maxFontSize: 16
        });
      }
      if ($('#wieso2-verlag-number').is(':visible')) {
        textFit($('#wieso2-verlag-number'), {
          widthOnly: false,
          maxFontSize: 320
        });
      }
      if ($('#wieso2-verlag-lable').is(':visible')) {
        textFit($('#wieso2-verlag-lable'), {
          widthOnly: false,
          maxFontSize: 16
        });
      }
      if ($('#wieso2-druck-number').is(':visible')) {
        textFit($('#wieso2-druck-number'), {
          widthOnly: false,
          maxFontSize: 320
        });
      }
      if ($('#wieso2-druck-lable').is(':visible')) {
        textFit($('#wieso2-druck-lable'), {
          widthOnly: false,
          maxFontSize: 16
        });
      }

      if ($('#wie2-header').is(':visible')) {
        textFit($('#wie2-header'), {
          widthOnly: false,
          maxFontSize: 18,
          multiLine: true
        });
      }

      if ($('#wie2-subheader').is(':visible')) {
        textFit($('#wie2-subheader'), {
          widthOnly: false,
          maxFontSize: 22,
          minFontSize: 10,
          multiLine: true
        });
      }

      if ($('#wie2-details').is(':visible')) {
        textFit($('#wie2-details'), {
          widthOnly: false,
          maxFontSize: 16,
          minFontSize: 10,
          multiLine: true
        });
      }

      if ($('#wie3-red-header-wrapper').is(':visible')) {
        textFit($('#wie3-red-header-wrapper'), {
          widthOnly: false,
          maxFontSize: 100,
          minFontSize: 10,
          multiLine: true
        });
      }
      
    }

    function moveToWieso(){
      $('#fullpage').fullpage.moveTo('home',0);
    }
    
    function initFullpage() {
      var lastSection = false;
      var moveToFirstSection = false;
      $('#fullpage').fullpage({
        licenseKey: 'EA26EC0D-13A84407-961F3DBD-832CEB96',
        anchors: ['home', 'home2', 'home2'],
        controlArrows: false,
        scrollOverflow: true,
        interlockedSlides: true,
        bigSectionsDestination: 'top',
        interlockedSlidesKey: '2A857F2B-2A4A41C7-AB505494-C1AC778A',
        afterSlideLoad: function(section, origin, destination, direction){
          console.log({
            section: section,
            origin: origin,
            destination: destination,
            direction: direction
          });
        },
        onSlideLeave: function(section, origin, destination, direction){
          console.log({
            section: section,
            origin: origin,
            destination: destination,
            direction: direction
          });    
          
        },onLeave: function(origin, destination, direction){

          if(lastSection == true && direction =='down'){
            console.log("moveTo");
			      return false;
          } 
          
          console.log("onLeave:"+ lastSection);
          }
        , afterLoad: function(anchorLink, index){
          
          var activeSlide = $('#fullpage').fullpage.getActiveSlide().index;
          if(activeSlide == 0 && index.index == 2){
            lastSection = true;
          } else if (activeSlide == 1 && index.index == 3){
            lastSection = true;;
          } else if (activeSlide == 2 && index.index == 6) {
            lastSection = true;
          } else if (activeSlide == 3 && index.index == 2) {
            lastSection = true;
          } else {
            lastSection = false;
          }

          console.log("activeSlide: "+ activeSlide + " sectionIndex: " + index.index + " lastSection:" + lastSection);
      }
      });
    }
 
//-----------------------------JQuery-----------------------
    $(document).ready(function () {
      fitTexts();     
      initFullpage()
      //--------------------------Kontaktformular---------------------


      //--------------------------SIDEBAR---------------------
      $('.sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.sidebarCollapse').toggleClass('active');
      });

      $('#sidebarClose').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.sidebarCollapse').toggleClass('active');
      });

      $('#sidebar a').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.sidebarCollapse').toggleClass('active');
      });

      $('#sectionContent').on('click', function () {
        if ($('#sidebar').hasClass('active')) {
          $('#sidebar').toggleClass('active');
          $('#sidebarCollapse').toggleClass('active');
        }
      })

      $("#sidebar-wieso-1").click(function () {
        sidebarWieso(1);
      });

      $("#sidebar-wieso-2").click(function () {
        sidebarWieso(2);
      });

      $("#sidebar-wieso-3").click(function () {
        sidebarWieso(3);
      });

      $("#sidebar-wie-1").click(function () {
        sidebarWie(1);
      });

      $("#sidebar-wie-2").click(function () {
        sidebarWie(2);
      });

      $("#sidebar-wie-3").click(function () {
        sidebarWie(3);
      });

      $("#sidebar-wie-4").click(function () {
        sidebarWie(4);
      });
      $("#sidebar-was-1").click(function () {
        sidebarWas(1);
      });
      $("#sidebar-was-2").click(function () {
        sidebarWas(2);
      });

      $("#sidebar-was-3").click(function () {
        sidebarWas(3);
      });

      $("#sidebar-was-4").click(function () {
        sidebarWas(4);
      });

      $("#sidebar-was-5").click(function () {
        sidebarWas(5);
      });
      $("#sidebar-was-6").click(function () {
        sidebarWas(6);
      });

      $("#sidebar-was-7").click(function () {
        sidebarWas(7);
      });

      $("#sidebar-wer-1").click(function () {
        sidebarWer(1);
      });
      $("#sidebar-wer-2").click(function () {
        sidebarWer(2);
      });
      $("#sidebar-wer-3").click(function () {
        sidebarWer(3);
      });

      //--------------------------SUB-NAVBAR---------------------

      $(".sub-navbar-wieso").click(function () {
        initWiesoScrollify();
        $('#fullpage').fullpage.moveTo('home', 0);
 
      });
      $(".sub-navbar-wie").click(function () {
        initWieScrollify();
        $('#fullpage').fullpage.moveTo('home', 1);

      });
      $(".sub-navbar-was").click(function () {
        initWasScrollify();
        $('#fullpage').fullpage.moveTo('home', 2);
      });
      $(".sub-navbar-wer").click(function () {
        initWerScrollify();
        $('#fullpage').fullpage.moveTo('home', 3);

      });

      //--------------------------WIESO-NAVIGATION-ARROWS---------------------
      $("#wieso1 .angle-right-container").click(function () {
                $('#fullpage').fullpage.moveTo('home', 1);
                removeSection1Animations('#wieso1');
      });

      $("#wieso1 .angle-down-container").click(function () {
        $('#fullpage').fullpage.moveSectionDown();
        removeSection1Animations('#wieso1');
      });

      $("#wieso2 .angle-right-container").click(function () {
        $('#fullpage').fullpage.moveTo('home', 1);
        removeWieso2Animations();
      });

      $("#wieso2 .angle-down-container").click(function () {
        $('#fullpage').fullpage.moveSectionDown();
        removeWieso2Animations();
      });

      $("#wieso3 .angle-right-container").click(function () {
        removeWieso3Animations();
        $('#fullpage').fullpage.moveTo('home', 1);
      });

      $("#wieso3 .angle-down-container").click(function () {
        removeWieso3Animations();
        $('#fullpage').fullpage.moveSectionDown();
      });

      //--------------------------WIE-NAVIGATION-ARROWS---------------------

      $("#wie1 .angle-down-container").click(function () {
        removeSection1Animations('#wie1');
        $('#fullpage').fullpage.moveSectionDown();
      });

      $('#wie1 .angle-right-button').on('click', function () {
        removeSection1Animations('#wie1');
        initWasScrollify();
        $('#fullpage').fullpage.moveTo('home', 2);
      });

      $('#wie1 .angle-left-button').on('click', function () {
        removeSection1Animations('#wie1');
        initWiesoScrollify();
        $('#fullpage').fullpage.moveTo('home', 0);
      });

      $("#wie2 .angle-down-container").click(function () {
        removeWie2Animations();
        $('#fullpage').fullpage.moveSectionDown();
      });

      $('#wie2 .angle-right-button').on('click', function () {
        removeWie2Animations();
        initWasScrollify();
        $('#fullpage').fullpage.moveTo('home', 2);
      });

      $('#wie2 .angle-left-button').on('click', function () {
        removeWie2Animations();
        initWiesoScrollify();
        $('#fullpage').fullpage.moveTo('home', 0);
      });

      $('#wie3 .angle-right-button').on('click', function () {
        removeWie3Animations();
        initWasScrollify();
        $('#fullpage').fullpage.moveTo('home', 2);
      });

      $('#wie3 .angle-left-button').on('click', function () {
        removeWie3Animations();
        initWiesoScrollify();
        $('#fullpage').fullpage.moveTo('home', 0);
      });

      $("#wie3 .angle-down-container").click(function () {
        removeWie3Animations();
        $('#fullpage').fullpage.moveSectionDown();
      });

      $('#wie4 .angle-right-button').on('click', function () {
        removeWie4Animations();
        initWasScrollify();
        $('#fullpage').fullpage.moveTo('home', 2);
      });

      $('#wie4 .angle-left-button').on('click', function () {
        removeWie4Animations();
        initWiesoScrollify();
        $('#fullpage').fullpage.moveTo('home', 0);
      });

      //--------------------------WAS-NAVIGATION-ARROWS---------------------
      $("#was1 .angle-down-container").click(function () {
        removeSection1Animations('#was1');
        $('#fullpage').fullpage.moveSectionDown();
      });

      $('#was1 .angle-right-button').on('click', function () {
        removeSection1Animations('#was1');
        initWerScrollify();
        $('#fullpage').fullpage.moveTo('home', 3);
      });

      $('#was1 .angle-left-button').on('click', function () {
        removeSection1Animations('#was1');
        initWieScrollify();
        $('#fullpage').fullpage.moveTo('home', 1);
      });

      $('#was2 .angle-right-button').on('click', function () {
        removeWasSectionAnimations('#was2');
        initWerScrollify();
        $('#fullpage').fullpage.moveTo('home', 3);
      });

      $('#was2 .angle-left-button').on('click', function () {
        removeWasSectionAnimations('#was2');
        initWieScrollify();
        $('#fullpage').fullpage.moveTo('home', 1);
      });

      $("#was2 .angle-down-container").click(function () {
        removeWasSectionAnimations('#was2');
        $('#fullpage').fullpage.moveSectionDown();
      });

      $('#was3 .angle-right-button').on('click', function () {
        removeWasSectionAnimations('#was3');
        initWerScrollify();
        $('#fullpage').fullpage.moveTo('home', 3);
      });

      $('#was3 .angle-left-button').on('click', function () {
      /*   $.scrollify.instantMove("#1"); */
        removeWasSectionAnimations('#was3');
        initWieScrollify();
        $('#fullpage').fullpage.moveTo('home', 1);
      });

      $("#was3 .angle-down-container").click(function () {
        removeWasSectionAnimations('#was3');
        $('#fullpage').fullpage.moveSectionDown();
      });

      $('#was4 .angle-right-button').on('click', function () {
        removeWasSectionAnimations('#was4');
        initWerScrollify();
        $('#fullpage').fullpage.moveTo('home', 3);
      });

      $('#was4 .angle-left-button').on('click', function () {
        removeWasSectionAnimations('#was4');
        initWieScrollify();
        $('#fullpage').fullpage.moveTo('home', 1);
      });

      $("#was4 .angle-down-container").click(function () {
        removeWasSectionAnimations('#was4');
        $('#fullpage').fullpage.moveSectionDown();
      });

      $('#was5 .angle-right-button').on('click', function () {
        removeWasSectionAnimations('#was5');
        initWerScrollify();
        $('#fullpage').fullpage.moveTo('home', 3);
      });

      $('#was5 .angle-left-button').on('click', function () {
        removeWasSectionAnimations('#was5');
        initWieScrollify();
        $('#fullpage').fullpage.moveTo('home', 1);
      });

      $("#was5 .angle-down-container").click(function () {
        removeWasSectionAnimations('#was5');
        $('#fullpage').fullpage.moveSectionDown();
      });

      $('#was6 .angle-right-button').on('click', function () {
        removeWasSectionAnimations('#was6');
        initWerScrollify();
        $('#fullpage').fullpage.moveTo('home', 3);
      });

      $('#was6 .angle-left-button').on('click', function () {
        removeWasSectionAnimations('#was6');
        initWieScrollify();
        $('#fullpage').fullpage.moveTo('home', 1);
      });

      $("#was6 .angle-down-container").click(function () {
        removeWasSectionAnimations('#was6');
        $('#fullpage').fullpage.moveSectionDown();
      });

      $('#was7 .angle-right-button').on('click', function () {
        removeWasSectionAnimations('#was7');
        initWerScrollify();
        $('#fullpage').fullpage.moveTo('home', 3);
      });

      $('#was7 .angle-left-button').on('click', function () {
        removeWasSectionAnimations('#was7');
        initWieScrollify();
        $('#fullpage').fullpage.moveTo('home', 1);
      });

      $("#wer1 .angle-down-container").click(function () {
        removeSection1Animations('#wer1');
        $('#fullpage').fullpage.moveSectionDown();
      });

      $("#wer2 .angle-left-button").click(function () {
        removeWer2Animations();
        initWasScrollify();
        $('#fullpage').fullpage.moveTo('home', 2);
      });

      $("#wer2 .angle-down-container").click(function () {
        removeWer2Animations();
        $('#fullpage').fullpage.moveSectionDown();
      });

      $("#wer3 .angle-down-container").click(function () {
        removeWer3Animations();
        $('#fullpage').fullpage.moveSectionDown();
      });

      $("#wer3 .angle-left-button").click(function () {
        removeWer3Animations();
        initWasScrollify();
        $('#fullpage').fullpage.moveTo('home', 2);
      });

      $('#was-list-anzeigen').on('click', function () {
        removeSection1Animations('#was1');
        $('#fullpage').fullpage.moveSectionDown();
      });

      $('#was-list-verteilung').on('click', function () {
        removeSection1Animations('#was1');
      });

      $('#was-list-druck').on('click', function () {
        removeSection1Animations('#was1');
      });

      $('#was-list-plakate').on('click', function () {
        removeSection1Animations('#was1');
      });

      $('#was-list-digital').on('click', function () {
        removeSection1Animations('#was1');
      });

      $('#was-list-rundfunk').on('click', function () {
        removeSection1Animations('#was1');
      });

      $('#wer1 .angle-left-button').on('click', function () {
      /*   $.scrollify.instantMove("#1"); */
        removeSection1Animations('#wer1');
        initWasScrollify();
        console.log("click left")
        $('#fullpage').fullpage.moveTo('home', 2);
      });
    });
  }
}