
import { inject, injectable } from "tsyringe";

import { Person } from "../Domain/entities/Person/Person";

import { IPersonRepository } from "../Domain/interfaces/IPersonRepository";

@injectable()
export class PersonService {
  private personRepository: IPersonRepository;

  constructor(@inject('PersonRepository') personRepository: IPersonRepository) 
  {
    this.personRepository = personRepository;  
  }

  async FindAllPerson() {
    try {
      return await this.personRepository.findAll();
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async FindPersonByDocument(txDocument: string){
    try {
      const findedPerson = await this.personRepository.findByDocument(txDocument);

      if(!findedPerson)
        throw new Error("Pessoa não encontrada no sistema.");

      return findedPerson;
    } catch (error) {
      throw new Error(error.menssage);
    }
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