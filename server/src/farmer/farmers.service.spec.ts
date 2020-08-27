import { FarmerService } from './farmers.service';
import { FarmerRepository } from './farmer-repository.service';

describe('FarmerService', () => {
  let service: FarmerService;
  const farmerRepository = new FarmerRepository();

  beforeEach(() => {
    service = new FarmerService(farmerRepository);

    jest.spyOn(farmerRepository, 'find');
  });

  describe('when searching', () => {
    it('should search on repository', () => {
        service.search('A');

        expect(farmerRepository.find).toHaveBeenCalledWith('A');
    });
  });
});
