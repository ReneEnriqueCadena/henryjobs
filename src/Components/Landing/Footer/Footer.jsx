import React from 'react'
import { Contenedor , Redes } from '../LandingStyles/footer'
import {AiFillInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs'

function Footer() {
  return (
    <Contenedor>
      <a  target='_blank' href='https://www.soyhenry.com/admissions'>
        <p>Admisiones</p>
      </a>
      <a  target='_blank' href='https://www.soyhenry.com/about-us'>
        <p>Sobre nosotros</p>
      </a>
      <Link to='hc'>
        <p>Preguntas Frecuentes</p>
      </Link>
      <Link to='/contact' >
          <p>Contacto</p>
      </Link>
      <Redes>
        <a  target='_blank' href='https://www.instagram.com/soyhenry_ok'>
          <AiFillInstagram/>
        </a>
        <a  target='_blank' href='https://twitter.com/soyhenry_ok'><FiTwitter/>
        </a>
        <a target='_blank' href='https://www.linkedin.com/school/henryok/'>
            <BsLinkedin />
        </a>
      </Redes>
    </Contenedor>
    )
}

export default Footer