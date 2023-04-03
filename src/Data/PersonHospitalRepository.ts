import { PersonHospital } from "../Domain/entities/PersonHospital/PersonHospital";
import { IPersonHospitalRepository } from "../Domain/interfaces/IPersonHospitalRepository";

export class PersonHospitalRepository implements IPersonHospitalRepository {
  findAllByPerson(idPerson: string): Promise<PersonHospital[]> {
    throw new Error("Method not implemented.");
  }
  findAllByHospital(idHospital: string): Promise<PersonHospital[]> {
    throw new Error("Method not implemented.");
  }
  save(personHospital: PersonHospital): Promise<PersonHospital> {
    throw new Error("Method not implemented.");
  }

}