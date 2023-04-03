import { container } from "tsyringe";
import { QueryTypes } from "sequelize";

import { Person } from "../Domain/entities/Person/Person";
import { IPersonRepository } from "../Domain/interfaces/IPersonRepository";

import { dbConfig } from "../shared/dbConfig";

export class PersonRepositoy implements IPersonRepository {

  db_Config = container.resolve(dbConfig);

  async findAll(): Promise<object[]> {
    try {
      const result = await this.db_Config.sequelize.query(`SELECT * FROM person`, {
        type: QueryTypes.SELECT,
        raw: true
      });

      if(result === undefined || result.length == 0)
        return []

      return result
    } catch (error) {
      throw new Error(error);
    }
  }
  
  async findByDocument(txDocument: string): Promise<object> {
    try {
      const result = await this.db_Config.sequelize.query(`SELECT * FROM person WHERE txDocument = :txDocument`, {
        replacements: { txDocument: txDocument },
        type: QueryTypes.SELECT,
        raw: true
      });

      if(result === undefined || result.length == 0)
        return null

      return result
    } catch (error) {
      throw new Error(error);
    }
  }
  
  async save(person: Person): Promise<void> {
    try {
      await this.db_Config.sequelize.query(`INSERT INTO person (id, txName, txSurname, txDocument, isConsent) values (:id, :txName, :txSurname, :txDocument, :isConsent)`, {
        replacements: { 
          id: person.id,
          txName: person.txName, 
          txSurname: person.txSurname,
          txDocument: person.txDocument,
          isConsent: person.isConsent
        },
        raw: true
      });
    } catch (error) {
      throw new Error(error)
    }
  }
}