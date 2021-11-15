
   
import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../assets/EricsResume.pdf'

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
                <li className='text-center p-2'>tel: (786) 334-7797</li>
                <li className='text-center p-2'><Link onClick={onEmailClick}>ericjcili@gmail.com</Link></li>
                <li className='text-center p-2'><Link onClick={onLinkedInClick}>LinkedIn</Link></li>
                <li className='text-center p-2'><Link onClick={onGitHubLinkClick}>GitHub</Link></li>
                <li className='text-center p-2'><Link onClick={onResumeClick}>Resume</Link></li>
            </ul>
        </div>
    );
}

export default Contact;