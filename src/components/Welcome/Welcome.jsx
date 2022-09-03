import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import './Welcome.scss'
export default function Welcome() {
  return (
    <section className="welcome-container" id="inicio">
      <h3> BEM VINDOS A DOCTORCARE 👍 </h3>
      <h1> Assistência Médica simplificada para todos! </h1>
      <p>
        Nosso foco é a saúde acessível e disponível para todas as idades e todas
        as classes sociais.
      </p>
      <div className="green-button">
        <FiPhoneCall size={20} /> AGENDE SUA CONSULTA
      </div>
      <img className="foto-mulher" src="src/assets/Foto.png" />
      <div className="estatisticas">
        <h3>+3.500</h3>
        <span>Danificados Atendidos</span>
        <h3>+15</h3>
        <span>Senseis Disponíveis</span>
        <h3>+10</h3>
        <span>Anos de DotA</span>
      </div>
    </section>
  )
}
