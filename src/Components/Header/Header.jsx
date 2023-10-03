import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'


const Header = () => {

  return (
    <header>


      <nav className="navbar navBar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">

          <button className="navbar-toggler mx-auto mb-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className='listado-menu text-center d-block d-md-flex'>
              <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
              <li className='nav-item'><a className='nav-link' href="">Servicio tecnico</a></li>
              <li className='nav-item'><a className='nav-link' href="">Sucursales</a></li>
              <li className='nav-item'><a className='nav-link' href="">Venta telefonica</a></li>
              <li className='nav-item'><Link className='nav-link' to="/contacto">Conctacto</Link></li>
            </ul>

          </div>




        </div>


      </nav>


      <div className='logoContainer d-none d-lg-block'>

        <img src="../../logo.png" alt="" />
        <h1>ShopNow</h1>


        <div className='btnHeader'>
          <button >Mi cuenta</button>
          <button > <AiOutlineHeart/> Favoritos</button>
          <button > <AiOutlineShoppingCart/>Carrito</button>
        </div>

      </div>

    </header>
  )
}
export default Header