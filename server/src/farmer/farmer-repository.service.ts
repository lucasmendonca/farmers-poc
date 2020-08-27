import { Injectable } from '@nestjs/common';

import { Farmer } from '../interfaces/farmer.interface';
import { mockedFarmers } from '../constants/mocked-farmers';

@Injectable()
export class FarmerRepository {
  public find(key: string): Promise<Array<Farmer>> {
    key = key.toLocaleLowerCase();
    // Mocked data simulating data source access
    // TODO: integrate with DataSource and generate data by migrations
    const filteredFarmers = mockedFarmers.filter((farmer) => {
        return farmer.name.toLocaleLowerCase().includes(key) || farmer.document.documentNumber.toLocaleLowerCase().includes(key);
    });

    return Promise.resolve(filteredFarmers);
  }
}
