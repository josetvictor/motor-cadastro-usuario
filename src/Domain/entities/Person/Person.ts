import { v4 as uuid } from 'uuid';

export class Person {
  public readonly id?: string;

  public txName: string;
  public txSurname: string;
  public txDocument: string;
  public isConsent: boolean;

  constructor(props: Omit<Person, 'id'>, id?: string){
    this.txName = props.txName;
    this.txSurname = props.txSurname;
    this.txDocument = props.txDocument;
    this.isConsent = props.isConsent;

    if(!id)
      this.id = uuid();

  }
}