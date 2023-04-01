import { inject, injectable } from "tsyringe";
import { HospitalService } from "../Service/HospitalService";
import { Request, Response } from "express";

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
      await this.service.saveHospital({txName});
      
      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}