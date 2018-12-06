import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-wer',
  templateUrl: './wer.component.html',
  styleUrls: ['./wer.component.scss']
})
export class WerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      console.log("ready!");
      
      $('#fullpage-wer').fullpage({
        navigation: true,
        responsiveWidth: 700,
        anchors: ['wer-1', 'wer-2', 'wer-3', 'wer-4'],
        parallax: true,
        onLeave: function (origin, destination, direction) {
          console.log("Leaving section" + origin.index);
        },
      });
    });
  }

}
