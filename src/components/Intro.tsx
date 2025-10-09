import "../styling/Intro.css"
import ProfilePic from '../assets/image2.jpeg'

export default function Intro() {
    return (
        <>
            <div className="card">
                <div className="column1">
                    <img src={ProfilePic} alt="Profile" className="profilePic" />
                </div>
                <div className="aboutColumn">
                    <div className="aboutText">
                        <p className="aboutTitle">About</p>

                        <p className="aboutCaption">React developer studying Computer Science
                            at the University of Illinois - Chicago
                        </p>
                        <p className="aboutCaption">I'm passionate about building innovative, useful web applications.
                        </p>
                    </div>

                    <div className="label-div">
                        <div className="label">Chicago, IL</div>
                        <div className="label">C++</div>
                        <div className="label">React</div>

                    </div>

                    

                </div>
            </div>
        </>
    );
}

export { Intro }