export const Query = `
    type Query {
        Rubric: Rubric
        cards: [Card]
        card(id: String!): Card
    }
`;
