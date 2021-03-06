import React, { useEffect, useContext } from 'react'
import './home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useHistory
} from "react-router-dom";
import logo from '../Header/logo_academy.PNG';
import one from './Online test-pana.png'
import two from './Conversation-pana.png'
import three from './Graduation-amico.png'
import { HiOutlineLightBulb } from 'react-icons/hi';







function Home() {


    return (
        <>
            <div class='mainContainer'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div class='firstWrapper'>
                    <div class='paragraph'>
                        <div id='icon'>
                            <img height='80px' src={logo} alt='a' style={{ marginLeft: '-30px' }} />
                        </div>
                        <p>Educational process is taking a critical path and become online according to current circumentences (COVID-19),So it was a good idea to create an online academic website that facilitates the educational process,serves students with multiple courses,provides private rooms for chatting between students and teacher and recognizes a seperated access for each teacher and student.</p>
                        <h5>For more information about us ... </h5>
                        <a href='/aboutUs'><button class='btn'>About Us ..</button></a>
                    </div>
                    <div>
                        <img id='firstImage' src='https://cdni.iconscout.com/illustration/premium/thumb/distance-education-2710073-2265251.png' />
                    </div>
                </div>

            </div>
            <div id='secondWrapper'>
                <div id='parag'>
                    <p class='paragraph2'>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
                </div>
                <div id='button'>
                    <a href='/signup'><button class='btn2'>Sign Up</button></a>
                </div>
            </div>

            <div class='mainContainer'>
                <div class='firstWrapper'>
                    <div>
                        <img id='secondImage' src='https://thumbs.dreamstime.com/b/education-ladder-leading-to-future-life-success-education-ladder-leading-to-future-life-success-young-male-students-studying-218097882.jpg' />
                    </div>
                    <div class='paragraphLast'>
                        <div id='icon'>
                            <img src='https://cdn2.iconfinder.com/data/icons/ui-kit/100/icon_checked-512.png' width='45' height='45' />
                            <h1>Your choice to be successful !</h1>
                        </div>
                        <p>Successful students know how to focus on their studies when it matters while also taking breaks when they need them. They can manage their time wisely, stick to meaningful study schedules, and make the most of their time in the classroom. In the process, successful students also know how to have a good time, and love gaining knowledge as much as they enjoy getting stellar grades.</p>
                        <h5>Let's start you succsess journey ... </h5>
                    </div>

                </div>
            </div>
            <div id='thirdrdWrapper'>
                <div id='parag'>
                    <p class='paragraph3'> <HiOutlineLightBulb style={{fontSize:'70px'}}/> The only time success comes before work is in the dictionary.</p>
                </div>
            </div>
            <div>
                <h1 style={{textAlign:'center', marginBottom:'-40px'}}>Services</h1>
            </div>
            <div class="home-cards">
                <div class="hc-container">
                    <a href="products.html"><img src={one} alt="card1"></img>
                        <div class="overlay">
                            <div class="text">Student can take any available assignment or quiz online.</div>
                        </div></a>

                </div>
                <div class="hc-container">
                    <a href="aboutus.html">
                        <img src={two} alt="card2"></img>
                        <div class="overlay">
                            <div class="text">Student will have the ability to chat with his colleagues as will as his teachers.</div>
                        </div>
                    </a>
                </div>
                <div class="hc-container">
                    <a href="form.html"><img src={three} alt="card3"></img>
                        <div class="overlay">
                            <div class="text">First filling in gaps in their understanding and then accelerating their learning.</div>
                        </div></a>
                </div>
            </div>
        </>
    )
}


export default Home
