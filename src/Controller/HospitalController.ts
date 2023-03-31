import { inject, injectable } from "tsyringe";
import { HospitalService } from "../Service/HospitalService";
import { Request, Response } from "express";

@injectable()
export class HospitalController {
  private hospitalService: HospitalService;

  constructor(@inject('HospitalService') hospitalService: HospitalService){
    this.hospitalService = hospitalService;
  }

  async FindAllHospital(request: Request, response: Response): Promise<Response> {
    try {
      const hospital = await this.hospitalService.ReadAll();
      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async CreateHospital(request: Request, response: Response): Promise<Response> {
    const {txName} = request.body
    try {
      await this.hospitalService.Create({txName});
      
      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}