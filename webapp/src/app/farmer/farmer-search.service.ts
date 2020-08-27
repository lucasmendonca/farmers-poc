import { Injectable } from '@angular/core';

import { Farmer } from '../models/farmer.interface';
import { SearchParams } from './farmer-search-params.interface';
import { FarmerSearchAbstractProvider } from './farmer-search-provider.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const SERVER = environment.searchEndpointURL;

@Injectable()
export class FarmerSearchService extends FarmerSearchAbstractProvider {
    constructor(private httpService: HttpClient) {
        super();
    }

    public searchFarmers(params: SearchParams): Promise<Farmer[]> {
        if (!params.key) {
            return Promise.resolve([]);
        }

        return this.httpService.get<Farmer[]>(SERVER+params.key).toPromise();
    }
}