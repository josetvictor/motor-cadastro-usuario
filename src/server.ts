import './shared/container';

import { app } from "./app";
import { container } from 'tsyringe';
import { dbConfig } from './shared/dbConfig';

const db_Config = container.resolve(dbConfig);

db_Config.sequelize.authenticate()
  .then(() => {
    console.log('DB connection established successfully')
  })
  .catch(err => {
    console.log('Unable to connect to DB', err);
  });

app.listen(3333);