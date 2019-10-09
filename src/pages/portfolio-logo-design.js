import React from 'react'
import Link from 'gatsby-link'

import logoA from './img/logo1.jpg'
import logoB from './img/logo2.jpg'
import logoC from './img/logo3.jpg'
import logoD from './img/logo4.jpg'
import logoE from './img/logo5.jpg'
import logoF from './img/logo6.jpg'
import logoG from './img/logo7.jpg'
import logoH from './img/logo8.jpg'
import logoI from './img/logo9.jpg'
import logoJ from './img/logo10.jpg'
import logoK from './img/logo11.jpg'
import logoL from './img/logo12.jpg'

const PortfolioLogoPage = () => (
  <div className="body" id="main">
        <div className="portfolio">
					<h2>Portfolio <span>Logo Design</span></h2>
					<ul className="navigation">
						<li>
							<Link id="myPort" to="/portfolio-logo-design">Logo Design</Link>
						</li>
						<li>
							<Link id="myPort" to="/portfolio-web-design">Web Design</Link>
						</li>
						<li>
							<Link id="myPort" to="/portfolio-animation">Animation</Link>
						</li>
					</ul>
					
					<ul>
						<li>
							<a href="#"><img src={logoH} /></a> <span>Client: Gregory Rothstein</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoI} /></a> <span>Client: Gregory Rothstein</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoJ} /></a> <span>Client: Steve Cohen / Gregory Rothstein</span> <a href="#">Read Details</a>
						</li>						
						<li>
							<a href="#"><img src={logoA} /></a> <span>Client: Eric Koval</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoB} /></a> <span>Client: Eric Koval</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoC} /></a> <span>Client: Eric Koval</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoD} /></a> <span>Client: Gregory Rothstein</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoE} /></a> <span>Client: Eric Koval</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoF} /></a> <span>Client: Eric Koval</span> <a href="#">Read Details</a>
						</li>
						<li>
							<a href="#"><img src={logoG} /></a> <span>Client: Eric Koval</span> <a href="#">Read Details</a>
						</li>

						<li>
							<a href="#"><img src={logoK} /></a> <span>Client: Gregory Rothstein</span> <a href="#">Read Details</a>
						</li>
{/* 						<li>
							<a href="#"><img src={logoL} /></a> <span>Client: Elizabeth Morrisson</span> <a href="#">Read Details</a>
						</li> */}
					</ul>
				</div>


	  </div>
)

export default PortfolioLogoPage