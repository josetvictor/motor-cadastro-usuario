import { delay, inject, injectable } from "tsyringe";

import { IPersonHospitalRepository } from "../Domain/interfaces/IPersonHospitalRepository";
import { PersonHospitalRepository } from "../Data/PersonHospitalRepository";

import { PersonService } from "./PersonService";
import { HospitalService } from "./HospitalService";

import { PersonHospital } from "../Domain/entities/PersonHospital/PersonHospital";
import { Person } from "../Domain/entities/Person/Person";
import { Hospital } from "../Domain/entities/Hospital/Hospital";

@injectable()
export class PersonHospitalService {
  private repository: IPersonHospitalRepository
  private personService: PersonService;
  private hospitalService: HospitalService;

  constructor(
    @inject('PersonHospitalRepository') personHospitalRepository: PersonHospitalRepository,
    @inject(delay(() => PersonService)) servicePerson: PersonService,
    @inject('HospitalService') serviceHospital: HospitalService,
    ) {
    this.repository = personHospitalRepository;
    this.personService = servicePerson;
    this.hospitalService = serviceHospital;
  }

  async findAllByPerson(idPerson: string): Promise<object[]> {
    try {
      return await this.repository.findAllByPerson(idPerson);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllByHospital(idHospital: string): Promise<object[]> {
    try {
      return await this.repository.findAllByHospital(idHospital);
    } catch (error) {
      throw new Error(error);
    }
  }

  async save(idPerson: string, idHospital: string): Promise<void>{
    try {
      await this.repository.save(new PersonHospital({idPerson: idPerson, idHospital: idHospital}));
    } catch (error) {
      throw new Error(error)
    }
  }

  async savePersonWithHospitalExist(person: Person, idHospital: string): Promise<void> {
    try {

      const newPerson = new Person(person);
      await this.personService.savePerson(newPerson);

      if(newPerson.isConsent){
        const allHospitals = await this.hospitalService.findAllHospital();

        allHospitals.forEach(async (hos: Hospital) => {
          await this.save(newPerson.id, hos.id);
        });
      }

      await this.repository.save(new PersonHospital({idPerson: newPerson.id, idHospital: idHospital}));
    } catch (error) {
      throw new Error(error);
    }
  }
}