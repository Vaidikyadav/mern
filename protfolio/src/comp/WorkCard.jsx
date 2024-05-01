import React from 'react'
import './Workcard.css'
import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";
import { NavLink } from 'react-router-dom';

const WorkCard = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                <div className="project-card">
                    <img src={pro1} alt="image" />
                    <h2 className='project-title'>E-COMMERCE</h2>
                    <div className="pro-details">
                        <p>
                            Podcast Thriving Facebook community and top-ranked.Any inspires q grounded tangible
                            and self-affirming sense of "wow! I really can do this" for over 100,00 online entreprenerurs.
                        </p>
                        <div className="pro-btns">
                            <NavLink to="url.com" className="btn">VIEW</NavLink>
                            <NavLink to="url.com" className="btn">SOURCE</NavLink>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src={pro2} alt="image" />
                    <h2 className='project-title'>LMS/Course  WEBSITE</h2>
                    <div className="pro-details">
                        <p>
                            Top-ranked Thriving Facebook community and podcast, Amy inspires a grounded, tangible and self-affirming sense of "Wow! I really can do this" for 100,000 online.
                        </p>
                        <div className="pro-btns">
                            <NavLink to="url.com" className="btn">VIEW</NavLink>
                            <NavLink to="url.com" className="btn">SOURCE</NavLink>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src={pro3} alt="image" />
                    <h2 className='project-title'>Rymo Ecommerce Website</h2>
                    <div className="pro-details">
                        <p>
                            Top-ranked Thriving Facebook community and podcast, Amy inspires a grounded, tangible and self-affirming sense of "Wow! I really can do this" for 100,000 online.
                        </p>
                        <div className="pro-btns">
                            <NavLink to="http://localhost:5174/" className="btn">VIEW</NavLink>
                            <NavLink to="url.com" className="btn">SOURCE</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard 