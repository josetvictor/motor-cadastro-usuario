import { inject, injectable } from "tsyringe";

import { IService } from "../shared/interface/IService";
import { IHospitalRepository } from "../Domain/interfaces/IHospitalRepository";

import { Hospital } from "../Domain/entities/Hospital/Hospital";
import { HospitalRepository } from "../Data/HospitalRepository";

@injectable()
export class HospitalService implements IService<Hospital> {
  private hospitalRepository: IHospitalRepository;

  constructor(@inject('HospitalRepository') hospialRepository: HospitalRepository) 
  {
    this.hospitalRepository = hospialRepository;
  }

  Create(t: Hospital): Promise<void> {
    throw new Error("Method not implemented.");
  }
  ReadAll(): Promise<Hospital> {
    throw new Error("Method not implemented.");
  }
  ReadById(id: string): Promise<Hospital> {
    throw new Error("Method not implemented.");
  }
  Update(t: Hospital): Promise<Hospital> {
    throw new Error("Method not implemented.");
  }
  Delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}