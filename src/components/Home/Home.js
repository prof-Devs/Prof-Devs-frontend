import React, { Component } from 'react'
import './home.css'
export class Home extends Component {
    render() {
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
                                <img src='https://icon-library.com/images/icon-education/icon-education-0.jpg' width='50' height='50' />
                                <h1>Prof Academy</h1>
                            </div>
                            <p>Educational process is taking a critical path and become online according to current circumentences (COVID-19),So it was a good idea to create an online academic website that facilitates the educational process,serves students with multiple courses,provides private rooms for chatting between students and teacher and recognizes a seperated access for each teacher and student.</p>
                            <h4>For more information about us ... </h4>
                            <button class='btn'>About Us ..</button>
                        </div>
                        <div>
                            <img src='https://cdni.iconscout.com/illustration/premium/thumb/distance-education-2710073-2265251.png' />
                        </div>
                    </div>

                </div>
                <div id='secondWrapper'>
                    <div id='parag'>
                        <p class='paragraph2'>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
                    </div>
                    <div id='button'>
                        <button class='btn2'>Sign Up</button>
                    </div>
                </div>

                <div class='mainContainer'>
                    <div class='firstWrapper'>
                    <div>
                            <img src='https://thumbs.dreamstime.com/b/education-ladder-leading-to-future-life-success-education-ladder-leading-to-future-life-success-young-male-students-studying-218097882.jpg' />
                        </div>
                        <div class='paragraphLast'>
                            <div id='icon'>
                                <img src='https://cdn2.iconfinder.com/data/icons/ui-kit/100/icon_checked-512.png' width='65' height='65' />
                                <h1>Your choice to be successful !</h1>
                            </div>
                            <p>Successful students know how to focus on their studies when it matters while also taking breaks when they need them. They can manage their time wisely, stick to meaningful study schedules, and make the most of their time in the classroom. In the process, successful students also know how to have a good time, and love gaining knowledge as much as they enjoy getting stellar grades.</p>
                            <h4>Let's start you succsess journey ... </h4>
                        </div>
                       
                    </div>
                </div>
            </>
        )
    }
}

export default Home
