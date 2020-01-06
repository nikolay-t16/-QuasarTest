import * as Router from 'koa-router';

import {
  graphqlKoa,
  graphiqlKoa,
} from 'apollo-server-koa';

import schema from './graphql/schema';


export const routes = new Router();

// API entrypoint
const apiEntrypointPath = '/graphql';
const graphQlOpts = graphqlKoa({
  schema,
});

routes.get(apiEntrypointPath, graphQlOpts);
routes.post(apiEntrypointPath, graphQlOpts);

// GraphiQL entrypoint
// @ts-ignore
routes.get('/graphiql', graphiqlKoa({ endpointURL: apiEntrypointPath }));
