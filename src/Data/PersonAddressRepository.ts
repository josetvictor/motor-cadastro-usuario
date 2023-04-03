import { container } from "tsyringe";
import { QueryTypes } from "sequelize";

import { PersonAddress } from "../Domain/entities/Person/PersonAddress";
import { IPersonAddressRepository } from "../Domain/interfaces/IPersonAddressRepository";

import { dbConfig } from "../shared/dbConfig";

export class PersonAddressRepository implements IPersonAddressRepository {
  
  db_Config = container.resolve(dbConfig);

  async findAllByPerson(idPerson: string): Promise<object[]> {
    try {
      const result = await this.db_Config.sequelize.query(`SELECT * FROM person_address WHERE idPerson = :idPerson`, {
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
  
  async save(address: PersonAddress): Promise<void> {
    try {
      await this.db_Config.sequelize.query(`INSERT INTO person_address (id, txPlace, vaNumber, txReference, idPerson, idHospital) values (:id, :txPlace, :vaNumber, :txReference, :idPerson, :idHospital)`, {
        replacements: { 
          id: address.id,
          txPlace: address.txPlace, 
          vaNumber: address.vaNumber,
          txReference: address.txReference,
          idPerson: address.idPerson,
          idHospital: address.idHospital
        },
        raw: true
      });
    } catch (error) {
      throw new Error(error)
    }
  }
}