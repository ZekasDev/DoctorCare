import React from 'react'
import './Modal.scss'
import Logo from '../../assets/Logo'
import { FiX, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

export default function Modal({ closeModal }) {
  return (
    <div className="nav-modal">
      <div className="logo">
        <Logo />
        <FiX size={32} onClick={closeModal} style={{ cursor: 'pointer' }} />
      </div>
      <ul>
        <li>
          <a href="#inicio" onClick={closeModal}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#services" onClick={closeModal}>
            Serviços
          </a>
        </li>
        <li>
          <a href="#aboutus" onClick={closeModal}>
            Sobre nós
          </a>
        </li>
        <li>
          <a href="#contactus" onClick={closeModal}>
            Contato
          </a>
        </li>

        <div className="button">AGENDE SUA CONSULTA</div>
        <div className="social">
          <FiInstagram size={23} />
          <FiFacebook size={23} />
          <FiTwitter size={23} />
        </div>
      </ul>
    </div>
  )
}
