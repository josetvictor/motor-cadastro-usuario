import { Person } from "../entities/Person";

export interface IPersonRepository {
  findAll(): Promise<Person>;
  findByDocument(txDocument: string): Promise<Person>;
  save(person: Person): Promise<void>;
}