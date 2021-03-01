import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route>
            <Layout/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
