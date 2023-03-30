import { Router } from "express";


const router = Router();

router.get('/helloWorld', (req, res) =>{
  return res.status(200).send();
});

export { router };