import { PersonAddress } from "../Domain/entities/Person/PersonAddress";
import { IPersonAddressRepository } from "../Domain/interfaces/IPersonAddressRepository";

export class PersonAddressRepository implements IPersonAddressRepository {
  findAllByPerson(idPerson: string): Promise<PersonAddress> {
    throw new Error("Method not implemented.");
  }
  findAllByHospital(idHospital: string): Promise<PersonAddress> {
    throw new Error("Method not implemented.");
  }
  save(address: PersonAddress): Promise<void> {
    throw new Error("Method not implemented.");
  }

}