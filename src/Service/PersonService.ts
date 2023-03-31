
import { inject, injectable } from "tsyringe";

import { Person } from "../Domain/entities/Person";

import { IPersonRepository } from "../Domain/interfaces/IPersonRepository";

@injectable()
export class PersonService {
  private personRepository: IPersonRepository;

  constructor(@inject('PersonRepository') personRepository: IPersonRepository) 
  {
    this.personRepository = personRepository;  
  }

  async CreatePerson(person: Person) {
    try {
      const existPerson = await this.personRepository.findByDocument(person.txDocument)
      
      if(existPerson){
        throw new Error("A pessoa informada já está cadastrada no sistema.");
      }

      await this.personRepository.save(person);

    } catch (error) {
      throw new Error(error.menssage)
    }
  }
}