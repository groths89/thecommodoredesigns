import React from 'react';
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
        isToggleOn: !(document.getElementById("myName").style.fontSize = "10pt"),
        isToggleOn: !(document.getElementById("myName").style.display = "none"),
        isToggleOn: !(document.getElementById("myDba").style.display = "none"),
        isToggleOn: !(document.getElementById("copyright").style.display = "none"),
      }));

    }
    
     
    render() {
      return (
        <a className="closebtn" id="btnClose" onClick={this.handleClick}><FontAwesomeIcon icon={faAngleDoubleLeft} /></a>
      );
    }
  }
  
  export default Toggle;