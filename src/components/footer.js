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
                                    <a href="" target="_blank"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/upsidedowntoursbz/" target="_blank"><FaInstagram /></a>
                                 
                                </li>
                            
                    </ul>
                </div>
            </div>
            <div className="col-sm-4">
               <div className="footer-content">
                        <h1>Quick Links</h1>
                        <p><a href="/about-us">About Us</a></p>
                        <p><a href="/all-tours">Our Tours</a></p>
                        <p><a href="">Combo Deals</a></p>
                        <p><a href="/contact-us">Contact Us</a></p>
               
                </div>
            </div>
            <div className="col-sm-4 second">
                <div className="footer-content">
                    <h1>Contact Us</h1>
                    <p>
                        TEL:
                    </p>
                    <a href="tel:5016345385">+(501) 634-5385</a>
                    <p>
                        EMAIL:
                    </p>
                    <a href="mailto:info@upsidedowntours.com">info@upsidedowntours.com</a>
                    <p>
                        OFFICE HOURS:
                    </p>
                    <a href="">Mon - Sun, 8:00am to 4:00pm CST</a>
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

