import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  latitude= 53.1378685;
  longitude= 8.2143853;
  constructor() { }

  ngOnInit() {
  }

}
