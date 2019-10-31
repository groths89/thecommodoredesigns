import React from 'react'
import image from './img/home-image.jpg'
import GregCharacter from "../layouts/images/2d_animation-GRoth.jpg";

class Canvas extends React.Component {
    componentDidMount(){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
            ctx.beginPath();    
            ctx.font = "30px Arial";
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(95, 50, 40, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();

    }
    render() {
        return(
          <div>
            <canvas className="canvas" ref="canvas" width={640} height={425} src={GregCharacter} />
          </div>
        )
      }
    }
export default Canvas