import { inject, injectable } from "tsyringe";
import { PersonAddressService } from "../Service/PersonAddressService";
import { Request, Response } from "express";

@injectable()
export class PersonAddressController {
  private service: PersonAddressService;

  constructor(@inject('PersonAddressService') personAddressService: PersonAddressService) {
    this.service = personAddressService;
  }

  async findAllAddressByPerson(request: Request, response: Response): Promise<Response> {
    const { idPerson } = request.body;
    try {
      const address = await this.service.findAllAddressByPerson(idPerson);
      return response.status(200).json({
        status: "OK",
        message: "Address found.",
        data: address
      })
    } catch (error) {
      return response.status(400).json({
        status: "Bad Request",
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async findAllAddressByHospital(request: Request, response: Response): Promise<Response> {
    const { idHospital } = request.body;
    try {
      const address = await this.service.findAllAddressByHospital(idHospital);
      return response.status(200).json({
        status: "OK",
        message: "Address found.",
        data: address
      })
    } catch (error) {
      return response.status(400).json({
        status: "Bad Request",
        message: error.message || 'Unexpected error.'
      })
    }
  }

  async saveAddress(request: Request, response: Response): Promise<Response> {
    const {txPlace, vaNumber, txReference, idPerson, idHospital} = request.body
    try {
      await this.service.savePersonAddress(
        {
          txPlace,
          vaNumber,
          txReference,
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