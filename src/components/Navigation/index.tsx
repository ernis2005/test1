import React from 'react'
import './Page.scss'
import { RiMenu3Line } from "react-icons/ri";
export const Navigation = () => {
  return (
    <header className='Navigation'>
      <nav>
        <h1>
          opacle <span>digital</span>
        </h1>
        <ul>
          <li>Главная</li>
          <li>О компании</li>
          <li>Услуги</li>
          <li>Контакты</li>
        </ul>

        <p>Get started</p>
        <div className='MenuIcon'>
          <RiMenu3Line />
        </div>
      </nav>

    </header>
  )
}
