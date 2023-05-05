import dungbum from '@/assets/img/about/DDDU6503.jpg'
import myCV from '@/assets/ReactJS Intern_Le Trung Dung.pdf'
import { TypeAnimation } from 'react-type-animation';
import Parallax from 'parallax-js'
import { useRef, useEffect } from 'react'

const About = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        if (sceneEl && sceneEl.current) {
            const parallaxInstance = new Parallax(sceneEl.current, {
                relativeInput: true,
                hoverOnly: true
            })
            parallaxInstance.enable();
            return () => parallaxInstance.disable();
        }
    }, [])

    return (
        <>
            <div className="arlo_tm_section relative" id="about" style={{ paddingTop: 100 }}>
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Main informations about me</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div ref={sceneEl} className="about_image_wrap parallax" data-relative-input="true">
                                        <div className="image layer" data-depth="0.2">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner" data-img-url={dungbum}
                                                style={{
                                                    backgroundImage: `url(${dungbum})`
                                                }}>

                                            </div>
                                        </div>
                                        <div className="border layer" data-depth="0.6">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>Hi there! ... I'm a
                                            &nbsp;
                                            <TypeAnimation
                                                sequence={[
                                                    'Freelance!', // Types 'One'
                                                    2000, // Waits 1s
                                                    'Web Developer!',
                                                    2000, // Types 'Three' without deleting 'Two'
                                                    () => {
                                                        console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                                                    }
                                                ]}
                                                wrapper="span"
                                                cursor={true}
                                                repeat={Infinity}
                                                style={{ color: 'green', display: 'inline-block' }}
                                            />
                                        </h4>
                                    </div>
                                    <div className="definition">
                                        <p>Hello! My name is <strong>Le Trung Dung</strong>.</p >
                                        <br />
                                        <p>I am a Web Developer, and I'm very passionate and dedicated to my work. With 2 years experience as a Web developer, I have acquired the skills and knowledge necessary to make your project a success. </p>
                                        <br />
                                        <p>I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>Birthday:</label> 19.12.2002</span>
                                            </li>
                                            <li>
                                                <span><label>Gender:</label> Male</span>
                                            </li>
                                            <li>
                                                <span><label>City:</label> Hanoi, Vietnam</span>
                                            </li>
                                            <li>
                                                <span><label>Interests:</label> Football, Billiard</span>
                                            </li>
                                            <li>
                                                <span><label>Study:</label> FPT University</span>
                                            </li>
                                            <li>
                                                <span><label>Major:</label> Software Engineering</span>
                                            </li>
                                            <li>
                                                <span><label>Website:</label> <a href="#">Not yet</a></span>
                                            </li>
                                            <li>
                                                <span><label>Mail:</label> <a href="mailto:trungdungle1912@gmail.com">trungdungle1912&#64;gmail.com</a></span>
                                            </li>
                                            <li>
                                                <span><label>Facebook:</label> <a href="https://www.facebook.com/dungg.trung.5/">Trung Dũng</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={myCV} download><span>Download CV</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About