import { fadeInAnimation } from './../_animations/fadeInAnimation';
import { Component, OnInit } from '@angular/core';
import {PlatformLocation  } from '@angular/common';

declare var $: any;
declare var textFit: any;

@Component({
  selector: 'app-wieso',
  templateUrl: './wieso.component.html',
  styleUrls: ['./wieso.component.scss'],
  animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})
export class WiesoComponent implements OnInit {
  latitude= 53.1378685;
  longitude= 8.2143853;
  constructor(private platformLocation: PlatformLocation) {
   }

  ngOnInit() {

    

    $(document).ready(function () {
      textFit($('#wieso1-question-container'),{
        widthOnly: true,
        maxFontSize: 24
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
  
  
/*       
      textFit($('#wieso2-sm-umsatz-number'),{
        widthOnly: false,
        maxFontSize: 160
      });
      textFit($('#wieso2-sm-umsatz-label'),{
        widthOnly: false,
        maxFontSize: 16
      });
      textFit($('#wieso2-sm-haushalt-number'),{
        widthOnly: false,
        maxFontSize: 160
      });
      textFit($('#wieso2-sm-haushalt-label'),{
        widthOnly: false,
        maxFontSize: 16
      });
      textFit($('#wieso2-sm-verteilpartner-number'),{
        widthOnly: false,
        maxFontSize: 160
      });
      textFit($('#wieso2-sm-verteilpartner-label'),{
        widthOnly: false,
        maxFontSize: 16
      });
      textFit($('#wieso2-sm-promotion-number'),{
        widthOnly: false,
        maxFontSize: 160
      });
      textFit($('#wieso2-sm-promotion-label'),{
        widthOnly: false,
        maxFontSize: 16
      });
      textFit($('#wieso2-sm-partner-home-number'),{
        widthOnly: false,
        maxFontSize: 320
      });
      textFit($('#wieso2-sm-partner-home-label'),{
        widthOnly: false,
        maxFontSize: 16
      });
  
      textFit($('#wieso2-sm-verlag-number'),{
        widthOnly: false,
        maxFontSize: 320
      });
      textFit($('#wieso2-sm-verlag-lable'),{
        widthOnly: false,
        maxFontSize: 16
      });
  
      textFit($('#wieso2-sm-druck-number'),{
        widthOnly: false,
        maxFontSize: 320
      });
      textFit($('#wieso2-sm-druck-lable'),{
        widthOnly: false,
        maxFontSize: 16
      });  */
      
      function fadeInCustomers(){
        var i = 1;
        var milliseconds = 200;
        var count = $('.customer-box :selected').length;

        $( ".customer-box" ).each( function( index, element ){
          console.log(index);
          $('.customer-box:nth-child('+index+')').fadeIn(milliseconds);
          milliseconds += 200;
        });

      }

      function fadeInNumbers(){

        var outerhtml:String=$('#fullpage-wieso').prop('outerHTML');
        console.log( outerhtml+": fade in numbers")
        $('.text-black-umsatz-label').fadeIn(3000);
        $('.text-black-umsatz-number').fadeIn(4000);
        $('.text-black-haushalt-label').fadeIn(3000);
        $('.text-black-haushalt-number').fadeIn(4000);
        $('.text-black-haushalt-label').fadeIn(2000);
        $('.text-black-haushalt-number').fadeIn(1000);
        $('.text-black-partner-home-number').fadeIn(3000);
        $('.text-black-partner-home-label').fadeIn(5000);
        $('.text-black-verteilpartner-number').fadeIn(2000);
        $('.text-black-verteilpartner-label').fadeIn(1000);
        $('.text-black-promotion-number').fadeIn(3500);
        $('.text-black-promotion-label').fadeIn(1500);
        $('.text-black-verlag-label').fadeIn(2000);
        $('.text-black-verlag-number').fadeIn(4000);
        $('.text-black-druck-label').fadeIn(1000);
        $('.text-black-druck-number').fadeIn(3500);
      }

      function fadeOutNumbers(){
        console.log("fade out numbers")
        $('.text-black-umsatz-label').fadeOut(1000);
        $('.text-black-umsatz-number').fadeOut(1000);
        $('.text-black-haushalt-label').fadeOut(1000);
        $('.text-black-haushalt-number').fadeOut(1000);
        $('.text-black-haushalt-label').fadeOut(1000);
        $('.text-black-haushalt-number').fadeOut(1000);
        $('.text-black-partner-home-number').fadeOut(1000);
        $('.text-black-partner-home-label').fadeOut(1000);
        $('.text-black-verteilpartner-number').fadeOut(1000);
        $('.text-black-verteilpartner-label').fadeOut(1000);
        $('.text-black-promotion-number').fadeOut(1000);
        $('.text-black-promotion-label').fadeOut(1000);
        $('.text-black-verlag-label').fadeOut(1000);
        $('.text-black-verlag-number').fadeOut(1000);
        $('.text-black-druck-label').fadeOut(1000);
        $('.text-black-druck-number').fadeOut(1000);
      }

      function hideNumbers(){
        console.log("hide numbers")
        $('.text-black-umsatz-label').hide();
        $('.text-black-umsatz-number').hide();
        $('.text-black-haushalt-label').hide();
        $('.text-black-haushalt-number').hide();
        $('.text-black-partner-home-number').hide();
        $('.text-black-partner-home-label').hide();
        $('.text-black-verteilpartner-number').hide();
        $('.text-black-verteilpartner-label').hide();
        $('.text-black-promotion-number').hide();
        $('.text-black-promotion-label').hide();
        $('.text-black-verlag-label').hide();
        $('.text-black-verlag-number').hide();
        $('.text-black-druck-label').hide();
        $('.text-black-druck-number').hide();
      }

    });

/*     function countFunction() {
      $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    }  */
  }

}
