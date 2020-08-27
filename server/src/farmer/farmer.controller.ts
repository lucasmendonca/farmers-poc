import { Controller, Get, Query, BadRequestException } from '@nestjs/common';

import { Farmer } from '../interfaces/farmer.interface';
import { FarmerService } from './farmers.service';
import { FarmerSearchParams } from '../interfaces/farmer-search-params.interface';

@Controller()
export class FarmerController {
  constructor(private farmerService: FarmerService) {}

  @Get('/farmers/search')
  public search(@Query() params: FarmerSearchParams): Promise<Array<Farmer>> {
    if (!params.key) {
      throw new BadRequestException('Query string \'key\' is required'); 
    }

    return this.farmerService.search(params.key);
  }
}
