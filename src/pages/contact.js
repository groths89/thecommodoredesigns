import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
			<div className="body" id="main">
				<div className="contact">
						<h2>Contact</h2>
						<div>
							<div>
								<p>Three ways to contact me:</p>
								<p>
									You can send me an email at the address list here. <a href="#">Gregory Rothstein</a>.
								</p>
								<p>
									...Or you can give me a call or text. Just a heads up I respond better to texts rather than calls. My cell phone is listed here, <a href="#"> 914-960-7387</a>.
								</p>
								<p>
									...Or you can fill out this form on this page and I will contact you about the inquiry of my services. 
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

)

export default ContactPage