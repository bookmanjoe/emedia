import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-was',
  templateUrl: './was.component.html',
  styleUrls: ['./was.component.scss']
})
export class WasComponent implements OnInit {
  latitude= 53.1378685;
  longitude= 8.2143853;
  constructor() { }

  ngOnInit() {

    
    $(document).ready(function () {
      //intial animation
      //TODO: Horizontal Fullpage??
     /*  $('#fullpage-was').fullpage({
        licenseKey: 'EA26EC0D-13A84407-961F3DBD-832CEB96',
        anchors: ['was-1', 'was-2', 'was-3', 'was-4', 'was-5', 'was-6', 'was-7','was-8'],
        // easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        afterLoad: function(origin, destination, direction){
  
        },
        onLeave: function(origin, destination, direction) {
          
        }
      }); */

     
    });
  }

}
