import "../../styling/MobileEducationSegment.css"
import { useState } from 'react'
import comCollege from '../../assets/comCollege.png'
import highSchool from '../../assets/highschool.png'
import university from '../../assets/university.png'


export default function MobileEducationSegment () {
    const menuItems = [
      {
        id: "university",
        title: "University",
        image: university,
        description: "I currently attend University of Illinois - Chicago. I expect to graduate May 2027.",
      },
      {
        id: "community-college",
        title: "Community College",
        image: comCollege,
        description: "I got my Associate’s in Applied Science from Moraine Valley Community College in 2024.",
      },
      {
        id: "highschool",
        title: "High School",
        image: highSchool,
        description: "I graduated from Argo High School in 2021.",
      },
    ];
    const [openItem, setOpenItem] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    }

    return (
        <>
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
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
    
}

export { MobileEducationSegment }