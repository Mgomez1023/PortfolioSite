import "../styling/EducationSegment.css"
import { useState } from 'react'
import comCollege from '../assets/comCollege.png'
import highSchool from '../assets/highschool.png'
import university from '../assets/university.png'

interface MenuItem {
    id: string;
    title: string;
    image: string;
    description: string;
}

const menuItems: MenuItem[] = [
    {

        id: "university",
        title: "University",
        image: university,
        description: "I currently attend University of Illiois - Chicago. I expect to graduate May 2027."
    }, {
        id: "community-college",
        title: "Community College",
        image: comCollege,
        description: "I got my Associates in Applied Science from Moraine Valley Community College in 2024"
    }, {
        id: "highschool",
        title: "High School",
        image: highSchool,
        description: "I graduated from Argo High School in 2021"
    }
];

export default function EducationSegment () {
    const [selectedItem, setSelectedItem] = useState<string>(menuItems[0].id);
    const currentItem = menuItems.find(item => item.id === selectedItem)!;

    return (
        <>
            <div className="eduCard">
                <h1 className="educationTitle">Education</h1>
                <div className="columns">
                    <form className="detailsColumn">
                        {menuItems.map(item => (
                            <label key={item.id} className="radioItem">
                                <input
                                    type="radio"
                                    name="educationMenu"
                                    value={item.id}
                                    checked={selectedItem === item.id}
                                    onChange={() => setSelectedItem(item.id)}
                                />
                                <span className="customRadio"></span>
                                <span className="radioText">{item.title}</span>
                            </label>
                        ))}

                        
                    </form>

                    <div className="column2">
                        <div className="contentDisplay">
                            <img src={currentItem.image} alt ={currentItem.title} className="contentImage" />
                            <p className="contentDescription">{currentItem.description}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export { EducationSegment }