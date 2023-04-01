import { Router } from "express";
import { container } from "tsyringe";

import { PersonController } from "./Controller/PersonController";
import { HospitalController } from "./Controller/HospitalController";
import { PersonAddressController } from "./Controller/PersonAddressController";
import { PersonContactController } from "./Controller/PersonContactController";
import { PersonHospitalController } from "./Controller/PersonHospitalController";

const router = Router();
const InjectPersonController = container.resolve(PersonController);
const InjectHospitalController = container.resolve(HospitalController);
const InjectPersonAddressController = container.resolve(PersonAddressController);
const InjectPersonContactController = container.resolve(PersonContactController);
const InjectPersonHospitalController = container.resolve(PersonHospitalController);
// TODO : realizar organização das rotas a serem usadas
router.get('/person', (req, res) =>{ return InjectPersonController.findAllPerson(req, res) });
router.get('/person/:document', (req, res) =>{ return InjectPersonController.findByDocumentPerson(req, res) });
router.post('/person', (req, res) =>{ return InjectPersonController.savePerson(req, res) });

router.get('/hospital', (req, res) =>{ return InjectHospitalController.findAllHospital(req, res) });
router.post('/hospital', (req, res) =>{ return InjectHospitalController.saveHospital(req, res) });

export { router };