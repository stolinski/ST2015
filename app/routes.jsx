import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './Layouts/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';

FlowRouter.route('/', {
    action()  {
        mount(MainLayout, {
            content: () => (<Home />),
            pageClass: 'home'
        });
    }
});

FlowRouter.route('/about', {
    action()  {
        mount(MainLayout, {
            content: () => (<About />),
            pageClass: 'about'
        });
    }
});

FlowRouter.route('/projects', {
    action()  {
        mount(MainLayout, {
            content: () => (<Projects />),
            pageClass: 'projects'
        });
    }
});

FlowRouter.route('/contact', {
    action()  {
        mount(MainLayout, {
            content: () => (<Contact />),
            pageClass: 'contact'
        });
    }
});
