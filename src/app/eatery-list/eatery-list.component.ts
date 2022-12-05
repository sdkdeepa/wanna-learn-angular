import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EateryLocation } from '../eatery-location';

@Component({
  selector: 'app-eatery-list',
  templateUrl: './eatery-list.component.html',
  styleUrls: ['./eatery-list.component.css']
})
export class EateryListComponent implements OnInit {

  @Input() locationList: EateryLocation[] = [];
  results: EateryLocation[] = [];

  @Output() locationSelectedEvent = new EventEmitter<EateryLocation>();

  constructor() { }

  ngOnInit(): void {
  }

  searchEateryLocations(searchText: string) {
    console.log(searchText);
    if (!searchText) return;
    this.results = this.locationList.filter((location: any) => location.city.toLowerCase().includes(searchText.toLowerCase()));
  }

  selectEateryLocation(location: EateryLocation) {
    this.locationSelectedEvent.emit(location);
  }
}
