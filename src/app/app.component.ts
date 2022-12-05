import { Component } from '@angular/core';
import { EateryLocation } from './eatery-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eatery';

  EateryLocationList: EateryLocation[] = [
    {
      name: "Aqui Mexican Restuarant",
      city: "San Jose",
      state: "CA",
      photo: "../assets/eatery-1.jpg",
      seatingUnits: 85,
      takeout: true,
      wifi: true,
    },
    {
      name: "Cheese Cake Factory",
      city: "Santa Clara",
      state: "CA",
      photo: "../assets/eatery-2.jpg",
      seatingUnits: 200,
      takeout: true,
      wifi: false
    },
    {
      name: "Orens Hummus Shop",
      city: "Los Gatos",
      state: "CA",
      photo: "../assets/eatery-3.jpg",
      seatingUnits: 10,
      takeout: false,
      wifi: false
    }
  ];

  selectedLocation: EateryLocation | undefined; // = this.eateryLocationList[0];

  updateSelectedLocation(location: EateryLocation) {
    this.selectedLocation = location;
  }
}
