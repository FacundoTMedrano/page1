import React, { useState } from 'react'
import youtube from "../imagenes/contact/youtube.svg"
import face from "../imagenes/contact/face.svg"
import twitter from "../imagenes/contact/twitter.svg"
import "../styles/contact.css"

export default function Contact() {

  const [datos, setDatos] = useState({
    name: "",
    email: "",
    message: ""
  })

  function cambios(e) {
    const { name, value } = e.target
    setDatos((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
    console.log(datos)
  }

  return (
    <main>
      <section className='sec-img-contact'>
        <div className='sec-op-cont'></div>
        <h1>CONTACT US</h1>
      </section>
      <section className='sec-contact'>
        <div className='div-form-contact'>
          <h2>WE'RE READY, LET'S TALK.</h2>
          <form className='form-contact'>
            <input
              type="text"
              name="name"
              placeholder='Your Name'
              onChange={(e) => cambios(e)}
            />
            <input
              type="text"
              name="email"
              placeholder='Email Address'
              onChange={(e) => cambios(e)}
            />
            <textarea
              type="text"
              autoComplete='off'
              rows={3}
              name="message"
              placeholder='Message'
              onChange={(e) => cambios(e)}
            />
          </form>
          <a href="#">SEND MESSAGE</a>
        </div>
        <div className='div-contactInfo-contact'>
          <h2>CONTACT INFO</h2>
          <div>
            <h5>Address</h5>
            <p>123 Fifth Avenue, NY 10160, New York, USA </p>
          </div>
          <div>
            <h5>Email Us</h5>
            <p>contact@example.com</p>
          </div>
          <div>
            <h5>Call Us</h5>
            <p>800-123-456</p>
          </div>
          <div>
            <h5>Follow Us</h5>
            <div className='redes-contact'>
              <a href="#">
                <img src={face} alt="face" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
