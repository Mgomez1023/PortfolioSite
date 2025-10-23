import "../../styling/MobileEducationSegment.css"
import { useState, forwardRef } from 'react'
import comCollege from '../../assets/EatThisQuestion.jpg'
import highSchool from '../../assets/StatTrackerHomePage.jpg'
import university from '../../assets/LoanerVehicleHome.jpg'


const MobileEducationSegment = forwardRef<HTMLDivElement>((_, ref) => {

    interface MenuItem {
        id: string;
        title: string;
        image: string;
        description: string;
    }

    const menuItems: MenuItem[] = [
        {
            id: "loaner-vehicle-system",
            title: "Loaner Vehicle System",
            image: university,
            description: "WordPress form that was used to manage loaner vehicles at an auto repair shop"
        }, {
            id: "EatThis",
            title: "EatThis",
            image: comCollege,
            description: "A restaurant recommendation app that uses Google Maps API to suggest nearby dining options"
        }, {
            id: "Baseball Stats Tracker",
            title: "Baseball Stats Tracker",
            image: highSchool,
            description: "A tool to track and analyze baseball statistics for local players and teams"
        }
    ];
    const [openItem, setOpenItem] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    }

    return (
        <>
            <div ref={ref}>
                <h1>Projects</h1>
                <div className="mobile-menu">
                    {menuItems.map((item) => (
                        <div key={item.id} className="mobile-item">
                            <button onClick={() => toggleItem(item.id)} className="menu-button">
                                {item.title}
                            </button>
                            <div
                                className={`dropdown-content ${
                                openItem === item.id ? "open" : ""
                                }`}
                            >
                                <img src={item.image} alt={item.title} />
                                <p className="caption">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

})

export default MobileEducationSegment;