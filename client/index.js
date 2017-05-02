import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { createRouter, logger } from 'meteor/ssrwpo:ssr';
import { MainLayout } from '/imports/ui/Layouts/MainLayout';

const App = () =>
  <Router>
    <Route path="/" component={MainLayout} />
  </Router>;

createRouter({ MainApp: App })
  .then(() => logger.info('Router started'));
