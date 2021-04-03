import React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Toggle extends React.Component {

    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn,
        isToggleOn: !(document.getElementById("mySidenav").style.width = "0"),
        isToggleOn: !(document.getElementById("main").style.marginLeft = "0"),
        isToggleOn: !(document.getElementById("btnOpen").style.display = "block"),
        isToggleOn: !(document.getElementById("btnClose").style.display = "none"),
        isToggleOn: !(document.getElementById("copyright").style.display = "none"),
      }));

    }
    
     
    render() {
      return (
        <Link className="closebtn" id="btnClose" onClick={this.handleClick}><FontAwesomeIcon icon={faAngleDoubleLeft} /></Link>
      );
    }
  }
  
  export default Toggle;