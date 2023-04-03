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

  async findAllHospital(): Promise<object[]> {
    try {
      return await this.repository.findAll();
    } catch (error) {
      throw new Error(error)
    }
  }

  async findHospitalByName(txName: string): Promise<object> {
    try {
      return await this.repository.findByName(txName);
    } catch (error) {
      throw new Error(error)
    }
  }

  async saveHospital(hospital: Hospital): Promise<void> {
    try {
      const existHospital = await this.repository.findByName(hospital.txName);

      if(existHospital !== null) {
        throw new Error("Hospital com esse nome já existe!");
      }

      let result = await this.repository.save(new Hospital(hospital));
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}