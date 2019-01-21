import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-wer2-carousel',
  templateUrl: './wer2-carousel.component.html',
  styleUrls: ['./wer2-carousel.component.scss']
})
export class Wer2CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){

      $('.wer2-carousel').slick({
        arrows: false
      });

      $('.wer2-carousel-right-arrow').click(function(){
        $('.wer2-carousel').slick('slickNext');
        console.log("right carousel")
        
      });

      $('.wer2-carousel-left-arrow').click(function(){
        $('.wer2-carousel').slick('slickPrev');
        console.log("left carousel")
      });
    });
  }

}
