import { Component } from '@angular/core';
import { FarmerSearchService } from './farmer/farmer-search.service';
import { Farmer } from './models/farmer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public myFarmerSearchProvider: FarmerSearchService) {}

  public mySelectedFarmer(farmer: Farmer) {
    console.log('selected farmer', farmer);
  }
}
