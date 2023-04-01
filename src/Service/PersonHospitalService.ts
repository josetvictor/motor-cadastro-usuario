import { inject, injectable } from "tsyringe";
import { IPersonHospitalRepository } from "../Domain/interfaces/IPersonHospitalRepository";
import { PersonHospitalRepository } from "../Data/PersonHospitalRepository";
import { PersonHospital } from "../Domain/entities/PersonHospital/PersonHospital";

@injectable()
export class PersonHospitalService {
  private repository: IPersonHospitalRepository

  constructor(@inject('PersonHospitalRepository') personHospitalRepository: PersonHospitalRepository) {
    this.repository = personHospitalRepository;
  }

  async findAllByPerson(idPerson: string): Promise<PersonHospital> {
    try {
      return await this.repository.findAllByPerson(idPerson);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async findAllByHospital(idHospital: string): Promise<PersonHospital> {
    try {
      return await this.repository.findAllByHospital(idHospital);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async savePersonContact(personHospital: PersonHospital): Promise<void> {
    try {
      return await this.repository.save(personHospital);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }
}