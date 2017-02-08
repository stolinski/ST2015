import React from 'react';

export const MainLayout = ({content, pageClass}) => (
    <div className={pageClass}>
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
