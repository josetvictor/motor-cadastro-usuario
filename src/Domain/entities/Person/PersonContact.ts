import { uuid } from "uuidv4";

export class PersonContact {
  public readonly id?: string;

  public txContactType: string;
  public txContact: string;
  public idPerson: string;
  public idHospital: string;

  constructor(props: Omit<PersonContact, 'id'>, id?: string){
    this.txContactType = props.txContactType;
    this.txContact = props.txContact;
    this.idPerson = props.idPerson;
    this.idHospital = props.idHospital;

    if(!id)
      this.id = uuid();
  }
}