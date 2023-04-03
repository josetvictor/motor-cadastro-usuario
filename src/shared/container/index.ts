import "reflect-metadata"

import { container } from "tsyringe";

import { IPersonRepository } from "../../Domain/interfaces/IPersonRepository";
import { PersonRepositoy } from "../../Data/PersonRepository";
import { PersonService } from "../../Service/PersonService";

import { IHospitalRepository } from "../../Domain/interfaces/IHospitalRepository";
import { HospitalRepository } from "../../Data/HospitalRepository";
import { HospitalService } from "../../Service/HospitalService";

import { IPersonContactRepository } from "../../Domain/interfaces/IPersonContactRepository";
import { PersonContactRepository } from "../../Data/PersonContactRepository";
import { PersonContactService } from "../../Service/PersonContactService";

import { IPersonAddressRepository } from "../../Domain/interfaces/IPersonAddressRepository";
import { PersonAddressRepository } from "../../Data/PersonAddressRepository";
import { PersonAddressService } from "../../Service/PersonAddressService";

import { IPersonHospitalRepository } from "../../Domain/interfaces/IPersonHospitalRepository";
import { PersonHospitalRepository } from "../../Data/PersonHospitalRepository";
import { PersonHospitalService } from "../../Service/PersonHospitalService";

container.registerSingleton<IPersonAddressRepository>("PersonAddressRepository", PersonAddressRepository);
container.registerSingleton<PersonAddressService>("PersonAddressService", PersonAddressService);

container.registerSingleton<IPersonContactRepository>("PersonContactRepository", PersonContactRepository);
container.registerSingleton<PersonContactService>("PersonContactService", PersonContactService);

container.registerSingleton<IHospitalRepository>("HospitalRepository", HospitalRepository);
container.registerSingleton<HospitalService>("HospitalService", HospitalService);

container.registerSingleton<IPersonHospitalRepository>("PersonHospitalRepository", PersonHospitalRepository);
container.registerSingleton<PersonHospitalService>("PersonHospitalService", PersonHospitalService);

container.registerSingleton<IPersonRepository>('PersonRepository', PersonRepositoy);
container.registerSingleton<PersonService>('PersonService', PersonService);

