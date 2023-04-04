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

      return response.status(200).json({
        status: "OK",
        message: "persons found.",
        data: person
      })
    } catch (error) {
      return response.status(400).json({
        status: "Bad Request",
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async findByDocumentPerson(request: Request, response: Response): Promise<Response> {
    const {txDocument} = request.params;

    try {
      const person = await this.personService.findPersonByDocument(txDocument);

      return response.status(200).json({
        status: "OK",
        message: "person found.",
        data: person
      })
    } catch (error) {
      return response.status(400).json({
        status: "Bad Request",
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async savePerson(request: Request, response: Response): Promise<Response> {
    const {txName, txSurname, txDocument, isConsent } = request.body;

    try {
      await this.personService.savePerson({
        txName,
        txSurname,
        txDocument,
        isConsent,
      });

      return response.status(201).json({
        status: "Created",
        message: "Person Created."
      })
    } catch (error) {
      return response.status(400).json({
        status: "Bad Request",
        message: error.message || 'Unexpected error.'
      })
    }
  }
}