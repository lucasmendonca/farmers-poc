import { BadRequestException } from '@nestjs/common';

import { FarmerController } from './farmer.controller';
import { FarmerService } from './farmers.service';
import { FarmerRepository } from './farmer-repository.service';

describe('FarmerController', () => {
  let controller: FarmerController;
  let service: FarmerService;

  const mockedFarmers = [];

  beforeEach(() => {
    service = new FarmerService(new FarmerRepository());
    controller = new FarmerController(service);

    jest.spyOn(service, 'search').mockResolvedValue(mockedFarmers);
  });

  describe('GET /farmers/search', () => {
    it('should return list of farmers', async() => {
      expect(await controller.search({ key: 'A' })).toBe(mockedFarmers);
    });

    it('should search farmers', async() => {
      controller.search({ key: 'A' });

      expect(service.search).toHaveBeenCalledWith('A');
    });

    it('should validate if key parameter', () => {
      expect(() => controller.search({ key: null })).toThrow(new BadRequestException('Query string \'key\' is required'));
    });
  });
});
