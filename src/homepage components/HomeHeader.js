import React, {useState} from 'react';

const HomeHeader = () => {
    const [openHeaderMobile, setOpenHeaderMobile] = useState(false);
    const scrollTo = (elementId) => {
        let element = document.getElementById(elementId);
        element.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className="Header">
            {openHeaderMobile && <div className="mobileWindow">
                <div onClick={() => {
                    scrollTo('section1Container');
                    setOpenHeaderMobile(!openHeaderMobile);
                }}>Home
                </div>
                <div onClick={() => {
                    scrollTo('section2Container');
                    setOpenHeaderMobile(!openHeaderMobile);
                }}>Projects
                </div>
                <div onClick={() => {
                    scrollTo('aboutMe');
                    setOpenHeaderMobile(!openHeaderMobile);
                }}>About me
                </div>
                <div onClick={() => {
                    scrollTo('ContactPage');
                    setOpenHeaderMobile(!openHeaderMobile);
                }}>Contact
                </div>
            </div>}

            <div className="headerLogo">MK</div>
            <i className="fas fa-bars mobileView hamburgerHeader"
               onClick={() => setOpenHeaderMobile(!openHeaderMobile)}></i>
            <div className="headerBtns" id="headerBtns">
                <div className="homeBtn headerBtn active" id="homeBtn"
                     onClick={() => scrollTo('section1Container')}>Home
                </div>
                <div className="projectsBtn headerBtn" id="homeProjectBtn"
                     onClick={() => scrollTo('section2Container')}>Projects
                </div>
                <div className="About headerBtn" id="homeAboutBtn"
                     onClick={() => scrollTo('aboutMe')}>About me
                </div>
                <div className="contactBtn headerBtn" id="homeContectBtn"
                     onClick={() => scrollTo('ContactPage')}>Contact
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;