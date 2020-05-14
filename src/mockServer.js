import teamMembers from 'teamMembers';

const resolveRequest = value => (
 new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(value);
    }, 1500);
  })
);

export const typeDefs = `
  type Query {
    teamMembers: [TeamMember!]
    teamMember(id: Int!): TeamMember!
  }
  
  type Mutation {
    updateName(id: Int!, name: String!): TeamMember!
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
  },
  Mutation: {
    updateName: (parent, { id, name }) => {
      const teamMember = teamMembers.find(member => member.id === id);
      if (!teamMember) return null;

      teamMember.name = name;

      return teamMember;
    }
  }
}
