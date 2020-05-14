import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Link, withRouter } from 'react-router-dom';

import { TEAM_MEMBER, UPDATE_NAME } from 'queries';

const TeamMember = ({ match: { params: { id } } }) => {
  const [name, setName] = useState('');
  const { data, loading } = useQuery(TEAM_MEMBER, {
    variables: {
      id: Number.parseInt(id)
    },
    onCompleted: ({ teamMember }) => setName(teamMember.name)
  });
  const [updateName] = useMutation(UPDATE_NAME, {
    variables: {
      id: Number.parseInt(id),
      name
    }
  });
  const handleChange = ({ target: { value } }) => setName(value);
  const handleSubmit = event => {
    event.preventDefault();
    if (!name) return null;

    updateName();
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className='TeamMember'>
      <Link to='/'>Back</Link>

      <div className='TeamMember__Details'>
        <span>ID: {data.teamMember.id}</span>
        <span>Name: {data.teamMember.name}</span>
      </div>

      <form className='TeamMember__Form' onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' value={name} onChange={handleChange} />
      </form>
    </div>
  );
}

export default withRouter(TeamMember);
