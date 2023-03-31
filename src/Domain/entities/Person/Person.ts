import { uuid } from "uuidv4";

export class Person {
  public readonly Id?: string;

  public txName: string;
  public txSurname: string;
  public txDocument: string;
  public isConsent: boolean;
  public dtBirth: Date;

  constructor(props: Omit<Person, 'id'>, id?: string){
    this.txName = props.txName;
    this.txSurname = props.txSurname;
    this.txDocument = props.txDocument;
    this.isConsent = props.isConsent;
    this.dtBirth = props.dtBirth;

    if(!id)
      this.Id = uuid();

  }
}