import * as React from "react"
import ReactPlayer from 'react-player';
import { Container, Carousel } from "react-bootstrap" 
import { StaticImage } from "gatsby-plugin-image"

const welcomeimage = "../../../images/staff-welcome.png"
function Welcome() {
	return (
             <div className="welcome">
                <div class="about">
                    <div class="container">

                    <h1>Welcome to Burst of Green Cleaning</h1>
                    <span><p>Our primary goals are to help busy families and professionals free up time to focus on family and other priorities.<br/>We’re the new go-to cleaning service when clients want assurance that all work will be completed.</p></span>
                    <div class="row content">
                        
                        <div class="col-sm-3 first">
                                <a href="">
                                <div class="row certified">
                                <StaticImage src="../../../images/certified1.PNG" />
                                <h3>Certified</h3><br/><span><p><br />Expert employees qualified for professional service.</p></span>
                                </div>
                                </a>
                                <a href="">
                                    <div class="row reliable">
                                        <StaticImage src="../../../images/reliable.png" />
                                        <h3>Reliable</h3><br /><span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </span>
                                    </div>
                                </a>
                        </div>
                        
                       
                        <div class="col-sm-6">
                            <StaticImage src={welcomeimage} />
                        </div>
                       
                        
                        <div class="col-sm-3">
                                <a href="">
                                    <div class="row eco">
                                        <StaticImage src="../../../images/eco-friendly.png" />
                                        <h3>Eco-friendly</h3><br /><span>
                                            <p>Vivamus ultrices blandit maximus uisque turpis ipsum.</p>
                                        </span>
                                    </div>
                                </a>
                                <a href="">
                                    <div class="row superior">
                                        <StaticImage src="../../../images/superior.png" />
                                        <h3>Superior</h3><br /><span>
                                            <p>Nunc condimentum accumsan sollicitudin ed ornare sollicitudin.</p>
                                        </span>
                                    </div>
                                </a>
                        </div>
                    
                    </div>
                </div>
                </div>
             </div>
        );
    }
export default Welcome;
