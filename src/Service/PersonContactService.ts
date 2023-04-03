import { inject, injectable } from "tsyringe";

import { IPersonContactRepository } from "../Domain/interfaces/IPersonContactRepository";

import { PersonContact } from "../Domain/entities/Person/PersonContact";
import { PersonContactRepository } from "../Data/PersonContactRepository";

@injectable()
export class PersonContactService {
  private repository: IPersonContactRepository;

  constructor(@inject('PersonContactRepository') personContactRepository: PersonContactRepository) {
    this.repository = personContactRepository;
  }

  async findAllContactByPerson(idPerson: string): Promise<object[]> {
    try {
      if(!idPerson){
        throw new Error("Informe uma pessoa valida");
      }
      return await this.repository.findAllByPerson(idPerson);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async findAllContactByHospital(idHospital: string): Promise<object[]> {
    try {
      if(!idHospital){
        throw new Error("Informe um hospital valido");
      }

      return await this.repository.findAllByHospital(idHospital);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async savePersonContact(contact: PersonContact): Promise<void> {
    try {
      await this.repository.save(new PersonContact(contact));
    } catch (error) {
      throw new Error(error.menssage);
    }
  }
}