
import { inject, injectable } from "tsyringe";

import { Person } from "../Domain/entities/Person/Person";

import { IPersonRepository } from "../Domain/interfaces/IPersonRepository";
import { PersonRepositoy } from "../Data/PersonRepository";

@injectable()
export class PersonService {
  private repository: IPersonRepository;

  constructor(
    @inject('PersonRepository') personRepository: PersonRepositoy,
  ) 
  {
    this.repository = personRepository;
  }

  async findAllPerson(): Promise<object[]> {
    try {
      return await this.repository.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findPersonByDocument(txDocument: string): Promise<object> {
    try {
      const findedPerson = await this.repository.findByDocument(txDocument);

      if(!findedPerson)
        throw new Error("Pessoa não encontrada no sistema.");

      return findedPerson;
    } catch (error) {
      throw new Error(error);
    }
  }

  async savePerson(person: Person): Promise<void> {
    try {
      const existPerson = await this.repository.findByDocument(person.txDocument)
      
      if(existPerson){
        throw new Error("A pessoa informada já está cadastrada no sistema.");
      }

      await this.repository.save(new Person(person));
    } catch (error) {
      throw new Error(error)
    }
  }
}