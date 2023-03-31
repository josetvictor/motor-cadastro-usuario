import { uuid } from "uuidv4";

export class Hospital {
  public readonly Id?: string;

  public txName: string;

  constructor(props: Omit<Hospital, 'id'>, id?: string){
    this.txName = props.txName;

    if(!id)
      this.Id = uuid();

  }
}