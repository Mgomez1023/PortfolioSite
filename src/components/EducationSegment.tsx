import "../styling/EducationSegment.css";
import { useState, forwardRef } from "react";
import comCollege from "../assets/EatThisQuestion.jpg";
import highSchool from "../assets/StatTrackerHomePage.jpg";
import university from "../assets/LoanerVehicleHome.jpg";

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
    description:
      "WordPress form that was used to manage loaner vehicles at an auto repair shop",
  },
  {
    id: "EatThis",
    title: "EatThis",
    image: comCollege,
    description:
      "A restaurant recommendation app that uses Google Maps API to suggest nearby dining options",
  },
  {
    id: "Baseball Stats Tracker",
    title: "Baseball Stats Tracker",
    image: highSchool,
    description:
      "A tool to track and analyze baseball statistics for local players and teams",
  },
];

// 👇 Wrap your component in forwardRef
const EducationSegment = forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedItem, setSelectedItem] = useState<string>(menuItems[0].id);
  const currentItem = menuItems.find((item) => item.id === selectedItem)!;

  return (
    // 👇 Attach ref to your outermost wrapper element
    <div ref={ref}>
      <h1>Projects</h1>
      <div className="eduCard">
        <div className="columns">
          <form className="detailsColumn">
            {menuItems.map((item) => (
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
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="contentImage"
              />
              <p className="contentDescription">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default EducationSegment;