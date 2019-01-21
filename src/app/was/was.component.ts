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

    });
  }

}
