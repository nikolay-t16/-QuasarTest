import RubricQuery from './rubric/queryes';
import { cardResolver } from './resolvers/card';
import { cardsResolver } from './resolvers/cards';

import { toggleCardMutation } from './mutations/toggle-card';
import { updateCardMutation } from './mutations/update-card';
import { createCardMutation } from './mutations/create-card';
console.log({
  ...RubricQuery,
  ...cardsResolver,
  ...cardResolver,
});
export const resolvers = {
  Query: {
    ...RubricQuery,
    ...cardsResolver,
    ...cardResolver,
  },

  Mutation: {
    ...toggleCardMutation,
    ...updateCardMutation,
    ...createCardMutation, // <-- add mutation to schema
  },
};
