import { PersonContact } from "../entities/Person/PersonContact";

export interface IPersonContactRepository {
  findAllByPerson(idPerson: string): Promise<PersonContact>;
  findAllByHospital(idHospital: string): Promise<PersonContact>;
  save(contact: PersonContact): Promise<void>;
}