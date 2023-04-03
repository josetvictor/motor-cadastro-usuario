import { Hospital } from "../entities/Hospital/Hospital";

export interface IHospitalRepository {
  findAll(): Promise<object[]>;
  findByName(txName: string): Promise<object>;
  save(hospital: Hospital): Promise<void>;
}