import teamMembers from 'teamMembers';

const resolveRequest = value => (
 new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(value);
    }, 3000);
  })
);

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
    teamMembers: () => resolveRequest(teamMembers),
    teamMember: (parent, { id }) => resolveRequest(teamMembers.find(member => member.id === id))
  }
}
