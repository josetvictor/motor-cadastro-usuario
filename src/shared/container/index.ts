import "reflect-metadata"
import { container } from "tsyringe";

import { IPersonRepository } from "../../Domain/interfaces/IPersonRepository";
import { PersonRepositoy } from "../../Data/PersonRepository";
import { PersonService } from "../../Service/PersonService";

import { IHospitalRepository } from "../../Domain/interfaces/IHospitalRepository";
import { HospitalRepository } from "../../Data/HospitalRepository";
import { HospitalService } from "../../Service/HospitalService";

container.registerSingleton<IPersonRepository>('PersonRepository', PersonRepositoy);
container.registerSingleton<PersonService>('PersonService', PersonService);

container.registerSingleton<IHospitalRepository>("HospitalRepository", HospitalRepository);
container.registerSingleton<HospitalService>("HospitalService", HospitalService);
