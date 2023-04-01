
import { inject, injectable } from "tsyringe";

import { Person } from "../Domain/entities/Person/Person";

import { IPersonRepository } from "../Domain/interfaces/IPersonRepository";

@injectable()
export class PersonService {
  private repository: IPersonRepository;

  constructor(@inject('PersonRepository') personRepository: IPersonRepository) 
  {
    this.repository = personRepository;
  }

  async findAllPerson() {
    try {
      return await this.repository.findAll();
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async findPersonByDocument(txDocument: string){
    try {
      const findedPerson = await this.repository.findByDocument(txDocument);

      if(!findedPerson)
        throw new Error("Pessoa não encontrada no sistema.");

      return findedPerson;
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async savePerson(person: Person) {
    try {
      const existPerson = await this.repository.findByDocument(person.txDocument)
      
      if(existPerson){
        throw new Error("A pessoa informada já está cadastrada no sistema.");
      }

      await this.repository.save(person);

    } catch (error) {
      throw new Error(error.menssage)
    }
  }
}