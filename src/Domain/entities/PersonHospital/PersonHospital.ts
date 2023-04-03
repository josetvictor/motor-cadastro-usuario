import { uuid } from "uuidv4";

export class PersonHospital {
  public readonly id?: string;

  public idPerson: string;
  public idHospital: string;

  constructor(props: Omit<PersonHospital, 'id'>, id?: string){
    this.idPerson = props.idPerson;
    this.idHospital = props.idHospital;

    if(!id)
      this.id = uuid();

  }
}