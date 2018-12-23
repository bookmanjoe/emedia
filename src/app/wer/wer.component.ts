import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-wer',
  templateUrl: './wer.component.html',
  styleUrls: ['./wer.component.scss']
})
export class WerComponent implements OnInit {
  latitude= 53.1378685;
  longitude= 8.2143853;
  constructor() { }

  
  ngOnInit() {

    

    $(document).ready(function () {
      
      


      /* $('#fullpage-wer').fullpage({
        anchors: ['wer-1', 'wer-2', 'wer-3', 'wer-4'],
        onLeave: function (origin, destination, direction) {
          console.log("Leaving section" + origin.index);
        },
      }); */

      
    });
  }

}
