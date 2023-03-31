import { Person } from "../Domain/entities/Person/Person";
import { IPersonRepository } from "../Domain/interfaces/IPersonRepository";

export class PersonRepositoy implements IPersonRepository {
  async findAll(): Promise<Person> {
    throw new Error("Method not implemented.");
  }
  
  async findByDocument(txDocument: string): Promise<Person> {
    throw new Error("Method not implemented.");
  }
  
  async save(person: Person): Promise<void> {
    throw new Error("Method not implemented.");
  }
}