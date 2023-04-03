import { uuid } from "uuidv4";

export class PersonAddress {
  public id?: string;

  public txPlace: string;
  public vaNumber: number;
  public txReference: string;
  public idPerson: string;
  public idHospital?: string;

  constructor(props: Omit<PersonAddress, 'id'>, id?: string){
    this.txPlace = props.txPlace;
    this.vaNumber = props.vaNumber;
    this.txReference = props.txReference;
    this.idPerson = props.idPerson;
    this.idHospital = props.idHospital;

    if(!id)
      this.id = uuid();
  }
}