import { Router } from "express";
import { container } from "tsyringe";

import { PersonController } from "./Controller/PersonController";
import { HospitalController } from "./Controller/HospitalController";

const router = Router();
const InjectPersonController = container.resolve(PersonController);
const InjectHospitalController = container.resolve(HospitalController);

router.get('/person', (req, res) =>{ return InjectPersonController.FindAllPerson(req, res) });
router.get('/person/:document', (req, res) =>{ return InjectPersonController.FindByDocumentPerson(req, res) });
router.post('/person', (req, res) =>{ return InjectPersonController.CreatePerson(req, res) });

router.get('/hospital', (req, res) =>{ return InjectHospitalController.FindAllHospital(req, res) });
router.post('/hospital', (req, res) =>{ return InjectHospitalController.CreateHospital(req, res) });

export { router };