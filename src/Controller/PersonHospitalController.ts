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
      const address = await this.service.findAllByPerson(idPerson);
      return response.status(200).send(address)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async findAllByHospital(request: Request, response: Response): Promise<Response> {
    const { idHospital } = request.body;
    try {
      const hospital = await this.service.findAllByHospital(idHospital);
      return response.status(200).send(hospital)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async savePersonWithHospitalExist(request: Request, response: Response): Promise<Response> {
    const {txName, txSurname, txDocument, isConsent, dtBirth, idHospital } = request.body;

    try {
      await this.service.savePersonWithHospitalExist(
        {
          txName,
          txSurname,
          txDocument,
          isConsent,
          dtBirth,
        },
        idHospital);
      
      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}