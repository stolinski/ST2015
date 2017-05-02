import React from 'react';
import {
  BrowserRouter as Router,
  StaticRouter,
  Route,
} from 'react-router-dom';
import { createRouter, logger } from 'meteor/ssrwpo:ssr';
import { MainLayout } from '/imports/ui/Layouts/MainLayout';

// const App = () =>
//   <StaticRouter
//     location={req.url}
//     context={context}
//   >
//     <Route path="/" component={MainLayout} />
//   </StaticRouter>;

createRouter({
  MainApp: MainLayout,
});
logger.info('Router started');
