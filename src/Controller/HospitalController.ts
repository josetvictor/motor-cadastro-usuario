import { inject, injectable } from "tsyringe";
import { HospitalService } from "../Service/HospitalService";
import { Request, Response } from "express";
import { Hospital } from "../Domain/entities/Hospital/Hospital";

@injectable()
export class HospitalController {
  private service: HospitalService;

  constructor(@inject('HospitalService') hospitalService: HospitalService){
    this.service = hospitalService;
  }

  async findAllHospital(request: Request, response: Response): Promise<Response> {
    try {
      const hospital = await this.service.findAllHospital();
      return response.status(200).send(hospital)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async findHospitalByName(request: Request, response: Response): Promise<Response> {
    const { txName } = request.body;
    try {
      const hospital = await this.service.findHospitalByName(txName);
      return response.status(200).send(hospital)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async saveHospital(request: Request, response: Response): Promise<Response> {
    const {txName} = request.body
    try {
      const hospitalCreated = await this.service.saveHospital({txName});
      
      return response.status(200).send(hospitalCreated)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}