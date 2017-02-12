import React, {Component} from 'react';
import Helmet from 'react-helmet';

const Home = () =>
    <div>
        <video id='main-vid' preload={true} autoPlay={true} loop={true} muted={true}>
            <source src='/showcase2.mp4' type='video/mp4'/>
            <source src='/showcase2.webmhd.webm' type='video/webm'/>
        </video>
        <main id='appbody' className='main-content'>
            <h2 className='page-title'>I am Scott Tolinski</h2>
            <p>I make excellent, modern websites.</p>
        </main>
    </div>

export default Home