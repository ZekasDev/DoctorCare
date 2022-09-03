import React from 'react'
import './ContactUs.scss'
import { FiPhoneCall } from 'react-icons/fi'

export default function ContactUs() {
  return (
    <section className="contactus-container" id="contactus">
      <div className="wrapper">
        <h1>Entre em contato conosco!</h1>
        <div className="info">
          <span>R. Amauri Souza, 346</span>
          <span>contato@doctorcare.com</span>
        </div>
        <div className="button">
          <FiPhoneCall size={20} /> AGENDE SUA CONSULTA
        </div>
        <img src="src/assets/Pic2.png" />
      </div>
    </section>
  )
}
