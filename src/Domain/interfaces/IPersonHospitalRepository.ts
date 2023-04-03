import { PersonHospital } from "../entities/PersonHospital/PersonHospital";

export interface IPersonHospitalRepository {
  findAllByPerson(idPerson: string): Promise<object[]>;
  findAllByHospital(idHospital: string): Promise<object[]>;
  save(personHospital: PersonHospital): Promise<void>;
}