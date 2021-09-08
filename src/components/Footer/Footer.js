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
                        <a href="/aboutus"><li>About Us</li></a>
                    </ul>
                </div>

                <div id="thirdDiv">
                    <h1 class="h1Style">Contact us</h1>
                    <ul class="ulStyle">
                        <li>Jordan</li>
                        <li>Amman-Macca street</li>
                        <li>Phone: (962) 2363-3611</li>
                    </ul>
                </div>
            </div>

            <div id="icons">
                <ul class="iconsUl">
                    <a href="/signup"><FaFacebook size='34' color='white' /></a>
                    <a href="/signup"><AiFillTwitterCircle size='37' color='white' /></a>
                    <a href="/signup"><AiFillGoogleCircle size='37' color='white' /></a>
                    <a href="/signup"><AiFillInstagram size='37' color='white' /></a>
                </ul>
            </div>
        </div>
    )
}

export default Footer
