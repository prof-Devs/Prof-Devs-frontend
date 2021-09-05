import React from 'react'
import './footer.css';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <div id='containerFooter'>
            <div id="firstRow">
                <div id="logo">
                    <img src='https://cdn2.iconfinder.com/data/icons/ui-kit/100/icon_checked-512.png' width="60" height="60" />
                    <div id="firstDiv">
                        <h1 class="h1Style">Prof Academy</h1>
                        <p class='paraghStyle'>An online academic website that facilitates the educational process.</p>
                    </div>
                </div>

                <div id="secondDiv">
                    <h1 class="h1Style">Explore</h1>
                    <ul class="ulStyle">
                        <a href="/signup"><li>Sign Up</li></a>
                        <a href="/signin"> <li>Sign In</li></a>
                        <a><li>About Us</li></a>
                    </ul>
                </div>

                <div id="thirdDiv">
                    <h1 class="h1Style">Visit</h1>
                    <ul class="ulStyle">
                        <li>78 Bhulabhai Desai Road</li>
                        <li>Mumbai 400 026</li>
                        <li>Phone: (22) 2363-3611</li>
                    </ul>
                </div>
            </div>

            <div id="icons">
                <ul class="iconsUl">
                    <a><li><FaFacebook size='34' color='white' /></li></a>
                    <a><li><AiFillTwitterCircle size='37' color='white' /></li></a>
                    <a><li><AiFillGoogleCircle size='37' color='white' /></li></a>
                    <a><li><AiFillInstagram size='37' color='white' /></li></a>
                </ul>

            </div>
        </div>
    )
}

export default Footer
