import React, { useState } from 'react';
import cv from '../cv/Maor_Katz_CV.pdf';

const AboutMe = () => {
    const [skills] = useState(['React', 'Redux', 'JavaScript', 'Angular', 'TypeScript', 'HTML5', 'CSS3', 'Node.js', 'jQuery', 'MySQL', 'MongoDB', 'Git', 'C', 'MATLAB', 'ARDUINO']);
    const downloadCv = () => {
        fetch(`../cv/Maor_Katz_cv.pdf`, { responseType: 'blob' })
            .then((response) => {
                return response.blob();
            })
            .then((blob) => {
                let link = document.createElement('a');
                link.href = cv;
                link.setAttribute('download', `Maor Katz CV.pdf`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    };
    return (
        <div className="AboutMe" id="aboutMe">
            <div className="aboutWrapper" id="aboutMeWrapper">
                <div className="section3Title">About Me</div>
                <div className="aboutDivider"></div>
                <div className="aboutParagraph">
                    Excellent human relations, creative thinking, excellent team worker, independent and diligent.
                    Highly motivated, autodidact.
                    Eager to learn new technologies.
                </div>
                <div className="aboutConclusion">
                    My skills <span className="skillsSpan">
                        {skills.map((s, index) => {
                            return <span className="skillsList" key={index}>
                                {s}{skills.length - 1 !== index && <span className="skillsDivider"></span>}
                            </span>;
                        })}
                    </span>
                </div>
                <div className="downloadWrapperBtn">
                    <button className="homepageBtn" onClick={() => downloadCv()}>Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;