import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./../less/footer.scss";


import { Container, Row, Col, ul } from "react-bootstrap" 
import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";

const MainLogo = "../images/Burst-of-Green-nobackground.png";
     

function Footer() {
	return (
    <div className="footer">
        <div className="footer-wrapper">
        <div className="row">
            <div className="col-sm-4">
                <div className="footer-content">
                <a class="footer-brand" href="#">  <StaticImage src={MainLogo} quality={60} formats={["auto", "webp", "avif"]} /></a>
                <p>Cleaning for Health is Our #1 Priority & Commitment to You.<br/>'Changing the way we clean - @Burst of Green.'</p>
                    <ul className="social">
                                <li>
                                    <p id="social-main">Stay Connected: </p>
                                    <a href="https://www.facebook.com/burstofgreen/" target="_blank"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/burstofgreen/?hl=en" target="_blank"><FaInstagram /></a>
                                 
                                </li>
                            
                    </ul>
                </div>
            </div>
            <div className="col-sm-4">
               <div className="footer-content">
                        <h1>Quick Links</h1>
                        <p><a href="/about-us">About Us</a></p>
                        <p><a href="">Our Plans</a></p>
                        <p><a href="">Our Services</a></p>
                        <p><a href="/contact-us">Contact Us</a></p>
               
                </div>
            </div>
            <div className="col-sm-4 second">
                <div className="footer-content">
                    <h1>Contact Us</h1>
                    <p>
                        TEL:
                    </p>
                    <a href="tel:+1347-712-3569">+1 347-712-3569</a>
                    <p>
                        EMAIL:
                    </p>
                    <a href="mailto:lorena@burstofgreen.com">lorena@burstofgreen.com</a>
                    <p>
                        Hours of Service:
                    </p>
                    <a href="">Mon - Sat 8:00am to 6:00pm</a><br />
                    <a href="">Sunday Closed</a>
                </div>
            </div>

        </div>
        </div>
        <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} Burst of Green LLC. All Rights Reserved.</p>
        </div>
       
	</div>
    

    );
}

export default Footer;

