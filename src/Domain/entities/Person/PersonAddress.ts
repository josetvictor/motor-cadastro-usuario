import { uuid } from "uuidv4";

import { Person } from "./Person";
import { Hospital } from "../Hospital/Hospital";

export class PersonAddress {
  public Id?: string;

  public txPlace: string;
  public vaNumber: number;
  public txReference: string;
  public person: Person;
  public hospital?: Hospital;

  constructor(props: Omit<PersonAddress, 'id'>, id?: string){
    this.txPlace = props.txPlace;
    this.vaNumber = props.vaNumber;
    this.txReference = props.txReference;
    this.person = props.person;
    this.hospital = props.hospital;

    if(!id)
      this.Id = uuid();
  }
}