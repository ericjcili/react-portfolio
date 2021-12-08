import React, { Component, useState } from "react";
import './projects.css'
import RunBuddy from '../../assets/projects/1.png'
import two from '../../assets/projects/2.png'
import thr from '../../assets/projects/3.png'
import fou from '../../assets/projects/4.png'
import six from '../../assets/projects/6.png'
import svn from '../../assets/projects/7.png'

function Projects() {
        return (
            <div class='helpmebro'>
                <h1 className='text-center p-2'>Portfolio</h1> 
                <section id="work" class="projects">
        <div class="all-works">
        <div class="works">
            <div class="work">
                <a href="https://ericjcili.github.io/run-buddy/" target="_blank">
                <img src={RunBuddy} style={{height:"200px"}}/>
                </a>
                <div class="work-info">
                    <h2><b>Run Buddy</b></h2>
                    <p>Run Buddy was the first website I ever made. This is where I learned the fundamentals of HTML and CSS.</p>
                    <a href="https://github.com/ericjcili/run-buddy" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                     </a>
                </div>
            </div>
            <div class="work">
                <a href="https://padredilg.github.io/decide-eat/" target="_blank">
                <img src={two} style={{height:"200px"}}/>
                </a>
                <div class="work-info">
                    <h2><b>Decide-Eat</b></h2>
                    <p>This was the first major project that I did in my coding bootcamp. Here, we use HTML and CSS for a beautiful, professional website design. We also used Web-APIs to search information from external databases!</p>
                    <a href="https://github.com/Padredilg/decide-eat" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
            </div>
            <div class="work">
                <a href="https://progrum.herokuapp.com/" target="_blank">
                <img src={thr} style={{height:"200px"}}/>
                </a>
                <div class="work-info">
                    <h2><b>Progrum</b></h2>
                    <p>This was the second major project in my coding bootcamp. Don't be fooled by its simple design, this website uses MySQL as a database to store user data including username, email, password, posts and comments. A simple, easy-to-use forum website for programmers.</p>
                    <a href="https://github.com/ericjcili/project-2" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
            </div>
            <div class="work">
                <img src={fou} style={{height:"200px"}}/>
                <div class="work-info">
                    <h2><b>Password Generator</b></h2>
                    <p>This application truly put my Javascript skills to the test. Here, you can generate a random password based on user input.</p>
                    <a href="ttps://github.com/ericjcili/project-2" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
            </div>
            <div class="work">
                <img src={six} style={{height:"200px"}}/>
                <div class="work-info">
                    <h2><b>E-Commerce Back End</b></h2>
                    <p>This challenge gave me an e-commerce website and required that I create a database using MySQL and upload their data to the database.</p>
                    <a href="https://github.com/ericjcili/challenge-13" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
            </div>
            <div class="work">
                <a href='https://protected-forest-31022.herokuapp.com/posts' target="_blank">
                <img src={svn} style={{height:"200px"}}/>
                </a>
                <div class="work-info">
                    <h2><b>Recipe List</b></h2>
                    <p>This application fully utilizes React, express, node.js, and MongoDB to create a functional recipe blogging post.</p>
                    <a href="https://github.com/ericjcili/easy-recipe" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
            </div>
            <div class="work">
                <div class="work-info">
                    <h2>More Projects Coming Soon!</h2>
                </div>
            </div>
        </div>
        </div>

    </section>
            </div>
        );
    }

export default Projects;