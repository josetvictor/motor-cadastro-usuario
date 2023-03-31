import { uuid } from "uuidv4";

import { Hospital } from "../Hospital/Hospital";
import { Person } from "../Person/Person";

export class HospitalPerson {
  public readonly Id?: string;

  public person: Person[];
  public hospital: Hospital;

  constructor(props: Omit<HospitalPerson, 'id'>, id?: string){
    this.person = props.person;
    this.hospital = props.hospital;

    if(!id)
      this.Id = uuid();

  }
}