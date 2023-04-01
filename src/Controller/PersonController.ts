import { Request, Response } from 'express';
import { inject, injectable } from "tsyringe";
import { PersonService } from "../Service/PersonService";

@injectable()
export class PersonController {
  private personService: PersonService;
  
  constructor(@inject('PersonService') personService: PersonService){
    this.personService = personService;
  }

  async findAllPerson(request: Request, response: Response): Promise<Response> {
    try {
      const person = await this.personService.findAllPerson();

      return response.status(200).send(person)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async findByDocumentPerson(request: Request, response: Response): Promise<Response> {
    const {txDocument} = request.body;

    try {
      const person = await this.personService.findPersonByDocument(txDocument);

      return response.status(200).send(person)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async savePerson(request: Request, response: Response): Promise<Response> {
    const {txName, txSurname, txDocument, isConsent, dtBirth } = request.body;

    try {
      await this.personService.savePerson({
        txName,
        txSurname,
        txDocument,
        isConsent,
        dtBirth,
      });

      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}