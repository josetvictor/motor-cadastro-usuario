import { Router } from "express";
import { container } from "tsyringe";

import { PersonController } from "./Controller/PersonController";
import { HospitalController } from "./Controller/HospitalController";
import { PersonAddressController } from "./Controller/PersonAddressController";
import { PersonContactController } from "./Controller/PersonContactController";
import { PersonHospitalController } from "./Controller/PersonHospitalController";

const router = Router();
const person = container.resolve(PersonController);
const hospital = container.resolve(HospitalController);
const address = container.resolve(PersonAddressController);
const contact = container.resolve(PersonContactController);
const personHospital = container.resolve(PersonHospitalController);

router.get('/person', (req, res) =>{ return person.findAllPerson(req, res) });
router.get('/person/:document', (req, res) =>{ return person.findByDocumentPerson(req, res) });
router.post('/person', (req, res) =>{ return person.savePerson(req, res) });

router.get('/hospital', (req, res) =>{ return hospital.findAllHospital(req, res) });
router.get('/hospital/:txName', (req, res) =>{ return hospital.findHospitalByName(req, res) });
router.post('/hospital', (req, res) =>{ return hospital.saveHospital(req, res) });

router.get('/person/address/:idPerson', (req, res) => { return address.findAllAddressByPerson(req, res)});
router.get('person/address/:idHospital', (req, res) => { return address.findAllAddressByHospital(req, res)});
router.post('person/address', (req, res) => { return address.saveAddress(req, res)});

router.get('/person/contact/:idPerson', (req, res) => { return contact.findAllContactByPerson(req, res)});
router.get('person/contact/:idHospital', (req, res) => { return contact.findAllContactByHospital(req, res)});
router.post('person/contact/', (req, res) => { return contact.savePersonContact(req, res)});

router.get('person/hospital/:idPerson', (req, res) => { return personHospital.findAllByPerson(req, res) });
router.get('person/hospital/:idHospital', (req, res) => { return personHospital.findAllByHospital(req, res) });
router.post('person/hospital/', (req, res) => { return personHospital.savePersonWithHospitalExist(req, res) });

export { router };