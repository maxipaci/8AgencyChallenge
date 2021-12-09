import React from 'react';
import './Header.css';

function Header() {

  return (
    <div className="Header" >
      <img src="/images/assets/HeaderBackground.svg" alt="Wave"/>
      <div className="Webinar" >WEBINAR</div>
      <div className="TextArea">
        <h1>El reto de humanizar el CX financiero en 2021.</h1>
        <h1>La experiencia de un unicornio de Latam</h1>
        <p>MIÉRCOLES 16 DE DICIEMBRE 17 HS (HORARIO DE QUITO)</p>
      </div>
    </div>
  );
}

export default Header;
