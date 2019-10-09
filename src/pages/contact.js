import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
			<div className="body" id="main">
				<div className="contact">
						<h2>Contact</h2>
						<div>
							<div>
								<p>
									This website has been designed by <a href="#">Gregory Rothstein</a> for you, for free. You can replace all this text with your own text.
								</p>
								<p>
									You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
								</p>
								<p>
									If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="#">Forums</a>.
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