import React from 'react';
// import Home from '../Pages/Home';
// import About from '../Pages/About';
// import Projects from '../Pages/Projects';
// import Contact from '../Pages/Contact';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

// console.log(Home, About, Projects, Contact);


            // <Switch>
            //     <Route exact path="/" component={Home}/>
            //     <Route path="/about" component={About}/>
            //     <Route path="/projects" component={Projects}/>
            //     <Route path="/contact" component={Contact}/>
            // </Switch>

export const MainLayout = ({location}) => (
    <div className={location.pathname === "/" ? "home" : location.pathname.replace("/","")}>
        <div className='wrap'>
            <header className='header'>
                <div className='header-wrap'>
                    <Link className='homelink' to='/'><span className='logo'>ST</span>
                        <h1 className='name'>Scott Tolinski</h1>
                    </Link>
                    <nav className='main-nav'>
                        <ul>
                            <li><Link className='about' to='/about'>About</Link></li>
                            <li><Link className='projects' to='/projects'>Projects</Link></li>
                            <li><Link className='contact' to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>

        <footer className='footer'>
            <h3>Where to find me</h3>
            <ul className='social'>
                <li>
                    <a target='_blank' className='twitter' href='https://twitter.com/stolinski'>
                        <span className='text'>Twitter</span>
                    </a>
                </li>
                <li>
                    <a target='_blank' className='youtube' href='http://www.youtube.com/user/LevelUpTuts'>
                        <span className='text'>Youtube</span>
                    </a>
                </li>
                <li>
                    <a target='_blank' className='github' href='https://github.com/stolinski'>
                        <span className='text'>Github</span>
                    </a>
                </li>
                <li>
                    <a target='_blank' className='bitbucket' href='https://bitbucket.org/stolinski'>
                        <span className='text'>Bitbucket</span>
                    </a>
                </li>
                <li>
                    <a target='_blank' className='linkedin' href='https://www.linkedin.com/in/stolinski'>
                        <span className='text'>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a target='_blank' className='facebook' href='https://www.facebook.com/LevelUpTuts'>
                        <span className='text'>Facebook</span>
                    </a>
                </li>
            </ul>
        </footer>
    </div>
);
