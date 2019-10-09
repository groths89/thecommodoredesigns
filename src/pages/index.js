import React from 'react'
import Link from 'gatsby-link'

import Slide from '../components/Slide'
import Canvas from '../components/canvas'
import projectA from './img/OtB_Graphics.jpg'
import projectB from './img/TeamSandwich_Branding.jpg'
import projectC from './img/PrettyInPrintCT_Web.jpg'

const IndexPage = () => (
  	<div className="body" id="main">
		<div className="home">
			<div className="canvas">

			</div>
			<h2>Jobs & Employment</h2>
			<ul>
				<li>
					<em>Web Developer</em> <br />
					<strong>Freelance</strong>	
				</li>
				<li>
					<em>Junior Software Quality Assurance Analyst</em> <br />
					<strong>AiCure</strong>
				</li>
				<li>
					<em>Video Reviewer</em> <br />
					<strong>AiCure</strong>
				</li>
			</ul>
			<h2>Education</h2>
			<ul>
				<li>
					<em>Bachelor of Science</em> <br />
					<strong>SUNY Oneonta</strong>	
				</li>
			</ul>
			<h2>Work Samples</h2>
			<ul>
				<li>
					Best one from Web Portfolio
				</li>
				<li>
					Best one from Logo Portfolio
				</li>
				<li>
					Best one from Animation Portfolio
				</li>
			</ul>
			<h2>Questions and Answers</h2>
			<div className="interview-h">
					<p className="question">
						<strong>What do you like to do outside of work?</strong> Outside of work, I enjoy watching my sports teams play whether going 
					to the stadium or watching on television. I also enjoy playing a little 
					bit of multiplayer video games with friends.
					</p>
					<p className="question"><strong>Can you tell me a little about yourself?</strong> I graduated college with a bachelors degree in Computer Art/Web Design in 2012. 
					The skills I learned there were of a design background focusing in HTML, CSS, 
					and Adobe’s Dreamweaver. I have taken courses afterwards building on my knowledge 
					of web development of JavaScript, Bootstrap, Angular 1.0, and PHP. From 2018 I 
					started working in React, GatsbyJS, and NodeJS. I can install npm packages for 
					React and Gatsby from the command line. What I think that makes up good knowldge of
					Web Development is knowing that HTML is the Layout, CSS is the Looks, and JavaScript
					is the Interactivity.</p>
					<p className="question">
					<strong>What's a time you exercised leadership?</strong> Since 2009 I have been the commissioner of my Yahoo! 
					Fantasy Football league. I have leadership responsibilities 
					deciding on rules, draft times, and teams that have joined.
					</p>
					<p className="question">
						<strong>What would your first 30, 60, or 90 days look like in this role?</strong> My first 30 days would be spent learning the company and getting to know the processes and procedures.
						My next 30 days (first 60 days) would be familiarizing myself with the designs and code.
						My next 30 days (first 90 days) would be starting my own projects. Through the whole 90 day period I
						would be asking questions to my supervisors and coworkers with more experience.
					</p>
					<p className="question"> 
					<strong>Why should we hire you?</strong> I will in addition to great, detailed work I will bring a different 
					perspective. So that’s why you should hire me.
					</p>
				</div>
				
		</div>
		
		
		{/* <div className="home">
		<div className="intro-h" id="slide-one">
					<h2>Hello. My name is Greg. I will be taking you through my website. This website is intended to showcase my work and qualifications.</h2>
				</div>
				<div className="skills-h">
					<h2>
						Skills & Services
					</h2>
				</div>
				<div className="skills-d">
					<div className="details">
						<p>
							<strong>Development.</strong> HTML. CSS. JavaScript. NodeJS. GatsbyJS(React). PHP. WordPress.
						</p>
					</div>
				</div>
				<h2>Interview <span>Question and Answers</span></h2>
				<div className="interview-h" id="slide-two">
					<p><strong>Can you tell me a little about yourself?</strong> I graduated college with a bachelors degree in Computer Art/Web Design in 2012. 
					The skills I learned there were of a design background focusing in HTML, CSS, 
					and Adobe’s Dreamweaver. I have taken courses afterwards building on my knowledge 
					of web development of JavaScript, Bootstrap, Angular 1.0, and PHP. From 2018 I 
					started working in React, GatsbyJS, and NodeJS. I can install npm packages for 
					React and Gatsby from the command line. What I think that makes up good knowldge of
					Web Development is knowing that HTML is the Layout, CSS is the Looks, and JavaScript
					is the Interactivity.</p>
					<p className="question">
						1. 
					</p>			
					<p className="answer">
					
					</p>
				</div>
				<div className="interview-h">
					<p className="question">
						2. What do you like to do outside of work?
					</p>			
					<p className="answer">
					Outside of work, I enjoy watching my sports teams play whether going 
					to the stadium or watching on television. I also enjoy playing a little 
					bit of multiplayer video games with friends.
					</p>
				</div>
				<div className="interview-h">
					<p className="question">
						3. What are your greatest professional strengths?
					</p>
					<p className="answer">
			
					</p>
				</div>
				<div className="interview-h">
					<p className="question">
						4. What do you consider to be your weaknesses?
					</p>
					<p className="answer">


					</p>
				</div>
				<div className="interview-h">
					<p className="question">
						5. What is your greatest professional achievement?
					</p>			
					<p className="answer">
			
					</p>
				</div>
				<div className="interview-h">
					<p className="question">
						6. What's a time you exercised leadership?
					</p>			
					<p className="answer">
					<strong>What's a time you exercised leadership?</strong>Since 2009 I have been the commissioner of my Yahoo! 
					Fantasy Football league. I have leadership responsibilities 
					deciding on rules, draft times, and teams that have joined.
					</p>
				</div>
				<div className="interview-h">
					<p className="question">
						7. What's your dream job?
					</p>			
					<p className="answer">
						
					</p>
				</div>
				<div className="interview-h">
					<p className="question">
						8. What would your first 30, 60, or 90 days look like in this role?
					</p>			
					<p className="answer">
						<strong>What would your first 30, 60, or 90 days look like in this role?</strong>My first 30 days would be spent learning the company and getting to know the processes and procedures.
						My next 30 days (first 60 days) would be familiarizing myself with the designs and code.
						My next 30 days (first 90 days) would be starting my own projects. Through the whole 90 day period I
						would be asking questions to my supervisors and coworkers with more experience.
					</p>
				</div>
				<div className="interview-h" id="slide-three">
					<p className="question">
						9. Why should we hire you?
					</p>	
					<p className="answer"> 
					I will in addition to great, detailed work I will bring a different 
					perspective. So that’s why you should hire me.
					</p>
				</div>

				
				<div className="people-h">
					<h2>Employers & Clients</h2>
				</div>
			</div> */}
		</div>
		

)

export default IndexPage
