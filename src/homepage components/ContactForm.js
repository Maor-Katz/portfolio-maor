import React, {useState} from "react";
import {useForm} from "react-hook-form";
import emailjs from 'emailjs-com';
import Modal from 'react-modal';


export default function ContactForm() {
    const {register, handleSubmit, errors} = useForm();
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const onSubmit = (data, e) => {
        emailjs.sendForm('gmail', 'template_2UgZTHCy', document.getElementById("myForm"), "user_znQ4X4etZob0TghJtTgqL")
            .then((result) => {
                console.log(result.text);
                setModalIsOpen(!modalIsOpen);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: "#20232a",
            textAlign: "center",
            color: "#fff"
        }
    };

    return (
        <div className="contactForm">
            <form onSubmit={handleSubmit(onSubmit)} id="myForm">
                <div className="inputLabel">NAME</div>
                <input
                    name="name"
                    type="text"
                    id="name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby="error-name-required error-name-maxLength"
                    ref={register({required: true})}
                    placeholder="TYPE YOUR NAME"
                    className="oneLineContactInput"
                />
                <div className="twoInputs">
                <span style={{flex: 1}}>
                <div className="inputLabel">PHONE</div>
                <input
                    name="phone"
                    type="text"
                    id="phone"
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby="error-phone-required"
                    ref={register({required: true})}
                    placeholder="TYPE PHONE NUMBER"
                    className="oneLineContactInput"
                    style={{width: "80%"}}
                />
                </span>
                    <span style={{flex: 1}}>
                <div className="inputLabel">EMAIL</div>
                <input
                    type="text"
                    id="email"
                    name="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby="error-name-required"
                    ref={register({required: true})}
                    placeholder="TYPE YOUR EMAIL"
                    className="oneLineContactInput"
                    style={{width: "80%"}}
                />
</span>
                </div>
                <div className="inputLabel">MESSAGE</div>
                <textarea
                    type="text"
                    id="message"
                    name="message"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby="error-name-required"
                    ref={register({required: true})}
                    placeholder="TYPE YOUR MESSAGE"
                    className="oneLineContactInput"
                    style={{height: "240px"}}
                />
                {errors.name && <p className="errorMsg">*Name requiered</p>}
                {errors.phone && <p className="errorMsg">*Phone requiered</p>}
                {errors.email && <p className="errorMsg">*Email requiered</p>}
                {errors.message && <p className="errorMsg">*Message requiered</p>}
                <div style={{textAlign: "center"}}><input type="submit" value="Submit" className="homepageBtn"/></div>
            </form>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h1>Thanks!</h1>
                <h2>i will be back to you as soon as possible!</h2>
                <button onClick={() => {
                    setModalIsOpen(false);
                }}
                        className="homepageBtn">Close
                </button>
            </Modal>
        </div>
    );
}