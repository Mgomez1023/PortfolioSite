import "../../styling/MobileIntro.css"
import ProfilePic from '../../assets/image2.jpeg'

export default function MobileIntro() {
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

                </div>
            </div>
        </>
    );
}

export { MobileIntro }