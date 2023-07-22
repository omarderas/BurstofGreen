import * as React from "react"
import ReactPlayer from 'react-player';
import { Container, Carousel } from "react-bootstrap" 
import { StaticImage } from "gatsby-plugin-image"

function About() {
	return (
             <div className="about-main">
                        <div class="about-us">
                            <div class="container">
                                <div class="about-content">
                                    <h1>About Burst of Green LLC</h1>
                                    <span><p>Burst Of Green LLC is a residential cleaning company that specializes in complete green
                                    cleaning. Our products are 100% eco-friendly and chemical free. We work with our clients to guarantee satisfaction, and
                                    we pride ourselves on building lasting partnerships in the communities we serve by providing trustworthy, quality, and
                                    integral services. We strive for honest customer service and client satisfaction.</p></span>
                                </div>
                            </div>
                        </div>
             </div>
        );
    }
export default About;
