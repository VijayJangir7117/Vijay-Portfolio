import React, { useRef } from 'react'
import '../Contact/Contact.css'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tignw4c', 'template_ve9qi5x', form.current, {
        publicKey: 'xAlC5R-7UprtiLHXj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email sent!")
          e.traget.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'  >
       <div id='contact'  >
       <h1  className='contactPageTitle'   >Contact Me</h1>
       <span className='contactDesc'>Please fill the  form below to disscuss any work opportunuty </span>
      <form className='contactForm' ref={form}  onSubmit={sendEmail} >
        <input  type='text'  className='name' placeholder='Your Name'  name='name'  />
        <input  type='email'  className='email' placeholder='Your email' name='from_email'  />
        <textarea  name='message' rows='5' placeholder='Your Message'      className='msg'  ></textarea>
        
         <button  type='submit'  value='Send' className='submitBtn'   >Submit</button>
        <div className='links'  >

        <img   src={FacebookIcon } alt='' className='link'   />
        <img   src={TwitterIcon} alt='' className='link'   />
        <img   src={Instagram} alt='' className='link'   />

   </div>
      </form>
    </div>
    </section>

     
  )
}

export default Contact
