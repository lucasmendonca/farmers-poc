import { Farmer } from '../models/farmer.interface';
import { SearchParams } from './farmer-search-params.interface';

export abstract class FarmerSearchAbstractProvider {
    abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;
}