import React from 'react';

export const MainLayout = ({content}) => (
    <div>
        <div className='wrap'>

            <header className='header'>
                <div className='header-wrap'>
                    <a className='homelink' href='/#'><span className='logo'>ST</span>
                        <h1 className='name'>Scott Tolinski</h1>
                    </a>
                    <nav className='main-nav'>
                        <ul>
                            <li><a className='about' href='/about'>About</a></li>
                            <li><a className='projects' href='/projects'>Projects</a></li>
                            <li><a className='contact' href='/contact'>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {content()}

        </div>

        <footer className='footer'>
            <h3>Where to find me</h3>
            <ul classNameName='social'>
                <li>
                    <a target='_blank' href='https://twitter.com/stolinski'>
                        <i className='fa fa-twitter'><span className='text'>Twitter</span></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' href='http://www.youtube.com/user/LevelUpTuts'>
                        <i className='fa fa-youtube'><span className='text'>Youtube</span></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://github.com/stolinski'>
                        <i className='fa fa-github'><span className='text'>Github</span></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://bitbucket.org/stolinski'>
                        <i className='fa fa-bitbucket'><span className='text'>Bitbucket</span></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://www.linkedin.com/in/stolinski'>
                        <i className='fa fa-linkedin'><span className='text'>LinkedIn</span></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://www.facebook.com/LevelUpTuts'>
                        <i className='fa fa-facebook'><span className='text'>Facebook</span></i>
                    </a>
                </li>
            </ul>
        </footer>
    </div>
);
