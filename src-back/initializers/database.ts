import { createConnection } from 'typeorm';
import { Card } from '../entities/card';

// eslint-disable-next-line no-return-await
export const databaseInitializer = async () => await createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'shop',
  entities: [
    Card,
  ],
  logging: ['query', 'error'],
  // synchronize: true,
}).then(() => {
  console.log('Database connection established');
});
