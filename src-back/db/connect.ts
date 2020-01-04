import { createConnection } from 'typeorm';
import { Product } from '../entiti/Product';
import { Rubric } from '../entiti/Rubric';
// eslint-disable-next-line no-return-await
export default async () => createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'shop',
  entities: [
    'src-back/entiti/*.ts',
  ],
  logging: ['query', 'error'],
  // synchronize: true,
}).then(() => {
  console.log('Database connection established');
});