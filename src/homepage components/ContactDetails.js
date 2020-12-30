import React from 'react';

const ContactDetails = () => {
    return (
        <div className="contactDetails">
            <div className="contactInfoTitle">Contact Info</div>
            <div className="myEmail greyColorFont"><i className="fal fa-envelope"></i> <span
                className="mailSpan">maorkatz1990@gmail.com</span></div>
            <div className="myEmail greyColorFont"><i className="far fa-phone"></i> <span
                className="mailSpan">+972-50-8803686</span></div>
            <div className="contactInfoTitle">Follow Me</div>
            <div className="socialIconsHome">
                <a href="https://www.linkedin.com/in/maorkatz" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-linkedin footerIcon"></i></a>
                <a href="https://www.github.com/maor-katz" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-github-square footerIcon"></i></a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkHnpSjHvdLBlgpxmnzdLXSdVwVXdlbvJWblzrRnFwdPhKqJhPWVscXqHPprrpvDTXnQSM"
                   target="_blank" rel="noopener noreferrer"><i
                    className="fas fa-envelope-square footerIcon"></i></a>
            </div>
        </div>
    );
};

export default ContactDetails;