import { inject, injectable } from "tsyringe";
import { PersonContactService } from "../Service/PersonContactService";
import { Request, Response } from "express";

@injectable()
export class PersonContactController {
  private service: PersonContactService;

  constructor(@inject('PersonContactService') personContactService: PersonContactService){
    this.service = personContactService;
  }

  async findAllContactByPerson(request: Request, response: Response): Promise<Response> {
    const { idPerson } = request.body;
    try {
      const address = await this.service.findAllContactByPerson(idPerson);
      return response.status(200).send(address)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async findAllContactByHospital(request: Request, response: Response): Promise<Response> {
    const { idHospital } = request.body;
    try {
      const hospital = await this.service.findAllContactByHospital(idHospital);
      return response.status(200).send(hospital)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async savePersonContact(request: Request, response: Response): Promise<Response> {
    const {txContactType, txContact, idPerson, idHospital} = request.body
    try {
      const contactCreated = await this.service.savePersonContact(
        {
          txContactType,
          txContact,
          idPerson: idPerson,
          idHospital: idHospital
        });
      
      return response.status(200).send(contactCreated)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}