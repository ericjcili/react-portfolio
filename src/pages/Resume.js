import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../assets/EricsResume.pdf'

let onResumeClick = () => {
    window.open(Pdf);
}

function Resume() {
    return (
        <div>
            <h1 className='text-center p-2 mt-2'>Resume</h1>
            <h2 className='text-left p-2 mt-2'>Profile</h2>
            <p className='text-left p-2 mt-2'>Dedicated Web Developer with a passion of learning as much as I can in a lifetime. My hobbies include anything to do with computers, music composition, and art/design. After building my own computer when I was 15, I quickly became enthralled with technology. I enjoy working with teams, developing relationships with colleagues, and I am always looking to gain new skills to utilize in my work.</p>
            <h2 className='text-left p-2 mt-2'>Experience</h2>
            <p className='text-left p-2 mt-2'>Stock clerk, publix — 2018–present</p>
            <p className='text-left p-2 mt-2'>At Publix I learned many useful life skills, including developing relationships with customers, large-scale organization, and working in groups to accomplish tasks. This fast-paced, strenuous work environment taught me the value of learning new skills and training new employees.</p>
            <h2 className='text-left p-2 mt-2'>Education</h2>
            <p className='text-left p-2 mt-2'><b>Certificate Of Completion: Full Stack Web Development Bootcamp</b><br></br><b>University Of Central Florida, Orlando, FL</b></p>
            <li className='text-left p-2 mt-0'>Learned a variety of front & back end technologies that all used or were comparable with Javascript.</li>
            <li className='text-left p-2 mt-0'>Explored front end development by mastering HTML and CSS, using libraries like Bootstrap and Bulma, and working with React.</li>
            <li className='text-left p-2 mt-0'>Learned how to create a back end with Node.js, Express.js, and both SQL and NoSQL databases. Utilized and explored various npm packages to fit project needs.</li>
            <li className='text-left p-2 mt-0'>Worked on three different major group projects with teams of 4-5 people, completing fully functional web-apps in a 2 week period. Used GitHub to manage repositories and resolve issues.</li>
            <h2 className='text-left p-2 mt-2'>Skills</h2>
            <li className='text-left p-2'>JavaScript (Intermediate)</li>
            <li className='text-left p-2'>React (Intermediate)</li>
            <li className='text-left p-2'>HTML (Advanced)</li>
            <li className='text-left p-2 '>CSS (Advanced)</li>
            <li className='text-left p-2'>Node.js (Intermediate)</li>
            <li className='text-left p-2'>Express.js (Intermediate)</li>
            <li className='text-left p-2'>MongoDB/SQL/NoSQL (Intermediate)</li>
            <li className='text-left p-2'>Handlebars.js (Intermediate)</li>
            <li className='text-left p-2 '>Git (Advanced)</li>
            <li className='text-left p-2'>npm (Advanced)</li>
            <br></br><br></br>
            <b className='text-right p-5'><Link onClick={onResumeClick}>Download my Resume</Link></b>
            <br></br><br></br><br></br><br></br><br></br>
        </div>
    );
}

export default Resume;