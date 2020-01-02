import { createConnection } from 'typeorm';

// eslint-disable-next-line no-return-await
export default async () => createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'shop',
  entities: [
    'src-back/entities/*.ts',
  ],
  logging: ['query', 'error'],
  // synchronize: true,
}).then(() => {
  console.log('Database connection established');
});
