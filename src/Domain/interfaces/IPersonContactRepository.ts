import { PersonContact } from "../entities/Person/PersonContact";

export interface IPersonContactRepository {
  findAllByPerson(idPerson: string): Promise<object[]>;
  findAllByHospital(idHospital: string): Promise<object[]>;
  save(contact: PersonContact): Promise<void>;
}