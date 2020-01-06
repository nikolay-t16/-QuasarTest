import * as Koa from 'koa';
import * as cors from 'koa2-cors';
import * as koaBody from 'koa-bodyparser';

import connect from './db/connect';
import { routes } from './routes';


const bootstrap = async () => {
  await connect();
  const app = new Koa();

  app
    // @ts-ignore
    .use(koaBody())
    .use(cors())
    .use(routes.routes())
    .use(routes.allowedMethods())
    .listen(3001);
};

bootstrap().then(() => console.log('Server running on port 3001'));
