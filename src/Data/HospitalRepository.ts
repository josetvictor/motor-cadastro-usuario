import { Hospital } from "../Domain/entities/Hospital/Hospital";
import { IHospitalRepository } from "../Domain/interfaces/IHospitalRepository";

export class HospitalRepository implements IHospitalRepository {
  findAll(): Promise<Hospital[]> {
    throw new Error("Method not implemented.");
  }
  findByName(txName: string): Promise<Hospital> {
    throw new Error("Method not implemented.");
  }
  save(hospital: Hospital): Promise<Hospital> {
    throw new Error("Method not implemented.");
  }

}