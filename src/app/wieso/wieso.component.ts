import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-wieso',
  templateUrl: './wieso.component.html',
  styleUrls: ['./wieso.component.scss']
})
export class WiesoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      console.log("ready!");
      
      $('#fullpage-wieso').fullpage({
        licenseKey: 'EA26EC0D-13A84407-961F3DBD-832CEB96',
        anchors: ['wieso-1', 'wieso-2', 'wieso-3', 'wieso-4'],
        // easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        afterLoad: function(origin, destination, direction){
          console.log(destination.index+' enter 1');
        },
        onLeave: function(origin, destination, direction) {
          if(destination.index == 0){
            console.log("Origin: "+origin.origin+' quit 1');
            $('#wieso1-text').addClass('wieso1-text-animation');
          }
          if(origin.index == 0){
            console.log("Origin: "+origin.origin+' quit 1');
            $('#wieso1-text').removeClass('wieso1-text-animation');
          }

          if(destination.index == 1){
            countFunction();
          }
        }
      });
    });

    function countFunction() {
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
    } 
  }

}
