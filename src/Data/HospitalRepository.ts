import { container } from "tsyringe";
import { Hospital } from "../Domain/entities/Hospital/Hospital";
import { IHospitalRepository } from "../Domain/interfaces/IHospitalRepository";
import { dbConfig } from "../shared/dbConfig";
import { QueryTypes } from "sequelize";

export class HospitalRepository implements IHospitalRepository {

  db_Config = container.resolve(dbConfig);

  async findAll(): Promise<object[]> {
    try {
      const result = await this.db_Config.sequelize.query(`SELECT * FROM hospital`, {
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
  
  async findByName(txName: string): Promise<object> {
    try {
      const result = await this.db_Config.sequelize.query(`SELECT * FROM hospital WHERE txName = :txName`, {
        replacements: { txName: txName },
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
  async save(hospital: Hospital): Promise<void> {
    try {
      await this.db_Config.sequelize.query(`INSERT INTO hospital (id, txName) values (:id, :txName)`, {
        replacements: { id: hospital.id, txName: hospital.txName },
        raw: true
      });
    } catch (error) {
      throw new Error(error)
    }
  }
}