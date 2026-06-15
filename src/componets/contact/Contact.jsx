import React from "react";
import './contact.css';
import { useRef } from "react";
import emailjs from '@emailjs/browser';


const Contact = () =>{
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_8fq65rb', 'template_17jcsi9', form.current, '3xQ2owXF1Z6pcT-1g')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    return(
        <section className="contact container section grid" id="contact">
            <h2 className="section__title">Contact Me</h2>

            <div className="contact__container ">
                {/* <div className="contact__info">
                <h3 className="contact__title">Let's Tallk About Everything</h3>
                </div> */}

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" 
                            placeholder="Name" required/>
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" 
                            placeholder="Email" required/>
                        </div>
                    </div>

                    <div className="contact__form-div">
                            <input type="text" className="contact__form-input" 
                            placeholder="Subject"/>
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <textarea name="" id="" cols="30" rows="10"
                        className="contact__form-input" placeholder="Message" required></textarea>
                    </div>

                    <button className="btn">Send</button>
                </form>

            </div>

        </section>
    )
}

export default Contact;