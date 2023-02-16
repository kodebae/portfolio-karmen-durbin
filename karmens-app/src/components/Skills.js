import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pyimg from '../assets/img/python-icon.png';
import javaimg from '../assets/img/java-icon.png';
import springimg from '../assets/img/spring-boot-icon.png';
import reactimg from '../assets/img/react-icon.png';
import jsimg from '../assets/img/js-icon.png';
import nodeimg from '../assets/img/node-js-icon.png';
import reduximg from '../assets/img/redux-icon.png';
import contextimg from '../assets/img/context-api-icon.png';
import sqlimg from '../assets/img/my-sql-icon.png';
import seleniumimg from '../assets/img/selenium-icon.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // media queries for different screen sizes
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tech Stack</h2>
                        <p>I am a software engineer who designs, develops, and maintains software and web applications.<br></br> I have years of experience in front-end web development and strong backend architecture and design interface skills.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={pyimg} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={javaimg} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={springimg} alt="Image" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={reactimg} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={jsimg} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={nodeimg} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={reduximg} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={contextimg} alt="Image" />
                                <h5>Context API</h5>
                            </div>
                            <div className="item">
                                <img src={sqlimg} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={seleniumimg} alt="Image" />
                                <h5>Selenium</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
