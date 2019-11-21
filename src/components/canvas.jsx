import React from 'react'
import image from './img/home-image.jpg'
import Character from '../components/img/2d_animation-GRoth.png'


class Canvas extends React.Component {
    componentDidMount(){
        var images = new Image();
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        images.src = 'static/2d_animation-GRoth.2788c0dd.png';
        images.onload = function() {
          ctx.scale(0.3,0.3); 
          ctx.drawImage(images,0,0);
          
        }
    }
    render() {
        return(
          <div>
            <canvas className="canvas" ref="canvas" width={1500} height={425} src={Character} />
          </div>
        )
      }
    }
export default Canvas