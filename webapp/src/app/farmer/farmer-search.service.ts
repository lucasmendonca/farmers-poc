import { Injectable } from '@angular/core';

import { Farmer } from '../models/farmer.interface';
import { SearchParams } from './farmer-search-params.interface';
import { FarmerSearchAbstractProvider } from './farmer-search-provider.interface';

@Injectable()
export class FarmerSearchService extends FarmerSearchAbstractProvider {
    public searchFarmers(params: SearchParams): Promise<Farmer[]> {
        console.log('params.key', params.key)
        if (!params.key) {
            return Promise.resolve([]);
        }

        let farmers: Array<Farmer> = [
            {
                address: {
                    address: 'Rua Paraguai',
                    country: 'Brazil',
                    state: 'MG',
                    street: 'Rua Paraguai'
                },
                document: {
                    documentNumber: '12345544',
                    documentType: 'rg'
                },
                id: '224ne',
                name: 'Lucas Mendonca'
            }
        ];
        // TODO make request

        return Promise.resolve(farmers);
    }
}