import React from 'react'
import Link from 'gatsby-link'

import imageA from './img/about_timeline2018.png'
import imageB from './img/about_timeline2016.png'
import imageC from './img/about_timeline2015.png'
import imageD from './img/about_timeline2014.png'
import imageE from './img/about_timeline2012-2.png'
import imageF from './img/about_timeline2012-1.png'
import imageG from './img/about_timeline2009-2.png'
import imageH from './img/about_timeline2009-1.png'

const AboutPage = () => (
  <div className="body" id="main">
				<div className="about">
					<h2>About Me</h2>
					<div>
						<p>In high school I acheived a Computer Award of Excellence, and graduated with a reagents diploma.
						</p>
						<p>
							In college I majored in Computer Art, and graduated with a Bachelor of Science degree. The courses
							I took at SUNY Oneonta focused on design and animation. I took a few computer science courses that 
							helped me with my programming knowledge.
						</p>
						<p>
							After college I dedicated my days to more learning and finding myself a Developer job I have prgoressed
							as a developer and designer. The online courses I took were from Lynda dot com which I got introduced to
							in college. Then I found a company that taught a developer boot camp and paid my way through that course.
							The boot camp really taught me to think like a better programmer.
						</p>
						<p>
							My freelance projects since graduating were all for family and friends. The logos I have done were for a 
							YouTube channel that me and my friends started. It's not very viewed but it's a place we can put our portfolio
							projects. I've also continued to update my sister's website that she has changed since I graduated in 2012. The
							website has gone through multiple iterations like sudzandink dot com and prettyinprintct dot com.
						</p>
						<p>
							All of my jobs I have held helped me. Even the ones that weren't in the industry of web design. I continue to 
							learn through online videos and tutorials.
						</p>
					</div>
					<h2>Timeline of Progression</h2>
						<section className="timeline">
								{/* 2009-1 Portfolio Website */}
								<div>
									<h3>2009 College Portfolio</h3>
									<div>
										<iframe src="https://groths89.github.io/2009-Portfolio-Website/" scrolling="auto">
											<div style={{ borderColor: 'red', borderStyle: 'dashed none none', borderWidth: '3px', width: '100px', height: '100px' }}>

											</div>
										</iframe>
									</div>
									<p>This here was the portfolio I had to create in 2009 for college. It is your basic website only with 
										HTML and a little bit of CSS.</p>
								</div>
								{/* 2009-2 Portfolio Website */}
								<div>
									<h3>Second 2009 College Portfolio</h3>
									<div>
										<iframe src="https://groths89.github.io/2009-Portfolio-Second-Website/" scrolling="auto">

										</iframe>
									</div>
									<p>This here was the portfolio I had to create in 2009 for college. It is your basic website only with 
										HTML and a little bit of CSS.</p>
								</div>
								{/* 2009-3 Portfolio Website */}
								<div>
									<h3>Third 2009 College Portfolio</h3>
									<div>
										<iframe src="https://groths89.github.io/2009-Portfolio-Third-Website/" scrolling="auto">

										</iframe>
									</div>
									<p>This here was the portfolio I had to create in 2009 for college. It is your basic website only with 
										HTML and a little bit of CSS.</p>
								</div>
								{/* 2012-1 Portfolio Website */}
								<div>
									<h3>2012 Portfolio</h3>
									<div>
										<iframe src="https://groths89.github.io/2012-Portfolio-Website/" scrolling="auto">

										</iframe>
									</div>
									<p>This here was the portfolio I had to create in 2009 for college. It is your basic website only with 
										HTML and a little bit of CSS.</p>
								</div>
								{/* 2012-2 Portfolio Website */}
								<div>
									<h3>2012 Portfolio</h3>
									<div>
										<iframe src="https://groths89.github.io/2012-Portfolio-Second-Website/" scrolling="auto">

										</iframe>
									</div>
									<p>This here was the portfolio I had to create in 2009 for college. It is your basic website only with 
										HTML and a little bit of CSS.</p>
								</div>
								{/* 2014 Portfolio Website */}
								<div>
									<h3>2014 Portfolio</h3>
									<div>
										<iframe src="https://groths89.github.io/2014-Portfolio-Website/" scrolling="auto">
										
										</iframe>
									</div>
									<p>This here was the portfolio I had to create in 2009 for college. It is your basic website only with 
										HTML and a little bit of CSS.</p>
								</div>
								{/* 2015 Portfolio Website */}
								<div>
									<h3>2015 Portfolio</h3>
									<div>
										<iframe src="https://groths89.github.io/2015-Portfolio-Website/" scrolling="auto">
										
										</iframe>
									</div>
									<p>This here was the portfolio I had to create in 2009 for college. It is your basic website only with 
										HTML and a little bit of CSS.</p>
								</div>
								{/* 2016 Portfolio Website */}
								<div>
									<h3>2016 Portfolio</h3>
									<div>
										<iframe src="https://groths89.github.io/2016-Portfolio-Website/" scrolling="auto">
										
										</iframe>
									</div>
									<p>This here was the portfolio I had to create in 2009 for college. It is your basic website only with 
										HTML and a little bit of CSS.</p>
								</div>
								{/* 2017 Portfolio Website */}
								<div>
									<h3>2017 Portfolio</h3>
									<div>
										<iframe src="https://groths89.github.io/2017-Portfolio-Website/" scrolling="auto">
										
										</iframe>
									</div>
									<p>This here was the portfolio I had to create in 2009 for college. It is your basic website only with 
										HTML and a little bit of CSS.</p>
								</div>
							</section>
			</div>

	</div>
)

export default AboutPage
