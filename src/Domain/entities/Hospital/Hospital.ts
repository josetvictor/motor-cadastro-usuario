import { v4 as uuid } from 'uuid';

export class Hospital {
  public readonly id?: string;

  public txName: string;

  constructor(props: Omit<Hospital, 'id'>, id?: string){
    this.txName = props.txName;

    if(!id)
      this.id = uuid();

  }
}