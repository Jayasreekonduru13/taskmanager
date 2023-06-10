import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import TaskDashboard from './TaskDashboard';

const TaskManager = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Route exact path="/">
        {token ? (
          <Redirect to="/dashboard" />
        ) : (
          <Login setToken={setToken} />
        )}
        </Route>
      <Route path="/dashboard">
        {token ? <TaskDashboard token={token} /> : <Redirect to="/" />}
      </Route>
    </Router>
  );
};

export default TaskManager;