import React from 'react';
import PicOfMeRed from '../../assets/PicofMeRed.jpg';
import './home.css';


function Home() {
    return (
        <div>
            <h1 className='text-center p-2'>About Me</h1>
            <div class='hero'>
                <div class='info'>
                    <h3 className='text-center p-2'>Web Developer, Musician, Creator</h3>
                    <p className='text-center fs-4 p-3'>My name is Eric. I'm a dedicated Web Developer with a passion of learning as much as I can in a lifetime. My hobbies include anything to do with computers, music composition, and art/design. After building my own computer when I was 15, I quickly became enthralled with computer science. I enjoy working with teams, developing relationships with colleagues, and I am always looking to gain new skills to utilize in my work.</p>
                </div>
                <div class='icon'>
                    <img src={PicOfMeRed} alt="picture of eric in 2021"  width="320" height="400"/>
                </div>
            </div>
        </div>
    );
}

export default Home;