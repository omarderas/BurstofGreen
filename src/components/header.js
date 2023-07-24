import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./../less/header.scss";

const MainLogo = "../images/Burst-of-Green-nobackground.png";
const Header = () => {
return(
  <header>
        <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">
                  <StaticImage src={MainLogo} /></a>
            </div>
            <div class="contact-block">
                <ul>
                    <li>
                        <a href="tel:+1347-712-3569">
                            
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <span>Call Us</span><br/>
                            <span class="second-line">Tel: +1 347-712-3569</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:lorena@burstofgreen.com">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <span>Email Us</span><br />
                            <span  class="second-line">lorena@burstofgreen.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                            <span>Hours of Service</span><br />
                            <span  class="second-line">Map and Hours</span>
                        </a>
                    </li>
               
                </ul>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li><a href="#" class="slant">Home</a></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Services<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Pricing<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Blog</a></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">About<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Contact Us</a></li>
                    <div class="social">
                    <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                   
                    </div>
                </ul>
      
            </div>
        </div>
    </nav>
  </header>
 )}
export default Header
