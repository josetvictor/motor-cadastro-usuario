import { inject, injectable } from "tsyringe";
import { PersonHospitalService } from "../Service/PersonHospitalService";
import { Request, Response } from "express";

@injectable()
export class PersonHospitalController {
  private service: PersonHospitalService;

  constructor(@inject('PersonHospitalService') personHospitalService: PersonHospitalService) {
    this.service = personHospitalService;
  }

  async findAllByPerson(request: Request, response: Response): Promise<Response> {
    const { idPerson } = request.body;
    try {
      const hospital = await this.service.findAllByPerson(idPerson);
      return response.status(200).json({
        status: "OK",
        message: "Persons found.",
        data: hospital
      })
    } catch (error) {
      return response.status(400).json({
        status: "Bad Request",
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async findAllByHospital(request: Request, response: Response): Promise<Response> {
    const { idHospital } = request.body;
    try {
      const hospital = await this.service.findAllByHospital(idHospital);
      return response.status(200).json({
        status: "OK",
        message: "Persons found.",
        data: hospital
      })
    } catch (error) {
      return response.status(400).json({
        status: "Bad Request",
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async savePersonWithHospitalExist(request: Request, response: Response): Promise<Response> {
    const {person: {txName, txSurname, txDocument, isConsent}, idHospital } = request.body;

    try {
      await this.service.savePersonWithHospitalExist(
        {
          txName,
          txSurname,
          txDocument,
          isConsent
        },
        idHospital);
      
      return response.status(201).json({
        status: "Created",
        message: "Created relationship."
      })
    } catch (error) {
      return response.status(400).json({
        status: "Bad Request",
        message: error.message || 'Unexpected error.'
      })
    }
  }
}