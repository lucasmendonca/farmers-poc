import { Component, Input, Output, EventEmitter } from "@angular/core";

import { FarmerSearchAbstractProvider } from "../farmer-search-provider.interface";
import { Farmer } from "../../models/farmer.interface";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "farmer-search-card",
  templateUrl: "./farmer-search-card.component.html",
  styleUrls: ["./farmer-search-card.component.scss"]
})
export class FarmerSearchCardComponent {
  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onFarmerSelectedEvent = new EventEmitter();
  public selectedFarmer: Farmer = null;
  public searchKey: string = null;

  public doSearch(): void {
    if (!this.farmerSearchAbstractProvider) {
      return;
    }

    this.farmerSearchAbstractProvider.searchFarmers({ key: this.searchKey }).then((farmers) => {
      const firstFarmer = farmers.length > 0 ? farmers[0] : null;
      this.selectFarmer(firstFarmer);
    });
  }

  private selectFarmer(farmer: Farmer): void {
    this.selectedFarmer = farmer;
    this.onFarmerSelectedEvent.next(this.selectedFarmer);
  }

  // private buildForm(): void {
  //   this.messageForm = this.fb.group({
  //       message : [null, [Validators.required]],
  //       receivers_user_id : [null, [Validators.required]]
  //   });

  //   this.getUserIdFromRoute();
  // }
}
