
import { delay, inject, injectable } from "tsyringe";

import { Person } from "../Domain/entities/Person/Person";

import { IPersonRepository } from "../Domain/interfaces/IPersonRepository";
import { HospitalService } from "./HospitalService";
import { PersonHospitalService } from "./PersonHospitalService";
import { PersonRepositoy } from "../Data/PersonRepository";

@injectable()
export class PersonService {
  private repository: IPersonRepository;
  private hospitalService: HospitalService;
  private personHospitalService: PersonHospitalService;

  constructor(
    @inject('PersonRepository') personRepository: PersonRepositoy,
    @inject('HospitalService') serviceHospital: HospitalService,
    @inject(delay(() => PersonHospitalService)) serviceHospitalPerson: PersonHospitalService
  ) 
  {
    this.repository = personRepository;
    this.hospitalService = serviceHospital;
    this.personHospitalService = serviceHospitalPerson;
  }

  async findAllPerson(): Promise<Person[]> {
    try {
      return await this.repository.findAll();
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async findPersonByDocument(txDocument: string): Promise<Person> {
    try {
      const findedPerson = await this.repository.findByDocument(txDocument);

      if(!findedPerson)
        throw new Error("Pessoa não encontrada no sistema.");

      return findedPerson;
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async savePerson(person: Person): Promise<Person> {
    try {
      const existPerson = await this.repository.findByDocument(person.txDocument)
      
      if(existPerson){
        throw new Error("A pessoa informada já está cadastrada no sistema.");
      }

      const personCreated = await this.repository.save(new Person(person));

      if(personCreated.isConsent){
        const allHospitals = await this.hospitalService.findAllHospital();
        
        allHospitals.forEach(async hos => {
          await this.personHospitalService.save(personCreated.id, hos.id);
        });
      }

      return personCreated;

    } catch (error) {
      throw new Error(error.menssage)
    }
  }
}