import React from 'react'
import logo from './img/logo.png'
import bg from './img/bg-body.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Toggle from './Toggle'

library.add(faDownload,faAngleDoubleRight,faCodeBranch,faLandmark,faImages,faComments)

class Sidebar extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true
		};

	  // This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	  }
	  
	handleClick() {
		if (window.innerWidth <= 480) {
				this.setState(prevState => ({
					isToggleOn: document.getElementById("mySidenav").style.width = "45.2%",
					isToggleOn: document.getElementById("main").style.marginLeft = "0",
					isToggleOn: document.getElementById("btnOpen").style.display = "none",
					isToggleOn: document.getElementById("btnClose").style.display = "block",
					isToggleOn: document.getElementById("copyright").style.display = "block",
				}));
		} else if (window.innerWidth > 480 && window.innerWidth < 769) {
				this.setState(prevState => ({
					isToggleOn: document.getElementById("mySidenav").style.width = "24.4%",
					isToggleOn: document.getElementById("main").style.marginLeft = "0",
					isToggleOn: document.getElementById("btnOpen").style.display = "none",
					isToggleOn: document.getElementById("btnClose").style.display = "block",
					isToggleOn: document.getElementById("copyright").style.display = "block",
				}));
		} else {
			this.setState(prevState => ({
				isToggleOn: document.getElementById("mySidenav").style.width = "14.9%",
				isToggleOn: document.getElementById("main").style.marginLeft = "0",
				isToggleOn: document.getElementById("btnOpen").style.display = "none",
				isToggleOn: document.getElementById("btnClose").style.display = "block",
				isToggleOn: document.getElementById("copyright").style.display = "block",
			}));	
		}
	}
  
		render(){
		  return (
			  
		  <div className="sidebar" id="mySidenav">
				<Toggle />
				<a to="javascript:void(0)" id="btnOpen" onClick={this.handleClick} className="openbtn"><FontAwesomeIcon icon="angle-double-right" /></a>
				<a to="/" id="logo">
                    <img src={logo} alt="Logo" />
                </a>
				<ul>
					<li className="sidebar-nav"><a id="myAbout" to="/about"><FontAwesomeIcon icon="code-branch" />About</a></li>
					{/* <li className="sidebar-nav"><a id="myAbout" to="/about"><FontAwesomeIcon icon="code-branch" />Experience</a></li> */}
					<li className="sidebar-nav"><a id="myCerts" to="/certifications"><FontAwesomeIcon icon="landmark" />Education</a></li>
					<li className="sidebar-nav"><a id="myPort" to="/portfolio"><FontAwesomeIcon icon="images" />Work Samples</a></li>
					<li className="sidebar-nav"><a id="myCont" to="/contact"><FontAwesomeIcon icon="comments" />Contact</a></li>
					<li className="sidebar-nav"><a id="myResume"><FontAwesomeIcon icon="download" />Resume</a></li>
				</ul>

				<div className="connect"></div>
				<div id="copyright">
					<p>
						Copyright 2019
					</p>
					<p>
						The Commodore Designs
					</p>					
				</div>

			</div>
		  )
		}
  
  }

export default Sidebar