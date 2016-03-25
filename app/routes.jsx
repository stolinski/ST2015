
import {MainLayout} from './Layouts/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';

FlowRouter.route('/', {
    action()  {
        ReactLayout.render(MainLayout, {
            content: <Home />
        });
    }
});

FlowRouter.route('/about', {
    action()  {
        ReactLayout.render(MainLayout, {
            content: <About />
        });
    }
});

FlowRouter.route('/projects', {
    action()  {
        ReactLayout.render(MainLayout, {
            content: <Projects />
        });
    }
});

FlowRouter.route('/contact', {
    action()  {
        ReactLayout.render(MainLayout, {
            content: <Contact />
        });
    }
});
