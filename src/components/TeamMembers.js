import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom';

import { TEAM_MEMBERS } from 'queries';

const TeamMembers = () => {
  const { data, loading } = useQuery(TEAM_MEMBERS);

  if (loading) return <div>Loading...</div>;

  return (
    <div className='TeamMembers'>
      <ul>
        {data.teamMembers.map(teamMember => (
          <li className='TeamMembers__Member' key={teamMember.id}>
            <Link to={`/team-members/${teamMember.id}`}>
              <span className='TeamMembers__MemberName'>{teamMember.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamMembers;
