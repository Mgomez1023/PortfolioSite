import "../styling/Intro.css"
import ProfilePic from '../assets/image2.jpeg'

export default function Intro() {
    return (
        <>
            <div className="card">
                <div className="column1">
                    <img src={ProfilePic} alt="Profile" className="profilePic" />
                </div>
                <div className="column">
                    <p className="title">React developer studying Computer Science 
                        at the University of Illinois - Chicago
                    </p>

                    <button className="details">Details</button>
                </div>
            </div>
        </>
    );
}

export { Intro }