import { PersonAddress } from "../entities/Person/PersonAddress";

export interface IPersonAddressRepository {
  findAllByPerson(idPerson: string): Promise<PersonAddress[]>;
  findAllByHospital(idHospital: string): Promise<PersonAddress[]>;
  save(address: PersonAddress): Promise<PersonAddress>;
}