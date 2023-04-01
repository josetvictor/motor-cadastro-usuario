import { inject, injectable } from "tsyringe";

import { IHospitalRepository } from "../Domain/interfaces/IHospitalRepository";

import { Hospital } from "../Domain/entities/Hospital/Hospital";
import { HospitalRepository } from "../Data/HospitalRepository";

@injectable()
export class HospitalService {
  private repository: IHospitalRepository;

  constructor(@inject('HospitalRepository') hospitalRepository: HospitalRepository) 
  {
    this.repository = hospitalRepository;
  }

  async findAllHospital(): Promise<Hospital> {
    try {
      return await this.repository.findAll();
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findHospitalByName(txName: string): Promise<Hospital> {
    try {
      return await this.repository.findByName(txName);
    } catch (error) {
      throw new Error(error.menssage)
    }
  }

  async saveHospital(hospital: Hospital): Promise<void> {
    try {
      const existHospital = await this.repository.findByName(hospital.txName);

      if(existHospital) {
        throw new Error("");
      }

      await this.repository.save(hospital);
    } catch (error) {
      throw new Error(error);
    }
  }
}