import React from 'react';
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactMe = () => {
    return (
        <div className="ContactPage">
            <div id="ContactPage">
                <div className="contactTitle section3Title">Contact Me</div>
                <div className="aboutDivider"></div>
                <div className="contact">
                    <ContactForm/>
                    <ContactDetails/>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;