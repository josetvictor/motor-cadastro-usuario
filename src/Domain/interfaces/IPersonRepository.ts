import { Person } from "../entities/Person/Person";

export interface IPersonRepository {
  findAll(): Promise<object[]>;
  findByDocument(txDocument: string): Promise<object>;
  save(person: Person): Promise<void>;
}