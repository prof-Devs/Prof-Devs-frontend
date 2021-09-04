import React from 'react'
import './aboutus.css';
import ibrahim from '../../images/ibrahim.jpg';
import dina from '../../images/dina.jpg';
import sukina from '../../images/sukina.jpg';
import haneen from '../../images/haneen.jpeg';
function AboutUs() {
    return (
        <>
      
            <div id="cardsWrapper">
                {/* <div id="firstListCard"> */}
                <h1 id="h1Card">Our team</h1>
                <ul class="cards">

                    <li>
                        <a href="" class="card">
                            <img src={dina} class="card__image" alt="" id="fff" />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img class="card__thumb" src={dina} alt="" />
                                    <div class="card__header-text">
                                        <h3 class="card__title">Dina Khaleel</h3>
                                        <span class="card__status">Full Stack Developer</span>
                                    </div>
                                </div>
                                <p class="card__description">"Success is how high you bounce when you hit bottom."</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" class="card">
                            <img src={ibrahim} class="card__image" alt="" id="fff" />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img class="card__thumb" src={ibrahim} alt="" />
                                    <div class="card__header-text">
                                        <h3 class="card__title">Ibrahim AbuAwad</h3>
                                        <span class="card__status">Full Stack Developer</span>
                                    </div>
                                </div>
                                <p class="card__description">"Success is walking from failure to failure with no loss of enthusiasm."</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" class="card">
                            <img src={haneen} class="card__image" alt="" id="fff" />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img class="card__thumb" src={haneen} alt="" />
                                    <div class="card__header-text">
                                        <h3 class="card__title">Haneen Abonser</h3>
                                        <span class="card__status">Full Stack Developer</span>
                                    </div>
                                </div>
                                <p class="card__description">"Success is liking yourself, liking what you do, and liking how you do it."</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" class="card">
                            <img src={sukina} class="card__image" alt="" id="fff" />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img class="card__thumb" src={sukina} alt="" />
                                    <div class="card__header-text">
                                        <h3 class="card__title">Sukina AbuHamad</h3>
                                        <span class="card__status">Full Stack Developer</span>
                                    </div>
                                </div>
                                <p class="card__description">"If you want to live a happy life, tie it to a goal, not to people or things."</p>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
            <div id="visionWrapper">
            <h1 id="h1Vision">Our vision</h1>
            <p id="stylingPar">Educational process is taking a critical path and become online according to current circumentences (COVID-19),So it was a good idea to create an online academic website that facilitates the educational process,serves students with multiple courses,provides private rooms for chatting between students and teacher and recognizes a seperated access for each teacher and student.</p>
            </div>
           
        </>
    )
}

export default AboutUs
