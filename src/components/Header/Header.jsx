import React from 'react'
import Logo from '../../assets/Logo'
import { FiAlignRight } from 'react-icons/fi'

import './Header.scss'

export default function Header() {
  return (
    <header className="header-container">
      <Logo />
      <FiAlignRight size={32} />
    </header>
  )
}
