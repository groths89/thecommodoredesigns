import React from 'react'
import Link from 'gatsby-link'

import schoolA from './img/certifications_sunyoneonta.png'
import schoolB from './img/certifications_lynda.png'
import schoolC from './img/certifications_udemy.png'
import schoolD from './img/certifications_codeschool.png'
import badgeA from './img/certifications_apprentice-badge-codeschool.png'
import badgeB from './img/certifications_csscrosscountry-course-codeschool.png'
import badgeC from './img/certifications_shapingupwithangularjs-course-codeschool.png'
import badgeD from './img/certifications_mobile-maven-badge-codeschool.png'
import Layout from '../components/layout'

const CertificationsPage = () => (
	<Layout>
			<div className="body" id="main">
				<div className="certifications">
				<h2>Degrees and Certifications</h2>	
					<ul>
						<li className="oneonta">
							<div >
								<img src={schoolA} alt="" />
							</div>
							<p>
								Bachelor of Science in Computer Art
							</p>
						</li>						
						<li className="lynda">						
							<div>
								<img src={schoolB} alt="" />
							</div>
						</li>
						<li className="udemy">
							<div>
								<img src={schoolC} alt="" />
							</div>
						</li>
						<li className="codeschool">
              <div>
								<img src={schoolD} alt="" />
							</div>
							<div>
								<img src="images/certifications_apprentice-badge-codeschool.png" alt="" />
								<div>
									<img src="images/certifications_csscrosscountry-course-codeschool.png" alt="" />
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
	</Layout>
)

export default CertificationsPage