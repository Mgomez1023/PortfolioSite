import "../../styling/MobileIntro.css"
import ProfilePic from '../../assets/image2.jpeg'

export default function MobileIntro() {
    return (
        <>
            <div className="cardMobile">
                <div className="column1M mobile">
                    <img src={ProfilePic} alt="Profile" className="profilePic" />
                </div>
                <div className="column">
                    <div className="aboutText mobile">
                        <p className="aboutTitle mobile">About</p>

                        <p className="title">React developer studying Computer Science 
                            at the University of Illinois - Chicago
                        </p>
                    </div>
                    

                </div>
            </div>
        </>
    );
}

export { MobileIntro }