import React from 'react'
import Link from 'gatsby-link'

import logoA from './img/logo1.jpg'
import logoB from './img/logo2.jpg'
import logoC from './img/logo3.jpg'
import logoD from './img/logo4.jpg'
import logoE from './img/logo5.jpg'
import logoF from './img/logo6.jpg'
import logoG from './img/logo7.jpg'
import logoH from './img/logo13.jpg'
import logoI from './img/logo9.jpg'
import logoJ from './img/logo10.jpg'
import logoK from './img/logo11.jpg'
import logoL from './img/logo12.jpg'

const PortfolioPage = () => (
  <div className="body" id="main">
        <div className="portfolio">
					<h2>Portfolio</h2>
{/* 					<ul className="navigation">
						<li>
							<Link id="myPort" to="/portfolio-logo-design">Logo Design</Link>
						</li>
						<li>
							<Link id="myPort" to="/portfolio-web-design">Web Design</Link>
						</li>
						<li>
							<Link id="myPort" to="/portfolio-animation">Animation</Link>
						</li>
					</ul> */}
					
					<ul>
						<li>
							<a href="#"><img src={logoH} /></a> <span>Project Name: Pretty In Print CT</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoI} /></a> <span>Project Name: South America Adventures</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoJ} /></a> <span>Project Name: The Foody Adventures</span> <a href="#">Read Details</a>
						</li>						
						<li>
							<a href="#"><img src={logoA} /></a> <span>Project Name: Book Library</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoB} /></a> <span>Project Name: Eric Koval</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoC} /></a> <span>Project Name: Eric Koval</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoD} /></a> <span>Project Name: Baseball Stadium Journey</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoF} /></a> <span>Project Name: Team Sandwich Productions</span> <a href="#">Read Details</a>
						</li>
{/* 						<li>
							<a href="#"><img src={logoL} /></a> <span>Client: Elizabeth Morrisson</span> <a href="#">Read Details</a>
						</li> */}
					</ul>
				</div>


	  </div>
)

export default PortfolioPage