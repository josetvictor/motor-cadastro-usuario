import { PersonHospital } from "../entities/PersonHospital/PersonHospital";

export interface IPersonHospitalRepository {
  findAllByPerson(idPerson: string): Promise<PersonHospital>;
  findAllByHospital(idHospital: string): Promise<PersonHospital>;
  save(contact: PersonHospital): Promise<void>;
}