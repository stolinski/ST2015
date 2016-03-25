import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <video id='main-vid' preload autoplay loop muted>
                    <source src='/showcase2.mp4' type='video/mp4'>
                    <source src='/showcase2.webmhd.webm' type='video/webm'>
                </video>
                <main id='appbody' className='main-content'>
                    <h2 className='page-title'>I am Scott Tolinski</h2>
                    <p>I make excellent, modern websites.</p>
                </main>
            </div>
        );
    }
}
