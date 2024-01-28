import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';
import { Event } from '../events/event.entity';

const migrationSelector = path
  .resolve(__dirname, 'migrations', '*.ts')
  .toString();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5436,
  username: 'postgres',
  password: 'xxx',
  database: 'infinite-api',
  migrations: [migrationSelector],
  entities: [Event],
  synchronize: false,
};

export default new DataSource(dataSourceOptions);
