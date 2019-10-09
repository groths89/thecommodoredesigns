import React from 'react'
import image from './img/home-image.jpg'

class Canvas extends React.Component {
    componentDidMount(){
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
            ctx.beginPath();    
            ctx.font = "30px Arial";
            ctx.fillStyle = "red";
            ctx.fillText("Home of The Commodore Designs",10,50);
            ctx.fillText("It's all about growth and progression.",20,100);
            ctx.fillText("Look through my portfolio to see how I have progressed as a designer, and how I can help your business.",30,150);
            ctx.beginPath();
            ctx.arc(95, 50, 40, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();


    }
    render() {
        return(
          <div>
            <canvas className="canvas" ref="canvas" width={640} height={425} />
          </div>
        )
      }
    }
export default Canvas