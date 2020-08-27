import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FarmerSearchCardComponent } from './farmer-search-card/farmer-search-card.component';
import { FarmerSearchService } from './farmer-search.service';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    FarmerSearchCardComponent
  ],
  exports: [
    FarmerSearchCardComponent
  ],
  providers: [
    FarmerSearchService
  ]
})
export class FarmerModule { }
