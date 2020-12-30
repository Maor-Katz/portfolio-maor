import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import gallery from './images/galleryNoBack.png';
import shopGirl from './images/shopping.png';
import sportImg from './images/megasport.png';
import media from './images/media.png';
import maor from './images/maorLst-removebg-preview.png';
import HomeFooter from "./homepage components/HomeFooter";
import AboutMe from "./homepage components/AboutMe";
import ContactMe from "./homepage components/ContactMe";
import HomeHeader from "./homepage components/HomeHeader";

export class Homepage extends React.Component {
    state = {
        _artists: [{
            title: 'Gallery',
            library: 'React',
            description: 'JavaScript',
            imageName: gallery,
            projectURL: 'gallery'
        },
        {
            title: 'Shopping-Cart',
            library: 'React Redux',
            description: 'JavaScript',
            imageName: shopGirl,
            projectURL: 'Shopping-Cart'
        },
        {
            title: 'MegaSport',
            library: 'React Redux',
            description: 'JavaScript Node.js MySQL',
            imageName: sportImg,
            href: 'https://megasport-site.herokuapp.com/'
        },
        {
            title: 'Maor-media',
            library: 'React Redux',
            description: 'JavaScript Node.js MongoDB',
            imageName: media,
            href: 'https://maor-media.herokuapp.com/'
        }],
        _things: [
            {
                title: 'Responsive',
                description: `layouts will work on any device, big or small.`
            },
            {
                title: 'Technologies',
                description: `React, Redux, JavaScript, MySQL, MongoDB, CSS3, SCSS`
            },
            {
                title: 'Intuitive',
                description: `Strong preference for easy to use, intuitive UX/UI.`
            }
        ],
    };

    activeHeaderBtn = (btnId) => {
        let headerBtns = document.getElementById("headerBtns").children;
        for (let btn of headerBtns) {
            btn.classList.remove("active");
            if (btn.id === btnId) {
                btn.className += " active";
            }
        }
    };

    componentWillUnmount() {
        document.removeEventListener("scroll", this.onScrollEvent);
    }

    onScrollEvent = () => {
        if (window.scrollY > 300 && window.scrollY < 1300) {
            this.addAnimationToProject();
            this.activeHeaderBtn("homeProjectBtn");
        }

        if (window.scrollY > 1300 && window.scrollY < 1600) {
            this.addAnimationToSection('aboutMeWrapper');
            this.activeHeaderBtn("homeAboutBtn");
        }

        if (window.scrollY > 1600) {
            this.addAnimationToSection('ContactPage');
            this.activeHeaderBtn("homeContectBtn");
        }
        if (window.scrollY < 100) {
            this.activeHeaderBtn("homeBtn");
        }
    };

    componentDidMount() {
        document.addEventListener('scroll', this.onScrollEvent);
    }

    addAnimationToProject = () => {
        let aboutTitle = document.getElementById("large-text-section2-bottom");
        let myProjectTitle = document.getElementById("myProjectTitle");
        let dividers = document.getElementsByClassName("divider-animate");
        let projects = document.getElementsByClassName("specificCategory");

        for (let i = 0; i < projects.length; i++) {
            let animationDuration = i + 1;
            projects[i].style.animation = `right-to-left ${animationDuration * 200}ms ease forwards`;
        }

        aboutTitle.style.animation = 'left-to-right .5s ease forwards';
        myProjectTitle.style.animation = 'left-to-right .5s ease forwards';
        for (let d of dividers) {
            d.style.animation = 'right-to-left .5s ease forwards';
        }
    };

    addAnimationToSection = (section) => {
        let aboutMeSection = document.getElementById(section);
        aboutMeSection.style.animation = 'bottom-to-top 2.3s ease forwards';
    };

    render() {
        const { _artists, _things } = this.state;
        return <div className="AppHompage">
            <HomeHeader />
            <div className="section1Container" id="section1Container">
                <div className="genericDetails">
                    <div className="large-text">Maor Katz</div>
                    <div className="small-text mainColor">Web developer
                    </div>
                    <div className="small-text medium-font">take a look at my projects and don't hesitate to Star my <a
                        href="https://github.com/Maor-Katz/" target="_blank" rel="noopener noreferrer">Github <i
                            className="fab fa-github"></i></a>
                    </div>
                    <div className="test"><i className="fal fa-arrow-circle-down"
                        onClick={() => document.getElementById("section2Container").scrollIntoView({ behavior: "smooth" })}></i>
                    </div>
                </div>
                <img src={maor} className="maorImg" />
            </div>

            <div className="section2Container" id="section2Container">
                <div className="upperContainer">
                    <div className="large-text-section2" id="myProjectTitle">My Projects</div>
                    <div className="divider-animate"></div>
                    <div className="categories">
                        {_artists.map((project, index) => (
                            project.projectURL ? <Link to={`/${project.projectURL}/`} key={index}>
                                <div className="specificCategory" key={index}>
                                    <img src={project.imageName} className="imgCard" alt="alt" />
                                    <div className="bottomCard">
                                        <div className="categoryName">{project.title}</div>
                                        <div className="personDetails">
                                            <span >{project.library + '  '}</span>
                                            <span>{project.description}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link> : <a target="_blank" href={project.href} rel="noopener noreferrer" key={index}>
                                    <div className="specificCategory" key={index}>
                                        <img src={project.imageName} className="imgCard" alt="alt" />
                                        <div className="bottomCard">
                                            <div className="categoryName">{project.title}</div>
                                            <div className="personDetails">
                                                <span >{project.library + '  '}</span>
                                                <span>{project.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                        ))}
                    </div>
                </div>
                <div className="bottomContainer">
                    <div className="large-text-section2-bottom" id="large-text-section2-bottom">Projects Info</div>
                    <div className="divider-animate"></div>
                    <div className="thingsList">
                        {_things.map((t, index) => (
                            <div className="specificThing" key={index}>
                                <div className="titleThing">{t.title}</div>
                                <div className="descriptionThing">{t.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section3Container">
                <AboutMe />
                <ContactMe />
                <HomeFooter />
            </div>
        </div>;

    }
}

export default Homepage;