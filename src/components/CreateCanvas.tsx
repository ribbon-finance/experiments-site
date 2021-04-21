import React, { Component } from 'react'
import { createLava } from '../static/lava.js'
import "../static/css/LavaCover.css";

class createCanvas extends Component {

    componentDidMount(){
        createLava()
    }

    render() {
        return (
            <div>
                <div className="lavawrap">
                    <canvas id="lava"></canvas>                  
                </div>
            </div>
        );
    }
}

export default createCanvas;

