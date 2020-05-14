import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { Link, withRouter } from 'react-router-dom';

import { TEAM_MEMBER } from 'queries';

const TeamMember = ({ match: { params: { id } } }) => {
  const { data, loading } = useQuery(TEAM_MEMBER, {
    variables: {
      id: Number.parseInt(id)
    }
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div className='TeamMember'>
      <Link to='/'>Back</Link>

      <div className='TeamMember__Details'>
        <span>ID: {data.teamMember.id}</span>
        <span>Name: {data.teamMember.name}</span>
      </div>
    </div>
  );
}

export default withRouter(TeamMember);
