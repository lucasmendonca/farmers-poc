import { Farmer } from "../interfaces/farmer.interface";

export const mockedFarmers: Array<Farmer> = [
    {
      address: {
        address: 'Rua Paraguai 79 30340740',
        country: 'Brasil',
        state: 'MG',
        street: 'Rua Paraguai',
      },
      document: {
        documentNumber: '475.122.829-00',
        documentType: 'rg',
      },
      id: '1abc',
      name: 'Lucas Mendonca',
    },
    {
      address: {
        address: 'Av Prudente Morais 1255 30340710',
        country: 'Brasil',
        state: 'MG',
        street: 'Av Prudente Morais',
      },
      document: {
        documentNumber: '475.122.829-01',
        documentType: 'rg',
      },
      id: '1abc',
      name: 'Camila Pires',
    },
    {
      address: {
        address: 'Rodovia 282, KM 300',
        country: 'Brasil',
        state: 'MG',
        street: 'Av Prudente Morais',
      },
      document: {
        documentNumber: '475.122.829-02',
        documentType: 'rg',
      },
      id: '1abc',
      name: 'Joao da Silva',
    },
  ];