import { container } from "tsyringe";
import { PersonHospital } from "../Domain/entities/PersonHospital/PersonHospital";
import { IPersonHospitalRepository } from "../Domain/interfaces/IPersonHospitalRepository";
import { dbConfig } from "../shared/dbConfig";
import { QueryTypes } from "sequelize";

export class PersonHospitalRepository implements IPersonHospitalRepository {

  db_Config = container.resolve(dbConfig);

  async findAllByPerson(idPerson: string): Promise<object[]> {
    try {
      const result = await this.db_Config.sequelize.query(`SELECT * FROM person_hospital WHERE idPerson = :idPerson`, {
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
      const result = await this.db_Config.sequelize.query(`SELECT * FROM person_hospital WHERE idHospital = :idHospital`, {
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

  async save(personHospital: PersonHospital): Promise<void> {
    try {
      await this.db_Config.sequelize.query(`INSERT INTO person_hospital (id, idPerson, idHospital) values (:id, :idPerson, :idHospital)`, {
        replacements: {
          id: personHospital.id,
          idPerson: personHospital.idPerson,
          idHospital: personHospital.idHospital
        },
        raw: true
      });
    } catch (error) {
      throw new Error(error)
    }
  }

}