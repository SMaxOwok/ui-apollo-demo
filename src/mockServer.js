import teamMembers from 'teamMembers';

export const typeDefs = `
  type Query {
    teamMembers: [TeamMember!]
    teamMember(id: Int!): TeamMember!
  }
  
  type TeamMember {
    id: Int!
    name: String!
  }
`;

export const resolvers = {
  Query: {
    teamMembers: () => teamMembers,
    teamMember: (parent, { id }) => teamMembers.find(member => member.id === id)
  }
}
