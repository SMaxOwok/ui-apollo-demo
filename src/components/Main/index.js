import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TeamMember from './TeamMember';
import TeamMembers from './TeamMembers';

const Main = () => {

  return (
    <div className='Main'>
      <Switch>
        <Route path='/team-members/:id' component={TeamMember} exact />
        <Route path='/' component={TeamMembers} exact />
      </Switch>
    </div>
  );
}

export default Main;
