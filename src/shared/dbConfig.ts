import { Sequelize } from "sequelize";
import { injectable, singleton } from "tsyringe";

@injectable()
@singleton()
export class dbConfig {
  public sequelize: Sequelize;
  constructor(){
    this.sequelize = new Sequelize('mysql://root:root@127.0.0.1:3308/test_db');
  }
}