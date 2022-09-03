import React from 'react'
import './Footer.scss'
import Logo from '../../assets/Logo'
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="wrapper">
        <Logo colored={false}/>
        <span>DoctorCare - 2021</span>
        <span>Todos os Direitos Reservados</span>
        <div className="social">
          <FiInstagram size={23} />
          <FiFacebook size={23} />
          <FiTwitter size={23} />
        </div>
      </div>
    </div>
  )
}
