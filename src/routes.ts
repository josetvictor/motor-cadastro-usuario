import { Router } from "express";
import { container } from "tsyringe";

import { PersonController } from "./Controller/PersonController";

const router = Router();
const InjectPersonController = container.resolve(PersonController);

// router.get('/person', (req, res) =>{ return InjectPersonController.GetAllPerson(req, res) });
router.post('/person', (req, res) =>{ return InjectPersonController.CreatePerson(req, res) });

export { router };