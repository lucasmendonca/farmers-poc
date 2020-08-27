import { FarmerRepository } from './farmer-repository.service';
import { mockedFarmers } from '../constants/mocked-farmers';

describe('FarmerRepository', () => {
  let farmerRepository: FarmerRepository;

  beforeEach(() => {
    farmerRepository = new FarmerRepository();
  });

  describe('#find', () => {
    it('should do search by name', async() => {
        const expectedResult = [mockedFarmers[0]];
        expect(await farmerRepository.find('Lucas')).toEqual(expectedResult);
    });

    it('should search by doc number', async() => {
        const expectedResult = [mockedFarmers[1]];
        expect(await farmerRepository.find('01')).toEqual(expectedResult);
    });
  });
});
