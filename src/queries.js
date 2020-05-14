import gql from 'graphql-tag';

export const TEAM_MEMBERS = gql`
  query TeamMembers {
    teamMembers {
      id
      name
    }
  }
`;

export const TEAM_MEMBER = gql`
  query TeamMember($id: Int!) {
    teamMember(id: $id) {
      id
      name
    }
  }
`;
