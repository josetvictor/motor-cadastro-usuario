import { uuid } from "uuidv4";

import { Hospital } from "../Hospital/Hospital";
import { Person } from "./Person";

export class PersonContact {
  public readonly Id?: string;

  public txContactType: string;
  public txContact: string;
  public person: Person;
  public hospital: Hospital;

  constructor(props: Omit<PersonContact, 'id'>, id?: string){
    this.txContactType = props.txContactType;
    this.txContact = props.txContact;
    this.person = props.person;
    this.hospital = props.hospital;

    if(!id)
      this.Id = uuid();
  }
}