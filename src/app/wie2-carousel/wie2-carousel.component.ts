import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-wie2-carousel',
  templateUrl: './wie2-carousel.component.html',
  styleUrls: ['./wie2-carousel.component.scss']
})
export class Wie2CarouselComponent implements OnInit {




  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $('.wie2-carousel').slick({
        
      });
    });


  }

}
