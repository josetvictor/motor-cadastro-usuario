import { inject, injectable } from "tsyringe";

import { IPersonHospitalRepository } from "../Domain/interfaces/IPersonHospitalRepository";
import { PersonHospitalRepository } from "../Data/PersonHospitalRepository";

import { PersonHospital } from "../Domain/entities/PersonHospital/PersonHospital";
import { PersonService } from "./PersonService";
import { Person } from "../Domain/entities/Person/Person";
import { Hospital } from "../Domain/entities/Hospital/Hospital";

@injectable()
export class PersonHospitalService {
  private repository: IPersonHospitalRepository
  private personService: PersonService;

  constructor(
    @inject('PersonHospitalRepository') personHospitalRepository: PersonHospitalRepository
    @inject('PersonService') personService: PersonService
    ) {
    this.repository = personHospitalRepository;
    this.personService = personService;
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

  async savePersonHospital(person: Person, idHospital: string): Promise<void> {
    try {
      let existPerson = await this.personService.findPersonByDocument(person.txDocument);
      
      if(!existPerson)
        await this.personService.savePerson(person);
      
      if(person.isConsent){
        await this.repository.saveAll(person);
      }

      const personHospital: PersonHospital = {}

      await this.repository.save(personHospital);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }
}