import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import JobForm from './components/JobForm';
import JobList from './components/JobList';
import AddJobButton from './components/AddJobButton';
import BackButton from './components/BackButton';
import "./App.css"
const App = () => {
  return (
    
    <Router>
      <div className='button'>
      <BackButton />
      </div>
      <div className='vacancy'>
      <h2>JobVacancy</h2>
      </div>
      <div className='add'>
      <AddJobButton/>
      </div>
      <div className="app">
        <Switch>
          <Route exact path="/" component={JobList} />
          <Route path="/add-job" component={JobForm} />
        </Switch>
        
      </div>
    </Router>
  );
};

export default App;

