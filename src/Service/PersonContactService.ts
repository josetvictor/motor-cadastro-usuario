import { inject, injectable } from "tsyringe";

import { IPersonContactRepository } from "../Domain/interfaces/IPersonContactRepository";

import { PersonContact } from "../Domain/entities/Person/PersonContact";

@injectable()
export class PersonContactService {
  private repository: IPersonContactRepository;

  constructor(@inject('PersonContactRepository') personContactRepository: IPersonContactRepository) {
    this.repository = personContactRepository;
  }

  async findAllContactByPerson(idPerson: string): Promise<PersonContact> {
    try {
      return await this.repository.findAllByPerson(idPerson);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async findAllContactByHospital(idHospital: string): Promise<PersonContact> {
    try {
      return await this.repository.findAllByHospital(idHospital);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async savePersonContact(contact: PersonContact): Promise<void> {
    try {
      return await this.repository.save(contact);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }
}