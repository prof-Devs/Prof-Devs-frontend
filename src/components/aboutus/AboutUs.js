import React from 'react'
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ibrahim from '../../images/ibrahim.jpg';
import dina from '../../images/dina.jpg';
// import sukina from '../../images/sukina.jpg';
import haneen from '../../images/haneen.jpeg';
import './aboutus.css';


export default function AboutUs() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="us"
                        src={dina}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dina Khaleel</h3>
                        <p>Software Developer</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="us"
                        src={haneen}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Haneen Abonser</h3>
                        <p>Software Developer</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="us"
                        src={ibrahim}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Ibrahim Abo Awad</h3>
                        <p>Software Developer</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                        className="us"
                        src={sukina}
                        alt="Third slide"
                    /> */}

                    <Carousel.Caption>
                        <h3>Sukina Abu Hammad</h3>
                        <p>Software Developer</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
