import React from 'react'
import foto from '../img/unsplash.jpg';

const Contato = () => {
  return (
    <main className="container">
      <div className="contato">
        <div className="image">
          <img src={foto} alt="imagem contato"/>
        </div>
        <div className="info">
          <h1>Entre em contato.</h1>
          <ul>
            <li>workdevteixeira@gmail.com</li>
            <li>9 9999-9999</li>
            <li>Rua Ali Perto, 159</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Contato
