import React from 'react';
import emailPic from '../../assets/email.png';
import './contact.css';

function Contact (){	return (
		<section className="text-center p-2">
			<div className="center" class='contact-info'>
				<h2 className="page-header">Contact Me</h2>
				<h4 className='text-center p-2'>You can click the links at the bottom of the page to access my GitHub, LinkedIn, and Instagram profiles.</h4>
				<p>Or, send me an email by clicking below.</p>
				<div class="icon">
				<a href="mailto: ericjcili@gmail.com" target="_blank">
					<img type="button" href="mailto:ericjcili@gmail.com" src={emailPic} alt="email-button"  width="50" height="45"/></a>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<i>Available for hire Dec 2021</i>

			</div>
		</section>
	);
}
export default Contact;