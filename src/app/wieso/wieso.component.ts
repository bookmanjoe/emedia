import { fadeInAnimation } from './../_animations/fadeInAnimation';
import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';


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

  constructor(private platformLocation: PlatformLocation) {
  }

  ngOnInit() {



    $(document).ready(function () {
      
    });
  }
}
