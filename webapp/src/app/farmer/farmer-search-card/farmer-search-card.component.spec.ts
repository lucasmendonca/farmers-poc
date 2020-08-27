import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';

import { FarmerSearchCardComponent } from './farmer-search-card.component';
import { FarmerSearchService } from '../farmer-search.service';
import { FarmerModule } from '../farmer.module';
import { Farmer } from '../../models/farmer.interface';

describe('FarmerSearchCardComponent', () => {
  let service: FarmerSearchService;
  let component: FarmerSearchCardComponent;
  let fixture: ComponentFixture<FarmerSearchCardComponent>;
  let searchFarmersSpy: jasmine.Spy;

  const mockedFarmers: Array<Farmer> = [
    {
      address: {
        address: 'Rua Paraguai',
        country: 'Brazil',
        state: 'MG',
        street: 'Rua Paraguai',
      },
      document: {
        documentNumber: '12345544',
        documentType: 'rg',
      },
      id: '224ne',
      name: 'Lucas Mendonca',
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FarmerModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSearchCardComponent);
    component = fixture.componentInstance;

    service = TestBed.get(FarmerSearchService);

    component.farmerSearchAbstractProvider = service;

    spyOn(component.onFarmerSelectedEvent, 'next').and.callThrough();
    searchFarmersSpy = spyOn(service, 'searchFarmers').and.returnValue(Promise.resolve(mockedFarmers));

    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  describe('when user do search', () => {
    it('should search by key', () => {
      component.searchKey = 'A';
      component.doSearch();

      expect(service.searchFarmers).toHaveBeenCalledWith({ key: 'A' });
    });

    it('should not search when no provider is defined', () => {
      component.farmerSearchAbstractProvider = null;
      component.doSearch();

      expect(service.searchFarmers).not.toHaveBeenCalled();
    });

    it('should select first result of farmers list', fakeAsync(() => {
      component.searchKey = 'A';
      component.doSearch();
      tick();

      expect(component.selectedFarmer).toEqual(mockedFarmers[0]);
    }));

    it('should reset farmer selection when farmers list is empty', fakeAsync(() => {
      searchFarmersSpy.and.returnValue(Promise.resolve([]));

      component.searchKey = 'A';
      component.doSearch();
      tick();

      expect(component.selectedFarmer).toEqual(null);
    }));

    it('should emit onFarmerSelectedEvent event after farmer selection', fakeAsync(() => {
      component.searchKey = 'A';
      component.doSearch();
      tick();

      expect(component.onFarmerSelectedEvent.next).toHaveBeenCalledWith(mockedFarmers[0]);
    }));

    it('should emit onFarmerSelectedEvent event after farmer selection (2)', fakeAsync(() => {
      searchFarmersSpy.and.returnValue(Promise.resolve([]));

      component.searchKey = 'A';
      component.doSearch();
      tick();

      expect(component.onFarmerSelectedEvent.next).toHaveBeenCalledWith(null);
    }));
  });
});
