import { PersonAddress } from "../entities/Person/PersonAddress";

export interface IPersonAddressRepository {
  findAllByPerson(idPerson: string): Promise<object[]>;
  findAllByHospital(idHospital: string): Promise<object[]>;
  save(address: PersonAddress): Promise<void>;
}