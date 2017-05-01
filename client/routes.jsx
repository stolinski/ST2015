// Platform
import React from 'react';
import { render } from 'react-dom';

import { MainLayout } from './Layouts/MainLayout.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

Meteor.startup(() => {
  render(
    <Router>
      <Route path="/" component={MainLayout}/>
    </Router>,
    document.getElementById('react-root')
  );
});