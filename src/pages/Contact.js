import React from 'react';
import { Link } from 'react-router-dom';

let onLinkedInClick = () => {
    window.location.href = "https://www.linkedin.com/in/eric-cili-50760618b/"
};

let onGitHubLinkClick = () => {
    window.location.href = "https://github.com/ericjcili" 
};

let onEmailClick = () => {
    window.location.href = "mailto: ericjcili@gmail.com"
};

let onResumeClick = () => {
    window.open(Pdf);
}

function Contact() {
    return (
        <div>
            <h1 className='text-center p-5 mt-2'>Contact Info</h1>
            <ul className='list-group'>
                <p className='text-center'>You can access me</p>
                <li className='text-center p-2'><Link onClick={onResumeClick}>Resume</Link></li>
            </ul>
        </div>
    );
}

export default Contact;