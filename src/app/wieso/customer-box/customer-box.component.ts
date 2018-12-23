import { Component, OnInit, Input } from '@angular/core';
import {PlatformLocation  } from '@angular/common';

@Component({
  selector: 'app-customer-box',
  templateUrl: './customer-box.component.html',
  styleUrls: ['./customer-box.component.scss']
})
export class CustomerBoxComponent implements OnInit {

  @Input() logoUrl: string;
  @Input() href: string;
  
  constructor(private platformLocation: PlatformLocation) {

   }

  ngOnInit() {
  }

}
