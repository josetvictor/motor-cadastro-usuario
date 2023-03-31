import { Request, Response } from 'express';
import { inject, injectable } from "tsyringe";
import { PersonService } from "../Service/PersonService";

@injectable()
export class PersonController {
  private personService: PersonService;
  constructor(@inject('PersonService') personService: PersonService){
    this.personService = personService;
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
        message: error.message || 'teste'
      })
    }
  }
}