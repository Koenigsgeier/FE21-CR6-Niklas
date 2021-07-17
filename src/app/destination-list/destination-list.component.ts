import { Component, OnInit } from '@angular/core';
import { destinations } from '../destinations';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.sass']
})
export class DestinationListComponent implements OnInit {
  destinations = destinations;
  constructor() { }

  ngOnInit(): void {
  }

}
