import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import './Services.scss'

export default function Services() {
  return (
    <section className="services-container" id="services">
      <span>SERVIÇOS</span>
      <h1>Como podemos ajuda-lo a se sentir melhor?</h1>
      <div className="cards">
        <div className="card">
          <FcCheckmark className="check-mark" />
          <h2>Problemas Digestivos</h2>
          <p>Flatulências, Prisão de Ventre e Constirpações Crônicas</p>
        </div>
        <div className="card">
          <FcCheckmark className="check-mark" />
          <h2>Problemas Digestivos</h2>
          <p>Diarreia, Prisão de Ventre e Constirpações Crônicas</p>
        </div>
        <div className="card">
          <FcCheckmark className="check-mark" />
          <h2>Problemas Digestivos</h2>
          <p>Diarreia, Prisão de Ventre e Constirpações Crônicas</p>
        </div>
        <div className="card">
          <FcCheckmark className="check-mark" />
          <h2>Problemas Digestivos</h2>
          <p>Diarreia, Prisão de Ventre e Constirpações Crônicas</p>
        </div>
      </div>
    </section>
  )
}
