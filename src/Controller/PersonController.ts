import { Request, Response } from 'express';
import { inject, injectable } from "tsyringe";
import { PersonService } from "../Service/PersonService";

@injectable()
export class PersonController {
  private personService: PersonService;
  
  constructor(@inject('PersonService') personService: PersonService){
    this.personService = personService;
  }

  async FindAllPerson(request: Request, response: Response): Promise<Response> {
    try {
      const person = await this.personService.FindAllPerson();

      return response.status(200).send(person)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async FindByDocumentPerson(request: Request, response: Response): Promise<Response> {
    const {txDocument} = request.body;

    try {
      const person = await this.personService.FindPersonByDocument(txDocument);

      return response.status(200).send(person)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async CreatePerson(request: Request, response: Response): Promise<Response> {
    const {txName, txSurname, txDocument, isConsent, dtBirth } = request.body;

    try {
      await this.personService.CreatePerson({
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