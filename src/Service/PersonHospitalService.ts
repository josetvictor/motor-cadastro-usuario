import { inject, injectable } from "tsyringe";

import { IPersonHospitalRepository } from "../Domain/interfaces/IPersonHospitalRepository";
import { PersonHospitalRepository } from "../Data/PersonHospitalRepository";

import { PersonHospital } from "../Domain/entities/PersonHospital/PersonHospital";
import { Person } from "../Domain/entities/Person/Person";
import { PersonService } from "./PersonService";
import { HospitalService } from "./HospitalService";

@injectable()
export class PersonHospitalService {
  private repository: IPersonHospitalRepository
  private personService: PersonService;
  private hospitalService: HospitalService;

  constructor(
    @inject('PersonHospitalRepository') personHospitalRepository: PersonHospitalRepository,
    @inject('PersonService') servicePerson: PersonService,
    @inject('HospitalService') serviceHospital: HospitalService,
    ) {
    this.repository = personHospitalRepository;
    this.personService = servicePerson;
    this.hospitalService = serviceHospital;
  }

  async findAllByPerson(idPerson: string): Promise<PersonHospital[]> {
    try {
      return await this.repository.findAllByPerson(idPerson);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async findAllByHospital(idHospital: string): Promise<PersonHospital[]> {
    try {
      return await this.repository.findAllByHospital(idHospital);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async save(idPerson: string, idHospital: string): Promise<void>{
    try {
      await this.repository.save(new PersonHospital({idPerson: idPerson, idHospital: idHospital}));
    } catch (error) {
      throw new Error(error.menssage)
    }
  }

  async savePersonWithHospitalExist(person: Person, idHospital: string): Promise<void> {
    try {
      const createdPerson = await this.personService.savePerson(person);

      if(createdPerson.isConsent){
        const allHospitals = await this.hospitalService.findAllHospital();

        allHospitals.forEach(async hos => {
          await this.repository.save(new PersonHospital({idPerson: createdPerson.id, idHospital: hos.id}))
        });
      }

      await this.repository.save(new PersonHospital({idPerson: createdPerson.id, idHospital: idHospital}));
    } catch (error) {
      throw new Error(error.menssage);
    }
  }
}