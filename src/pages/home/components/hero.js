import * as React from "react"
import ReactPlayer from 'react-player';
import { Container, Carousel } from "react-bootstrap" 
import { StaticImage } from "gatsby-plugin-image"
import { Video } from 'gatsby-video'


import ID_4205628 from "../../../videos/ID_4205628.mp4"

function Hero() {
	return (
           <div className="main-video">
            <video  autoPlay muted loop style={{ width: "100%" }}>
              <source src={ID_4205628} type="video/mp4" />
            </video>
            <div class="main-overlay"></div>
            <div class="hero-text">
                <span class="content-one"><p>
                    We believe your weekends weren’t made for housework
                </p></span><p><span class="content">One time basic or deep  </span> <span class="content-three">Healthy, Eco-Friendly, Green Cleaning</span></p>
                
                
            
                    <p><span class="content-two">
                      For a </span><span class="content-four">spotless</span> <br/> <span class="content-final">Clean that's second to none!<br/></span>
                    </p>
                    <p>
                        <a href="">
                            <button type="button" class="btn btn-book-now">Book Now</button>
                        </a>
                    </p>
            </div>
                <div class="container">
                    <div class="services">
                        <div class="row">
                            <a href="">
                            <div class="col-sm-4 one-time">
                                <div class="overlay-cta"></div>
                                <h1>One-Time</h1>
                                <span>Basic Cleaning</span>
                            </div>
                            </a>
                            <a href="">
                            <div class="col-sm-4 deep">
                                <div class="overlay-cta"></div>
                                <h1>One-Time</h1>
                                <span>Deep Cleaning</span>
                            </div>
                            </a>
                            <a href="">
                            <div class="col-sm-4 move-in">
                                <div class="overlay-cta"></div>
                                <h1>Move In/Out</h1>
                                <span>Cleaning</span>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
           </div>
        );
    }
export default Hero;