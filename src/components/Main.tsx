import profilePic from '../assets/image2.jpeg' 
import trackerLogo from '../assets/192x192.png'
import eatThisLogo from "../assets/icon-192x192.png"
import { useEffect } from 'react'
import '../styling/Main.css'

export default function Main() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.slide-down');

    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active');
      }, index * 650); // stagger by 200ms
    });
  }, []);



  return (
    <>
      <div className="slide-down">
        <a target="_blank">
          <img src={profilePic} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1 className="slide-down">Martin Gomez</h1>
      <div className="card slide-down">
        <div className="appCard">

          <button>
            <img src={eatThisLogo} className="appIcon" onClick={() => window.open("https://eat-this-app-mgomez1023s-projects.vercel.app", "_blank")} />
          </button>
          <p>EatThis</p>

        </div>
        <div className="appCard">
          <button>
            <img src={trackerLogo} className="appIcon" onClick={() => window.open("https://baseball-stat-tracker-mgomez1023s-projects.vercel.app", "_blank")} />
          </button>       
          <p>StatTracker</p>
        </div>
      </div>

    </>


  );
}

export { Main }