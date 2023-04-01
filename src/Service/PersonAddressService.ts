import { inject, injectable } from "tsyringe";
import { PersonAddressRepository } from "../Data/PersonAddressRepository";
import { IPersonAddressRepository } from "../Domain/interfaces/IPersonAddressRepository";
import { PersonAddress } from "../Domain/entities/Person/PersonAddress";

@injectable()
export class PersonAddressService {
  private repository: IPersonAddressRepository;

  constructor(@inject('PersonAddressRepository') personAddressRepository: PersonAddressRepository){
    this.repository = personAddressRepository;
  }

  async findAllAddressByPerson(idPerson: string): Promise<PersonAddress> {
    try {
      return await this.repository.findAllByPerson(idPerson);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAllAddressByHospital(idHospital: string): Promise<PersonAddress> {
    try {
      return await this.repository.findAllByHospital(idHospital);
    } catch (error) {
      throw new Error(error.menssage);
    }
  }

  async savePersonAddress(address: PersonAddress): Promise<void> {
    try {
      return await this.repository.save(address);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}