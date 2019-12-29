import RubricTypes from './rubric/types';
import { Card } from './types/card';
import { CardPatch } from './types/card-patch';
import { NewCardPatch } from './types/new-card-patch';

export const types = [
  ...RubricTypes,
  Card,
  CardPatch,
  NewCardPatch, // <-- add type here
];
