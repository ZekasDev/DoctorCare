import React, {useEffect} from 'react'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'
import './ScrollToTop.scss'
export default function ScrollToTop() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scroll = document.querySelector('.scroll-top')
      if (window.pageYOffset < 100) {
        scroll.classList.add('hidden')
      } else {
        scroll.classList.remove('hidden')
      }
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  })

  return (
    <div className={`scroll-top ${window.scrollY < 100 ? 'hiden' : ''}`}>
      <FiArrowUp onClick={scrollToTop} size={30} />
    </div>
  )
}
