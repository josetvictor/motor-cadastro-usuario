import { Hospital } from "../entities/Hospital/Hospital";

export interface IHospitalRepository {
  findAll(): Promise<Hospital>;
  findByName(txName: string): Promise<Hospital>;
  save(hospital: Hospital): Promise<void>;
}