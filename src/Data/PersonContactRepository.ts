import { container } from "tsyringe";
import { QueryTypes } from "sequelize";

import { PersonContact } from "../Domain/entities/Person/PersonContact";
import { IPersonContactRepository } from "../Domain/interfaces/IPersonContactRepository";

import { dbConfig } from "../shared/dbConfig";

export class PersonContactRepository implements IPersonContactRepository {
  
  db_Config = container.resolve(dbConfig);
  
  async findAllByPerson(idPerson: string): Promise<object[]> {
    try {
      const result = await this.db_Config.sequelize.query(`SELECT * FROM person_contact WHERE idPerson = :idPerson`, {
        replacements: { idPerson: idPerson },
        type: QueryTypes.SELECT,
        raw: true
      });

      if(result === undefined || result.length == 0)
        return []

      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  async findAllByHospital(idHospital: string): Promise<object[]> {
    try {
      const result = await this.db_Config.sequelize.query(`SELECT * FROM person_address WHERE idHospital = :idHospital`, {
        replacements: { idHospital: idHospital },
        type: QueryTypes.SELECT,
        raw: true
      });

      if(result === undefined || result.length == 0)
        return []

      return result
    } catch (error) {
      throw new Error(error)
    }
  }
  
  async save(contact: PersonContact): Promise<void> {
    try {
      await this.db_Config.sequelize.query(`INSERT INTO person_contact (id, txContactType, txContact, idPerson, idHospital) values (:id, :txContactType, :txContact, :idPerson, :idHospital)`, {
        replacements: { 
          id: contact.id,
          txContactType: contact.txContactType, 
          txContact: contact.txContact,
          idPerson: contact.idPerson,
          idHospital: contact.idHospital
        },
        raw: true
      });
    } catch (error) {
      throw new Error(error)
    }
  }
}