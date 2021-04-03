import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'

const ContactPage = () => (
	<Layout>
			<div className="body" id="main">
				<div className="contact">
						<h2>Contact</h2>
						<div>
							<div>
								<p>Three ways to contact me:</p>
								<p>
									You can send me an email at the address listed here. <a href="mailto:gregory@thecommodoredesigns.com">Gregory Rothstein</a>.
								</p>
								<p>
									...Or you can give me a <a alt="PHONE CALL" href="tel:914-960-7387"> PHONE CALL</a>. Just a heads up I respond better to <a alt="SMS TEXT MESSAGE" href="sms:914-960-7387">SMS TEXT MESSAGES</a>. My cell phone is listed here, <a href="tel:914-960-7387"> 914-960-7387</a>.
								</p>
								<p>
									...Or you can fill out this form on this page and I will contact you. 
								</p>	
							</div>

							<form action="index.html">
								<label for="firstname">First Name</label>
								<input type="text" id="firstname" />
								<label for="lastname">Last Name</label>
								<input type="text" id="lastname" />
								<label for="email">Email Address</label>
								<input type="text" id="email" />
								<label for="subject">Subject</label>
								<input type="text" id="subject" />
								<label for="message">Message</label>
								<textarea name="" cols="30" rows="10" id="message"></textarea>
								<input type="submit" id="submit2" value="Submit" />
							</form>							
						</div>
				</div>
			</div>
	</Layout>
)

export default ContactPage