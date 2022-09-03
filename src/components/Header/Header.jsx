import React, { useState } from 'react'
import Logo from '../../assets/Logo'
import { FiAlignRight } from 'react-icons/fi'
import Modal from '../Modal/Modal'
import './Header.scss'

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false)

  function openModal() {
    document.body.style.overflow = 'hidden'
    setModalOpen(true)
  }

  function closeModal() {
    document.body.style.overflow = 'unset'
    setModalOpen(false)
  }

  return (
    <header className="header-container">
      <div className="header-wrapper">
        <Logo />
        <FiAlignRight
          size={32}
          onClick={openModal}
          style={{ cursor: 'pointer' }}
        />
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </header>
  )
}
