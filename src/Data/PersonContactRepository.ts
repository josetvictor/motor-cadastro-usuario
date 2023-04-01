import { PersonContact } from "../Domain/entities/Person/PersonContact";
import { IPersonContactRepository } from "../Domain/interfaces/IPersonContactRepository";


export class PersonContactRepository implements IPersonContactRepository {
  findAllByPerson(idPerson: string): Promise<PersonContact> {
    throw new Error("Method not implemented.");
  }
  findAllByHospital(idHospital: string): Promise<PersonContact> {
    throw new Error("Method not implemented.");
  }
  save(contact: PersonContact): Promise<void> {
    throw new Error("Method not implemented.");
  }
}