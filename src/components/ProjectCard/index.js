import React from 'react';
import './style.css';

function ProjectCard(props) {
    return (
       <div className="card">
           <div className="img-container">
               <img alt={props.title} src={props.image} />
           </div>
           <div className="content">
               <ul>
                   <li>
                       Project: {props.title}
                   </li>
                   <li>
                       Github: <a href="{props.github}" target="_blank">{props.github}</a>
                   </li>
                   <li>
                       Link: <a href="{props.url}" target="_blank">{props.url}</a>
                   </li>
                   <li>
                       About: {props.about}
                   </li>
               </ul>
           </div>
       </div> 
    );
}

export default ProjectCard;