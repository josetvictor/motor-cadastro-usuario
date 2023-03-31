import { Router } from "express";
import { container } from "tsyringe";

import { PersonController } from "./Controller/PersonController";

const router = Router();
const InjectPersonController = container.resolve(PersonController);

router.get('/person', (req, res) =>{ return InjectPersonController.FindAllPerson(req, res) });
router.get('/person/:document', (req, res) =>{ return InjectPersonController.FindByDocumentPerson(req, res) });
router.post('/person', (req, res) =>{ return InjectPersonController.CreatePerson(req, res) });

export { router };