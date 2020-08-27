import { Injectable } from '@nestjs/common';

import { Farmer } from '../interfaces/farmer.interface';
import { FarmerRepository } from './farmer-repository.service';

@Injectable()
export class FarmerService {
  constructor(private farmerRepository: FarmerRepository) {}

  public search(key: string): Promise<Array<Farmer>> {
    return this.farmerRepository.find(key);
  }
}
