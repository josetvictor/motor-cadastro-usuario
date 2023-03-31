import "reflect-metadata"
import { container } from "tsyringe";

import { IPersonRepository } from "../../Domain/interfaces/IPersonRepository";
import { PersonRepositoy } from "../../Data/PersonRepository";
import { PersonService } from "../../Service/PersonService";

container.registerSingleton<IPersonRepository>('PersonRepository', PersonRepositoy);
container.registerSingleton<PersonService>('PersonService', PersonService);
