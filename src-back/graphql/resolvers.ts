import { cardResolver } from './resolvers/card';
import { cardsResolver } from './resolvers/cards';

import { toggleCardMutation } from './mutations/toggle-card';
import { updateCardMutation } from './mutations/update-card';
import { createCardMutation } from './mutations/create-card';

export const resolvers = {
  Query: {
    ...cardsResolver,
    ...cardResolver,
  },

  Mutation: {
    ...toggleCardMutation,
    ...updateCardMutation,
    ...createCardMutation, // <-- add mutation to schema
  },
};
