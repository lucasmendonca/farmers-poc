import { Module } from '@nestjs/common';

import { FarmerController } from './farmer.controller';
import { FarmerService } from './farmers.service';
import { FarmerRepository } from './farmer-repository.service';

@Module({
  imports: [],
  controllers: [FarmerController],
  providers: [FarmerService, FarmerRepository],
  exports: [FarmerService]
})
export class FarmerModule {}
