import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerPage'>
      <h3>ShopNow</h3>
      
      <div className='creditCard'>
          <img src="../../tarjetas.jpg" alt="" />
          <a href=''>Ver promociones con tarjetas</a>

         </div>

          <div className='linksFooter'>
            <a href=''>Envios a todo el País</a>
            <a href=''>Trabaja con nosotros</a>
            <a href=''>Accesibilidad</a>
            <a href=''>Ayuda</a>
          
          </div> 
      
      </div>
  )
}

export default Footer


