import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-wie',
  templateUrl: './wie.component.html',
  styleUrls: ['./wie.component.scss']
})
export class WieComponent implements OnInit {
  latitude= 53.1378685;
  longitude= 8.2143853;
  constructor() { }

  ngOnInit() {


  $(document).ready(function () {
    //intial animation
    //TODO: Horizontal Fullpage??
  /*   $('#fullpage-wie').fullpage({
      licenseKey: 'EA26EC0D-13A84407-961F3DBD-832CEB96',
      anchors: ['wie-1', 'wie-2', 'wie-3', 'wie-4', 'wie-5'],
      verticalCentered: true,
      // easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      afterLoad: function(origin, destination, direction){

      },
      onLeave: function(origin, destination, direction) {
        
      }
    }); */

   
  });
}
}
