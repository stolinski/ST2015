import React, {Component} from 'react';
import Helmet from 'react-helmet';

const Contact = () => {
    return (
        <main id='appbody' className='main-content'>
            <h2 className='page-title'>Contact</h2>
            <p>Feel free to contact me through the email below, I'd love to chat.</p><p className='cont'><a href='mailto:scott.tolinski@gmail.com' className='email'>scott.tolinski@gmail.com</a></p>
        </main>
    );
}

export default Contact;
