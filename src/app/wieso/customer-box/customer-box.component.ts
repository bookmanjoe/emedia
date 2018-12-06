import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-box',
  templateUrl: './customer-box.component.html',
  styleUrls: ['./customer-box.component.scss']
})
export class CustomerBoxComponent implements OnInit {

  @Input() src: string;
  @Input() href: string;
  
  constructor() { }

  ngOnInit() {
  }

}
