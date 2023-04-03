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
      const contact = await this.service.findAllContactByPerson(idPerson);
      return response.status(200).json({
        status: "OK",
        message: "Contact found.",
        data: contact
      })
    } catch (error) {
      return response.status(400).json({
        status: "Bad Request",
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async findAllContactByHospital(request: Request, response: Response): Promise<Response> {
    const { idHospital } = request.body;
    try {
      const contact = await this.service.findAllContactByHospital(idHospital);
      return response.status(200).json({
        status: "OK",
        message: "Contact found.",
        data: contact
      })
    } catch (error) {
      return response.status(400).json({
        status: "Bad Request",
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async savePersonContact(request: Request, response: Response): Promise<Response> {
    const {txContactType, txContact, idPerson, idHospital} = request.body
    try {
      await this.service.savePersonContact(
        {
          txContactType,
          txContact,
          idPerson: idPerson,
          idHospital: idHospital
        });
      
      return response.status(201).json({
        status: "Created",
        message: "Hospital Created."
      })
    } catch (error) {
      return response.status(400).json({
        status: "Bad Request",
        message: error.message || 'Unexpected error.'
      })
    }
  }
}