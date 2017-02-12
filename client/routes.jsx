// Platform
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import {MainLayout} from './Layouts/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';

Meteor.startup(() => {
  render(
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>

      <Route path="/" component={props => <MainLayout {...props} pageClass='home' />}>
        <IndexRoute component={Home} />
      </Route>
      <Route path="/about" component={props => <MainLayout {...props} pageClass='about' />}>
       <IndexRoute component={About} />
      </Route>
      <Route path="/projects" component={props => <MainLayout {...props} pageClass='projects' />}>
       <IndexRoute component={Projects} />
      </Route>
      <Route path="/contact" component={props => <MainLayout {...props} pageClass='contact' />}>
       <IndexRoute component={Contact} />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});


// FlowRouter.route('/', {
//     action()  {
//         mount(MainLayout, {
//             content: () => (<Home />),
//             pageClass: 'home'
//         });
//     }
// });

// FlowRouter.route('/about', {
//     action()  {
//         mount(MainLayout, {
//             content: () => (<About />),
//             pageClass: 'about'
//         });
//     }
// });

// FlowRouter.route('/projects', {
//     action()  {
//         mount(MainLayout, {
//             content: () => (<Projects />),
//             pageClass: 'projects'
//         });
//     }
// });

// FlowRouter.route('/contact', {
//     action()  {
//         mount(MainLayout, {
//             content: () => (<Contact />),
//             pageClass: 'contact'
//         });
//     }
// });
