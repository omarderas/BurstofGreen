import * as React from "react"
import ReactPlayer from 'react-player';
import { Container, Carousel } from "react-bootstrap" 
import { StaticImage } from "gatsby-plugin-image"

function Services() {
	return (
             <div className="service-main">
                     <div class="our-services">
                            <div class="container">
                                <div class="service-overlay"></div>
                                <div class="row">
                                    <h1>Offering High Quality Cleaning Services</h1>
                                    <span class="service-content"><p>We provide consistent service from fun, knowledgeable, dependable cleaning professionals. We demonstrate excellence in our <br />work and maintain a positive attitude in all situations.</p></span>
                                <a href="">
                                    <div class="col-sm-4 one">
                                        <StaticImage src="../../../images/housecleaning.png" /><br />
                                    <h1>House Cleaning</h1>
                                    <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></span>
                                    </div>
                                </a>

                                <a href="">
                                <div class="col-sm-4 one">
                                    <StaticImage src="../../../images/kitchencleaning.png" /><br />
                                <h1>Kitchen Cleaning</h1>
                                <span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </span>
                                </div>
                                </a>

                                <a href="">
                                <div class="col-sm-4 one last">
                                    <StaticImage src="../../../images/glasscleaning.png" />
                                <h1>Glass Cleaning</h1>
                                <span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </span>
                                </div>
                                </a>

                                <a href="">
                                <div class="col-sm-4 two">
                                    <StaticImage src="../../../images/toiletcleaning.png" />
                                <h1>Bathroom Cleaning</h1>
                                <span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </span>
                                </div>
                                </a>

                                <a href="">
                                <div class="col-sm-4 two">
                                <StaticImage src="../../../images/trash.png" /><br />
                                <h1>Garbage Disposal</h1>
                                <span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </span>
                                </div>
                                </a>

                                <a href="">
                                <div class="col-sm-4">
                                <StaticImage src="../../../images/carpetcleaning.png" />
                                <h1>Laundry</h1>
                                <span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </span>
                                </div>
                                </a>


                                </div>
                            </div>
                        </div>
             </div>
        );
    }
export default Services;
