import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      $("#contact-form-modal").iziModal({
        title: 'KONTAKTFORMULAR',
        headerColor: '#88A0B9',
        background: null,
        theme: 'light'  // light
      });
    
      $('.contact-form').on('click', function (event) {
        console.log("click contact form")
        //event.preventDefault();
        $('#contact-form-modal').iziModal('open');
      });
    });
    
  }



}
