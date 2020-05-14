import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { TeamMember, TeamMembers } from 'components';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/team-members/:id' component={TeamMember} exact />
          <Route path='/' component={TeamMembers} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
